# ADR 001: Instalación de Subagentes, Skills y Gobernanza de Automatización

## Estado
Aceptado

## Contexto
Se requiere dotar al entorno de trabajo (global y local) de subagentes especializados para desarrollo, seguridad, pruebas y diseño UI/UX, así como establecer las reglas operativas de registro de cambios diario, auto-commit en git y documentación técnica por fases.

## Decisiones
1. **Subagentes instalados (global y local)**:
   - `error-detective`
   - `backend-architect`
   - `security-auditor`
   - `code-reviewer`
   - `project-orchestrator`
   - `integration-test-builder`
   - `test-architect`
   - `unit-test-generator`
   - `docker-specialist`
   - `tech-writer`
   - `git-strategist`
   - `code-commentator`
   - `refactoring-expert`
   - `database-engineer`
   - `api-designer`
   - `ui-ux-pro-max` (instalado tanto en `.agent/skills/` / `.agents/skills/` como en `~/.agents/skills/` y `~/.gemini/config/skills/`).

2. **Gobernanza y Reglas**:
   - `documentation/changelog/[DD]-[MM]-[YYYY]-changelog.md` para registro diario en formato `- [Day]-[DD/MM/YYYY]-[HH:MM] : [Change Description]`.
   - Auto-commits con conventional commits (`feat:`, `fix:`, `docs:`, etc.).
   - Alineación obligatoria con `docs/` y registro de desvíos en ADR.
   - Documentación técnica exhaustiva de cada fase en `documentation/tech-doc-f[N].md`.

## Consecuencias
El sistema cuenta ahora con soporte completo para agentes en Claude Code, Antigravity y Gemini CLI a nivel proyecto y a nivel global de usuario.
