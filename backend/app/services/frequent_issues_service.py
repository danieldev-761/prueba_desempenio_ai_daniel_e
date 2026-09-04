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
    re.compile(r"no\s+pude(\s+solucionar)?", re.IGNORECASE),
    re.compile(r"no\s+me\s+sirvi[oó](\s+nada)?", re.IGNORECASE),
    re.compile(r"no\s+me\s+funcion[oó](\s+nada|\s+ninguna)?", re.IGNORECASE),
    re.compile(r"no\s+(se\s+pudo|se\s+solucion[oó]|se\s+arregl[oó])", re.IGNORECASE),
    re.compile(r"sigue\s+igual", re.IGNORECASE),
    re.compile(r"a[uú]n\s+as[ií]\s+no", re.IGNORECASE),
    re.compile(r"todav[ií]a\s+no(\s+pasa|\s+deja|\s+funciona)?", re.IGNORECASE),
    re.compile(r"no\s+se\s+arregl[oó]", re.IGNORECASE),
    re.compile(r"no\s+se\s+solucion[oó]", re.IGNORECASE),
    re.compile(r"no\s+me\s+deja", re.IGNORECASE),
    re.compile(r"ya\s+(intent[eé]|prob[eé]|hice|revis[eé])\s+(todo|eso|nada|y\s+nada|y\s+sigue)", re.IGNORECASE),
    re.compile(r"quiero\s+hablar\s+con\s+un\s+asesor", re.IGNORECASE),
    re.compile(r"comunicar.*(asesor|persona|humano)", re.IGNORECASE),
    re.compile(r"pasame.*(asesor|persona|humano)", re.IGNORECASE),
    re.compile(r"atenci[oó]n\s+humana", re.IGNORECASE),
]

# Fast Out-of-Scope and Closed-Catalog Classifiers (ADR-011, ADR-012)
UNSUPPORTED_LANGUAGES = ["ruso", "japones", "japonesa", "mandarin", "chino", "arabe", "coreano", "hebreo", "polaco", "sueco", "holandes", "turco", "griego", "latin", "guarani", "esperanto"]
SUPPORTED_LANG_KEYS = ["ingles", "frances", "aleman", "italiano", "portugues"]

UNSUPPORTED_CITIES = ["cali", "barranquilla", "cartagena", "bucaramanga", "pereira", "manizales", "cucuta", "santa marta", "ibague", "villavicencio", "pasto", "armenia", "popayan", "neiva", "valledupar", "monteria", "sincelejo"]
SUPPORTED_CAMPUSES = ["bogota", "medellin"]

UNSUPPORTED_PAYMENT_TERMS = ["cripto", "bitcoin", "usdt", "ethereum", "btc", "cheque", "fiado", "pagar despues"]

