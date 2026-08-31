import json
import re
import unicodedata
from pathlib import Path
from typing import Optional, Dict, Any, List
from app.core.logging import get_logger

logger = get_logger("frequent_issues_service")


def normalize_text(text: str) -> str:
    """
    Normalizes Spanish text by removing accents, lowercasing, and stripping punctuation.
    Example: '¡Tengo un problema con el pago!' -> 'tengo un problema con el pago'
    """
    if not text:
        return ""
    # Normalize unicode to separate base characters and diacritics
    nfkd = unicodedata.normalize("NFKD", text)
    without_accents = "".join([c for c in nfkd if not unicodedata.combining(c)])
    # Lowercase and clean special chars
    cleaned = re.sub(r"[^a-zA-Z0-9\s]", " ", without_accents).lower()
    return " ".join(cleaned.split())


# Patterns indicating the student is persisting or reiterating an existing issue
PERSISTENCE_PATTERNS = [
    re.compile(r"sigo\s+con", re.IGNORECASE),
    re.compile(r"a[uú]n\s+no", re.IGNORECASE),
    re.compile(r"persiste", re.IGNORECASE),
    re.compile(r"contin[uú]a", re.IGNORECASE),
    re.compile(r"sigue\s+(sin|fallando|el\s+error|el\s+problema|igual|sin\s+funcionar)", re.IGNORECASE),
    re.compile(r"no\s+pude", re.IGNORECASE),
    re.compile(r"no\s+funciona\s+todav[ií]a", re.IGNORECASE),
    re.compile(r"ya\s+revis[eé]", re.IGNORECASE),
    re.compile(r"ya\s+intent[eé]", re.IGNORECASE),
    re.compile(r"ya\s+prob[eé]", re.IGNORECASE),
    re.compile(r"sigue\s+saliendo", re.IGNORECASE),
    re.compile(r"no\s+me\s+deja", re.IGNORECASE),
]

# Patterns indicating self-service is fully exhausted and human escalation is required
EXHAUSTION_PATTERNS = [
    re.compile(r"no\s+pude\s+solucionar", re.IGNORECASE),
    re.compile(r"no\s+me\s+sirvi[oó]", re.IGNORECASE),
    re.compile(r"no\s+funcion[oó]", re.IGNORECASE),
    re.compile(r"ya\s+intent[eé]\s+todo", re.IGNORECASE),
    re.compile(r"ya\s+hice\s+todo", re.IGNORECASE),
    re.compile(r"quiero\s+hablar\s+con\s+un\s+asesor", re.IGNORECASE),
    re.compile(r"comunicar.*(asesor|persona|humano)", re.IGNORECASE),
    re.compile(r"pasame.*(asesor|persona|humano)", re.IGNORECASE),
    re.compile(r"atenci[oó]n\s+humana", re.IGNORECASE),
]


