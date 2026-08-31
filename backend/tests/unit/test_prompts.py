from app.core.prompts import SYSTEM_PROMPT, FEW_SHOT_EXAMPLES, ESCALATION_HUMAN_MESSAGE


def test_prompts_system_constraints():
    assert "Asesor Académico Virtual" in SYSTEM_PROMPT
    assert "Academia de Idiomas Colombiana" in SYSTEM_PROMPT
    assert "[[ESCALATE]]" in SYSTEM_PROMPT
    assert "{context}" in SYSTEM_PROMPT
    assert "{history}" in SYSTEM_PROMPT


def test_prompts_few_shot_structure():
    assert len(FEW_SHOT_EXAMPLES) >= 3
    # Verify in-scope example
    in_scope = FEW_SHOT_EXAMPLES[1]["content"]
    assert "COP" in in_scope or "descuento" in in_scope or "intensivo" in in_scope

    # Verify escalation examples include [[ESCALATE]]
    has_escalate_token = any("[[ESCALATE]]" in ex["content"] for ex in FEW_SHOT_EXAMPLES)
    assert has_escalate_token is True


def test_prompts_escalation_message():
    assert len(ESCALATION_HUMAN_MESSAGE) > 20
    assert "asesor" in ESCALATION_HUMAN_MESSAGE.lower()