OUT_OF_DOMAIN_PATTERNS = [
    re.compile(r"\b(chiste|chistes|broma|cuentame un chiste|hazme reir)\b", re.IGNORECASE),
    re.compile(r"\b(receta|cocinar|ingredientes|como hacer arroz|comida tipica)\b", re.IGNORECASE),
    re.compile(r"\b(futbol|partido|quien gano|campeonato|gol|champions|messi|cr7|seleccion colombia)\b", re.IGNORECASE),
    re.compile(r"\b(clima|pronostico del tiempo|va a llover)\b", re.IGNORECASE),
    re.compile(r"\b(horoscopo|signo zodiacal|astrologia|tarot)\b", re.IGNORECASE),
    re.compile(r"\b(politica|presidente|elecciones|alcalde|senado|partido politico)\b", re.IGNORECASE),
    re.compile(r"\b(escribe un codigo|python script|desarrollame una app|hackear|sql injection)\b", re.IGNORECASE),
    re.compile(r"\b(diagnostico medico|dolor de cabeza|sintomas de|remedio casero)\b", re.IGNORECASE),
    re.compile(r"\b(cancion|poema|escribe una historia|inventa un cuento|letra de)\b", re.IGNORECASE),
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

        # --- STEP 0: ZERO-TOKEN FAST DOMAIN & CLOSED CATALOG GUARDS (<1ms) ---
        # 0.1: Out-of-Domain Non-Academic Topics
        for pattern in OUT_OF_DOMAIN_PATTERNS:
            if pattern.search(query) or pattern.search(norm_query):
                logger.info(f"Fast Guard: Out-of-domain pattern matched '{pattern.pattern}'")
                return {
                    "category": "out_of_domain",
                    "title": "Alcance Académico Institucional",
                    "response": (
                        "En la Academia de Idiomas Colombiana nos especializamos exclusivamente en programas académicos de idiomas "
                        "(**Inglés**, **Francés**, **Alemán**, **Italiano** y **Portugués**), preparación para exámenes internacionales y certificaciones oficiales. "
                        "¿Sobre cuál de nuestros programas de idiomas te gustaría recibir información?"
                    ),
                    "matched_rule": "out_of_domain_guard",
                    "tier": 1,
                    "is_escalate": False,
                }

        # 0.2: Unsupported Languages Catalog Negation
        words = set(norm_query.split())
        matched_unsupported_lang = [lang for lang in UNSUPPORTED_LANGUAGES if lang in words or f" {lang} " in f" {norm_query} "]
        has_supported_lang = any(lang in norm_query for lang in SUPPORTED_LANG_KEYS)
        if matched_unsupported_lang and not has_supported_lang:
            logger.info(f"Fast Guard: Unsupported language '{matched_unsupported_lang[0]}' matched")
            return {
                "category": "unsupported_language",
                "title": "Catálogo Oficial de Idiomas",
                "response": (
                    f"Actualmente la Academia de Idiomas Colombiana no ofrece cursos de **{matched_unsupported_lang[0].capitalize()}**. "
                    "Nuestra oferta oficial incluye 5 idiomas: **Inglés** (General y Negocios), **Francés**, **Alemán**, **Italiano** y **Portugués brasileño**, "
                    "además de preparación para exámenes internacionales (IELTS, TOEFL, Cambridge, DELF y Goethe)."
                ),
                "matched_rule": "unsupported_lang_guard",
                "tier": 1,
                "is_escalate": False,
            }

        # 0.3: Unsupported Cities / Physical Campuses
        matched_unsupported_city = [city for city in UNSUPPORTED_CITIES if city in words or f" {city} " in f" {norm_query} "]
        has_supported_campus = any(campus in norm_query for campus in SUPPORTED_CAMPUSES)
        if matched_unsupported_city and not has_supported_campus and ("sede" in norm_query or "presencial" in norm_query or "donde" in norm_query or "ciudad" in norm_query):
            logger.info(f"Fast Guard: Unsupported city '{matched_unsupported_city[0]}' matched")
            return {
                "category": "unsupported_city",
                "title": "Sedes Presenciales y Cobertura Virtual",
                "response": (
                    f"No contamos con sede física presencial en **{matched_unsupported_city[0].capitalize()}**. "
                    "Nuestras sedes presenciales oficiales están ubicadas en **Bogotá** (Sede Chicó Norte) y **Medellín** (Sede El Poblado). "
                    "Para {matched_unsupported_city[0].capitalize()} y todo el territorio nacional disponemos de **Modalidad 100% Virtual con Clases en Vivo**, "
                    "con los mismos horarios, niveles del MCER y docentes certificados."
                ),
                "matched_rule": "unsupported_city_guard",
                "tier": 1,
                "is_escalate": False,
            }

        # 0.4: Unsupported Payment Methods
        matched_unsupported_pay = [pay for pay in UNSUPPORTED_PAYMENT_TERMS if pay in words or f" {pay} " in f" {norm_query} "]
        if matched_unsupported_pay:
            logger.info(f"Fast Guard: Unsupported payment term '{matched_unsupported_pay[0]}' matched")
            return {
                "category": "unsupported_payment",
                "title": "Medios Oficiales de Pago",
                "response": (
                    "No aceptamos pagos en criptomonedas, cheques ni diferidos no bancarizados. "
                    "Nuestros canales autorizados son: **PSE**, **Nequi**, **Daviplata**, **Tarjetas de Crédito/Débito** (Visa, MasterCard, Amex), "
                    "corresponsales bancarios (**Bancolombia, Efecty, SuRed**) y pasarela internacional (**Stripe / PayPal**)."
                ),
                "matched_rule": "unsupported_payment_guard",
                "tier": 1,
                "is_escalate": False,
            }

        # 0.5: Gibberish / Meaningless Noise
        vowels = sum(1 for c in norm_query if c in "aeiou")
        consonants = sum(1 for c in norm_query if c in "bcdfghjklmnpqrstvwxyz")
        total_letters = vowels + consonants
        is_keyboard_mash = bool(re.search(r"(asdf|qwer|zxcv|hjkl|1234|aaaa|zzzz|xxxx)", norm_query))
        is_low_vowel_ratio = total_letters >= 4 and (vowels == 0 or (consonants > 0 and (vowels / total_letters) < 0.20))

        if len(norm_query) < 2 or is_keyboard_mash or is_low_vowel_ratio:
            logger.info(f"Fast Guard: Gibberish/Noise input detected '{norm_query}'")
            return {
                "category": "gibberish_input",
                "title": "Atención al Estudiante",
                "response": (
                    "No logramos comprender tu consulta. Por favor escribe tu pregunta sobre nuestros cursos de idiomas, tarifas, horarios, sedes o certificaciones "
                    "y con gusto te brindaremos toda la información oficial."
                ),
                "matched_rule": "noise_guard",
                "tier": 1,
                "is_escalate": False,
            }

        # --- STEP 1: CHECK FOR TIER 3 EXHAUSTION (Gated Escalation) ---
        # Tier 3 is strictly gated: only triggered when the user has ALREADY undergone Tier 2 diagnostics!
        is_direct_negative = (
            prev_state is not None
            and prev_state.get("tier", 0) >= 2
            and norm_query in ["no", "tampoco", "para nada", "nada", "no pude", "sigue igual", "todavia no", "sigo igual", "no sirvio", "no funciono"]
        )
        is_exhaustion = any(p.search(query) or p.search(norm_query) for p in EXHAUSTION_PATTERNS)
        if (is_direct_negative or is_exhaustion) and prev_state and prev_state.get("tier", 0) >= 2:
            logger.info(f"Triage Funnel TIER 3 TRIGGERED for session '{sess_key}': self-service exhausted.")
            cat = prev_state.get("last_category", "general")
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