class FrequentIssuesService:
    """
    3-Tier Progressive Triage Funnel & Deterministic Pre-LLM Engine (ADR-012 & ADR-013).
    - Tier 1: Zero-token initial diagnostic checklist.
    - Tier 2: Deep technical troubleshooting for persistent issues (VPN, limits, cache, alternative methods).
    - Tier 3: Gated human escalation triggered when self-service is completely exhausted.
    """

    def __init__(self, json_path: Optional[str] = None):
        self.json_path = Path(
            json_path or Path(__file__).resolve().parent.parent / "core" / "frequent_issues.json"
        )
        self.issues: List[Dict[str, Any]] = []
        self._compiled_rules: List[Dict[str, Any]] = []
        # In-memory tracking of triage session state: {session_id: {"last_category": str, "tier": int}}
        self._session_state: Dict[str, Dict[str, Any]] = {}
        self.load_rules()

    def load_rules(self) -> None:
        try:
            if not self.json_path.exists():
                logger.warning(f"Frequent issues JSON not found at: {self.json_path}")
                return

            with open(self.json_path, "r", encoding="utf-8") as f:
                self.issues = json.load(f)

            self._compiled_rules = []
            for issue in self.issues:
                # Pre-normalize keywords
                norm_keywords = [normalize_text(kw) for kw in issue.get("keywords", []) if kw]

                # Pre-compile regex patterns
                compiled_patterns = []
                for p in issue.get("patterns", []):
                    try:
                        compiled_patterns.append(re.compile(p, re.IGNORECASE))
                    except re.error as err:
                        logger.error(f"Invalid regex pattern '{p}' in issue '{issue.get('id')}': {err}")

                # Support backward-compatible response or progressive tier1/tier2
                tier1 = issue.get("response_tier1") or issue.get("response") or ""
                tier2 = issue.get("response_tier2") or tier1

                self._compiled_rules.append({
                    "id": issue.get("id"),
                    "title": issue.get("title"),
                    "norm_keywords": norm_keywords,
                    "patterns": compiled_patterns,
                    "response_tier1": tier1,
                    "response_tier2": tier2,
                })

            logger.info(f"FrequentIssuesService loaded {len(self._compiled_rules)} progressive triage categories.")
        except Exception as e:
            logger.error(f"Failed to load frequent issues catalog: {e}")

    def evaluate(self, query: str, session_id: Optional[str] = None) -> Optional[Dict[str, Any]]:
        """
        Evaluates an incoming student query against the 3-tier progressive triage funnel.
        Returns structured diagnostic response (Tier 1/Tier 2) or escalation token (Tier 3).
        """
        if not query or not query.strip():
            return None

        norm_query = normalize_text(query)
        sess_key = session_id or "default_session"
        prev_state = self._session_state.get(sess_key)

        # --- STEP 1: CHECK FOR TIER 3 EXHAUSTION (Gated Escalation) ---
        is_exhaustion = any(p.search(query) or p.search(norm_query) for p in EXHAUSTION_PATTERNS)
        if is_exhaustion:
            # If the student previously underwent Tier 1 or Tier 2 troubleshooting:
            if prev_state and prev_state.get("tier", 0) >= 1:
                logger.info(f"Triage Funnel TIER 3 TRIGGERED for session '{sess_key}': self-service exhausted.")
                cat = prev_state.get("last_category", "general")
                # Clear session state on escalation
                self._session_state[sess_key] = {"last_category": cat, "tier": 3}
                return {
                    "category": cat,
                    "title": "Transferencia a Asesor Académico",
                    "response": (
                        "Entendemos que has realizado las comprobaciones técnicas y el inconveniente continúa. "
                        "Para brindarte una solución definitiva, transferiremos tu caso de inmediato con un **Asesor Académico** de nuestro equipo. [[ESCALATE]]"
                    ),
                    "matched_rule": "exhaustion_gate",
                    "tier": 3,
                    "is_escalate": True,
                }

        # --- STEP 2: CHECK FOR CATEGORY MATCH IN FREQUENT ISSUES ---
        matched_rule = None
        matched_kw = None

        for rule in self._compiled_rules:
            # Check normalized keywords
            for kw in rule["norm_keywords"]:
                if kw in norm_query:
                    matched_rule = rule
                    matched_kw = kw
                    break
            if matched_rule:
                break

            # Check regex patterns
            for pattern in rule["patterns"]:
                if pattern.search(query) or pattern.search(norm_query):
                    matched_rule = rule
                    matched_kw = pattern.pattern
                    break
            if matched_rule:
                break

        # If no explicit category matched, check if user is persisting on the previous category
        is_persisting = any(p.search(query) or p.search(norm_query) for p in PERSISTENCE_PATTERNS)
        if not matched_rule and is_persisting and prev_state and prev_state.get("last_category"):
            # Reuse previous category
            prev_cat = prev_state["last_category"]
            matched_rule = next((r for r in self._compiled_rules if r["id"] == prev_cat), None)
            matched_kw = "persisting_followup"

        if not matched_rule:
            return None

        # --- STEP 3: SELECT TIER 1 VS TIER 2 ---
        cat_id = matched_rule["id"]
        # Check if the user is in Tier 2 (either previously served Tier 1 for this category, or query indicates persistence)
        is_repetition = (prev_state is not None and prev_state.get("last_category") == cat_id and prev_state.get("tier", 0) >= 1)
        should_deliver_tier2 = is_repetition or is_persisting

        if should_deliver_tier2:
            logger.info(f"Triage Funnel TIER 2 MATCH: category='{cat_id}' for session '{sess_key}'")
            self._session_state[sess_key] = {"last_category": cat_id, "tier": 2}
            return {
                "category": cat_id,
                "title": f"{matched_rule['title']} (Diagnóstico Nivel 2)",
                "response": matched_rule["response_tier2"],
                "matched_rule": matched_kw,
                "tier": 2,
                "is_escalate": False,
            }
        else:
            logger.info(f"Triage Funnel TIER 1 MATCH: category='{cat_id}' for session '{sess_key}'")
            self._session_state[sess_key] = {"last_category": cat_id, "tier": 1}
            return {
                "category": cat_id,
                "title": f"{matched_rule['title']} (Nivel 1)",
                "response": matched_rule["response_tier1"],
                "matched_rule": matched_kw,
                "tier": 1,
                "is_escalate": False,
            }
