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


class FrequentIssuesService:
    """
    Deterministic Zero-Token Pre-LLM Triage Engine (ADR-012).
    Intercepts predictable administrative, technical, and operational inquiries
    using pre-compiled regex and normalized keyword matrices without calling LLMs.
    """

    def __init__(self, json_path: Optional[str] = None):
        self.json_path = Path(
            json_path or Path(__file__).resolve().parent.parent / "core" / "frequent_issues.json"
        )
        self.issues: List[Dict[str, Any]] = []
        self._compiled_rules: List[Dict[str, Any]] = []
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

                self._compiled_rules.append({
                    "id": issue.get("id"),
                    "title": issue.get("title"),
                    "norm_keywords": norm_keywords,
                    "patterns": compiled_patterns,
                    "response": issue.get("response"),
                })

            logger.info(f"FrequentIssuesService loaded {len(self._compiled_rules)} deterministic triage categories.")
        except Exception as e:
            logger.error(f"Failed to load frequent issues catalog: {e}")

    def evaluate(self, query: str) -> Optional[Dict[str, Any]]:
        """
        Evaluates an incoming student query against deterministic rule matrices.
        Returns the structured response payload if matched, otherwise None.
        Round-trip latency: < 2 milliseconds. Token cost: 0.
        """
        if not query or not query.strip():
            return None

        norm_query = normalize_text(query)

        for rule in self._compiled_rules:
            # 1. Check normalized keyword inclusion
            for kw in rule["norm_keywords"]:
                if kw in norm_query:
                    logger.info(
                        f"Deterministic Triage MATCH: category='{rule['id']}' via keyword='{kw}'"
                    )
                    return {
                        "category": rule["id"],
                        "title": rule["title"],
                        "response": rule["response"],
                        "matched_rule": kw,
                    }

            # 2. Check regex patterns
            for pattern in rule["patterns"]:
                if pattern.search(query) or pattern.search(norm_query):
                    logger.info(
                        f"Deterministic Triage MATCH: category='{rule['id']}' via pattern='{pattern.pattern}'"
                    )
                    return {
                        "category": rule["id"],
                        "title": rule["title"],
                        "response": rule["response"],
                        "matched_rule": pattern.pattern,
                    }

        return None
