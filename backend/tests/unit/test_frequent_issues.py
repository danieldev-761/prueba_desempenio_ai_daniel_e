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
    assert len(svc.issues) >= 8
    categories = [i["id"] for i in svc.issues]
    assert "problemas_de_pago" in categories
    assert "acceso_plataforma" in categories
    assert "certificados_y_constancias" in categories
    assert "examen_clasificacion" in categories
    assert "congelaciones_y_retiros" in categories


@pytest.mark.parametrize("query,expected_category", [
    ("Tengo un problema con el pago", "problemas_de_pago"),
    ("Error en la pasarela, no puedo pagar con PSE", "problemas_de_pago"),
    ("Olvidé mi contraseña del aula virtual", "acceso_plataforma"),
    ("¿Cómo puedo solicitar una constancia de estudio?", "certificados_y_constancias"),
    ("Quiero presentar el examen de nivelación o placement test", "examen_clasificacion"),
    ("Necesito congelar mi matrícula este semestre", "congelaciones_y_retiros"),
    ("¿Dónde compro el libro de inglés y cómo activo el código?", "materiales_y_libros"),
    ("Quiero inscribirme al curso de preparación IELTS", "examenes_internacionales"),
])
def test_frequent_issues_detection(query, expected_category):
    svc = FrequentIssuesService()
    match = svc.evaluate(query)
    assert match is not None
    assert match["category"] == expected_category
    assert len(match["response"]) > 30


def test_frequent_issues_unmatched_query():
    svc = FrequentIssuesService()
    # General queries should NOT match triage and must proceed to RAG
    match = svc.evaluate("¿Cuáles son los cursos que ofertan?")
    assert match is None

    match2 = svc.evaluate("¿Tienen clases de francés los sábados?")
    assert match2 is None
