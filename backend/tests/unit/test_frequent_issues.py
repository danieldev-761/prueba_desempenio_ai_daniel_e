import pytest
from app.services.frequent_issues_service import FrequentIssuesService, normalize_text


def test_normalize_text():
    raw = "¡Hola! ¿Tengo un problema con el pago?"
    norm = normalize_text(raw)
    assert "tengo un problema con el pago" in norm
    assert "¡" not in norm
    assert "?" not in norm


def test_frequent_issues_catalog_loaded():
    svc = FrequentIssuesService()
    assert len(svc.issues) >= 9
    categories = [i["id"] for i in svc.issues]
    assert "problemas_de_pago" in categories
    assert "acceso_plataforma" in categories
    assert "certificados_y_constancias" in categories
    assert "examen_clasificacion" in categories
    assert "congelaciones_y_retiros" in categories
    assert "perdida_modulo_inasistencias" in categories


@pytest.mark.parametrize("query,expected_category", [
    ("Tengo un problema con el pago", "problemas_de_pago"),
    ("Error en la pasarela, no puedo pagar con PSE", "problemas_de_pago"),
    ("Olvidé mi contraseña del aula virtual", "acceso_plataforma"),
    ("¿Cómo puedo solicitar una constancia de estudio?", "certificados_y_constancias"),
    ("Quiero presentar el examen de nivelación o placement test", "examen_clasificacion"),
    ("Necesito congelar mi matrícula este semestre", "congelaciones_y_retiros"),
    ("¿Dónde compro el libro de inglés y cómo activo el código?", "materiales_y_libros"),
    ("Quiero inscribirme al curso de preparación IELTS", "examenes_internacionales"),
    ("¿Qué pasa si pierdo el módulo por inasistencias?", "perdida_modulo_inasistencias"),
    ("Reprobé el nivel de francés, ¿cómo puedo habilitar?", "perdida_modulo_inasistencias"),
])
def test_frequent_issues_detection(query, expected_category):
    svc = FrequentIssuesService()
    match = svc.evaluate(query)
    assert match is not None
    assert match["category"] == expected_category
    assert len(match["response"]) > 30
    assert match["tier"] == 1


def test_frequent_issues_progressive_funnel():
    svc = FrequentIssuesService()
    sess_id = "test_funnel_session"

    # Turn 1: Initial report -> Tier 1
    m1 = svc.evaluate("Tengo un problema con el pago", session_id=sess_id)
    assert m1 is not None
    assert m1["tier"] == 1
    assert m1["is_escalate"] is False
    assert "Nivel 1" in m1["title"]

    # Turn 2: Persistence report -> Tier 2 (Deep Technical Diagnostics)
    m2 = svc.evaluate("Sigo con el problema, no me pasa el pago", session_id=sess_id)
    assert m2 is not None
    assert m2["tier"] == 2
    assert m2["is_escalate"] is False
    assert "Nivel 2" in m2["title"]
    assert "VPN" in m2["response"]

    # Turn 3: Exhaustion report -> Tier 3 (Gated Human Escalation)
    m3 = svc.evaluate("No pude solucionar, ya revisé todo", session_id=sess_id)
    assert m3 is not None
    assert m3["tier"] == 3
    assert m3["is_escalate"] is True
    assert "[[ESCALATE]]" in m3["response"]


@pytest.mark.parametrize("exhaustion_phrase", [
    "sigue igual",
    "no me sirvió nada",
    "no funcionó",
    "ya intenté todo y nada",
    "no me deja",
    "todavía no",
    "no",
])
def test_frequent_issues_exhaustion_variants(exhaustion_phrase):
    svc = FrequentIssuesService()
    sess_id = f"test_variant_{exhaustion_phrase}"

    # Prime session at Tier 2
    svc.evaluate("Tengo un problema con el pago", session_id=sess_id)
    svc.evaluate("Sigo con el problema del pago", session_id=sess_id)

    # Test variant phrase triggering Tier 3
    m3 = svc.evaluate(exhaustion_phrase, session_id=sess_id)
    assert m3 is not None, f"Phrase '{exhaustion_phrase}' failed to match exhaustion."
    assert m3["tier"] == 3
    assert m3["is_escalate"] is True


def test_perdida_modulo_inasistencias_funnel():
    svc = FrequentIssuesService()
    sess_id = "test_perdida_sess"

    # Turn 1
    m1 = svc.evaluate("Reprobé el módulo por faltas", session_id=sess_id)
    assert m1 is not None
    assert m1["category"] == "perdida_modulo_inasistencias"
    assert m1["tier"] == 1
    assert "3.8" in m1["response"]

    # Turn 2
    m2 = svc.evaluate("Sigo con el problema de la nota, ¿cómo habilito?", session_id=sess_id)
    assert m2 is not None
    assert m2["category"] == "perdida_modulo_inasistencias"
    assert m2["tier"] == 2
    assert "Habilitación" in m2["response"]


def test_frequent_issues_unmatched_query():
    svc = FrequentIssuesService()
    # General queries should NOT match triage and must proceed to RAG
    match = svc.evaluate("¿Cuáles son los cursos que ofertan?")
    assert match is None

    match2 = svc.evaluate("¿Tienen clases de francés los sábados?")
    assert match2 is None
