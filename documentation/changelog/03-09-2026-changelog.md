# Changelog: 03-09-2026

- Jueves-03/09/2026-20:26 : Configuración de entornos locales .env en backend y frontend a partir de plantillas .env.example
- Jueves-03/09/2026-20:27 : Creación e inicialización del entorno virtual backend con uv (Python 3.14) e instalación de dependencias bloqueadas en requirements.txt
- Jueves-03/09/2026-20:27 : Instalación de dependencias del frontend con pnpm v12
- Jueves-03/09/2026-20:32 : Inclusión del fixture autouse asíncrono `initialize_test_db` en `backend/tests/integration/test_chat_endpoints.py` para inicialización de esquemas relacionales SQLite en pruebas y validación exitosa de los 37 tests unitarios e integrados
