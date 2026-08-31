"""
Colombian Language Academy Knowledge Base Data Generator
Programmatically generates three comprehensive, realistic markdown documents in Spanish:
- cursos_y_modalidades.md
- precios_y_metodos_de_pago.md
- inscripciones_y_certificaciones.md
"""

import os
from pathlib import Path

DATA_RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"

COURSES_AND_MODALITIES_CONTENT = r"""# Academia de Idiomas Colombiana - Catálogo Oficial de Cursos, Horarios y Modalidades
**Año Académico: 2026 - 2027**
**Institución:** Academia de Idiomas Colombiana
**Acreditación:** Registro de Educación para el Trabajo y el Desarrollo Humano (Secretaría de Educación de Bogotá y Medellín) y Marco Común Europeo de Referencia (MCER).

---

## 1. Idiomas Ofrecidos y Enfoque Pedagógico

La Academia de Idiomas Colombiana imparte programas de formación lingüística estructurados bajo el estándar internacional del Marco Común Europeo de Referencia para las Lenguas (MCER / CEFR). Nuestro enfoque pedagógico es 100% comunicativo e interactivo, centrado en la inmersión conversacional, el desarrollo de fluidez auditiva, pronunciación precisa y comprensión lectora y escrita para contextos académicos, laborales y de viajes.

Los idiomas disponibles en la oferta regular son:
1. **Inglés General y de Negocios** (Niveles A1 hasta C1)
2. **Francés** (Niveles A1 hasta B2)
3. **Alemán** (Niveles A1 hasta B2)
4. **Italiano** (Niveles A1 hasta B2)
5. **Portugués Brasileño** (Niveles A1 hasta B2)

---

## 2. Estructura de Niveles según el MCER

Cada nivel de formación se compone de módulos mensuales secuenciales de 40 horas académicas de instrucción directa más prácticas guiadas en plataforma interactiva:

* **Nivel A1 (Acceso / Principiante):** 
  * Duración: 3 módulos (120 horas lectivas totales).
  * Competencias: El estudiante comprende y utiliza expresiones cotidianas familiares y frases básicas destinadas a satisfacer necesidades concretas. Capaz de presentarse a sí mismo y a otros, pedir y dar información personal sobre su domicilio, pertenencias y personas que conoce.
* **Nivel A2 (Plataforma / Básico Elemental):**
  * Duración: 3 módulos (120 horas lectivas totales).
  * Competencias: Comunicación en tareas sencillas y habituales que requieren un intercambio simple y directo de información sobre temas familiares y cotidianos (información básica familiar, compras, lugares de interés, ocupaciones).
* **Nivel B1 (Umbral / Intermedio):**
  * Duración: 4 módulos (160 horas lectivas totales).
  * Competencias: Comprensión de puntos principales en textos claros en lengua estándar relativos a situaciones conocidas de trabajo, estudio o de ocio. Desenvolvimiento en la mayor parte de las situaciones de viaje. Producción de textos sencillos y coherentes sobre temas cotidianos o de interés personal.
* **Nivel B2 (Avanzado / Intermedio Alto):**
  * Duración: 4 módulos (160 horas lectivas totales).
  * Competencias: Entendimiento de las ideas principales de textos complejos sobre temas tanto concretos como abstractos, incluso de carácter técnico en el área de especialización. Relación con hablantes nativos con fluidez y naturalidad sin tensión. Redacción de textos claros y detallados sobre diversas materias.
* **Nivel C1 (Dominio Operativo Eficaz / Avanzado Superior):**
  * Duración: 4 módulos (160 horas lectivas totales, disponible para Inglés).
  * Competencias: Comprensión de amplia variedad de textos extensos y exigentes, reconociendo sentidos implícitos. Uso flexible y efectivo del idioma para fines sociales, académicos y profesionales. Producción de textos claros, bien estructurados y detallados sobre temas de complejidad técnica.

---

## 3. Modalidades de Estudio

La academia ofrece tres modalidades flexibles diseñadas para adaptarse al estilo de vida del estudiante colombiano e internacional:

### 3.1 Modalidad 100% Virtual en Vivo (Online)
* **Metodología:** Clases sincrónicas en tiempo real a través de videoconferencia interactiva (Zoom Education HD y Google Meet for Education) dirigidas por docentes nativos o bilingües certificados C1/C2.
* **Plataforma LMS:** Acceso ilimitado las 24 horas del día, los 7 días de la semana a nuestra plataforma digital de aprendizaje, con ejercicios interactivos, grabaciones completas de todas las clases en caso de inasistencia, laboratorios de pronunciación con IA y biblioteca de recursos multimedia.
* **Tamaño del grupo:** Grupos reducidos de máximo 10 a 12 estudiantes por sala para garantizar participación activa constante.

### 3.2 Modalidad Presencial en Sede
* **Metodología:** Clases presenciales en aulas inteligentes climatizadas, equipadas con pantallas interactivas táctiles y zonas de inmersión conversacional (Language Coffee Lounges).
* **Sedes Físicas Habilitadas:**
  * **Sede Bogotá - Chapinero:** Carrera 7 # 54 - 20 (frente a la estación de TransMilenio Calle 57). Horario de atención presencial: Lunes a Viernes 07:00 a 20:00, Sábados 08:00 a 14:00 COT.
  * **Sede Bogotá - Calle 100:** Calle 100 # 15 - 30, Chicó Norte. Horario de atención: Lunes a Viernes 07:00 a 20:00, Sábados 08:00 a 13:00 COT.
  * **Sede Medellín - El Poblado:** Carrera 43A # 5A - 113, cerca al Parque del Poblado. Horario de atención: Lunes a Viernes 07:30 a 19:30, Sábados 08:00 a 13:30 COT.

### 3.3 Modalidad Híbrida (Blended Learning)
* Combina 2 sesiones virtuales sincrónicas entre semana (de 1 hora y media cada una) con una sesión práctica de inmersión y debate presencial los sábados en sede de 3 horas.

---

## 4. Franjas Horarias y Turnos (Hora de Colombia - COT UTC-5)

Todos los horarios se encuentran programados en la zona horaria oficial de Colombia (COT - GMT-5):

### 4.1 Turno Intensivo de Lunes a Viernes (2 Horas Diarias / 40 Horas al Mes)
* **Franja Mañana Madrugador:** 06:00 a 08:00 COT (Ideal para profesionales antes de iniciar la jornada laboral).
* **Franja Mañana Regular:** 09:00 a 11:00 COT.
* **Franja Tarde:** 14:00 a 16:00 COT.
* **Franja Noche Prime:** 18:30 a 20:30 COT o 20:30 a 22:30 COT (Modalidad virtual).

### 4.2 Turno Sabatino / Fin de Semana (5 Horas Semanales / 20 Horas al Mes)
* **Horario:** Sábados de 08:00 a 13:00 COT (con un receso pedagógico de 25 minutos).
* Disponible tanto en modalidad 100% Virtual como en sedes físicas de Bogotá y Medellín.

### 4.3 Clases Particulares y Personalizadas (One-on-One)
* Horarios 100% flexibles agendados a la medida de la disponibilidad del alumno entre las 06:00 y las 22:00 COT de lunes a domingo.
* Permite reprogramación con mínimo 24 horas de antelación sin costo adicional.

---

## 5. Prueba de Clasificación (Placement Test)

* Para los aspirantes con conocimientos previos del idioma que no deseen empezar desde el nivel A1 principiante, la academia dispone de una **Prueba de Clasificación Gratuita**.
* **Estructura del Test:**
  1. Componente en línea de 25 minutos (gramática, vocabulario y comprensión de lectura y escucha).
  2. Entrevista conversacional breve de 10 minutos con un docente evaluador vía Zoom.
* **Vigencia del resultado:** El resultado del nivel asignado tiene una validez oficial de 6 meses para formalizar la matrícula.
"""

PRICING_AND_PAYMENT_METHODS_CONTENT = r"""# Academia de Idiomas Colombiana - Tarifas Oficiales, Formas de Pago y Políticas Financieras
**Vigencia:** Año 2026
**Moneda Oficial:** Pesos Colombianos (COP) - Facturación Electrónica DIAN

---

## 1. Tarifas Oficiales de Matrícula y Programas

La Academia de Idiomas Colombiana mantiene una política de precios transparente sin costos ocultos. Los valores descritos a continuación cubren la totalidad de horas académicas del módulo correspondiente:

### 1.1 Programas Grupales Regulares de Idiomas (Inglés, Francés, Alemán, Italiano, Portugués)
* **Módulo Intensivo (Lunes a Viernes, 40 Horas Académicas al Mes):**
  * Precio por módulo mensual: **$650.000 COP**.
  * Incluye: Acceso a clases en vivo, grabaciones ilimitadas, talleres conversacionales semanales extracurriculares (Language Clubs) y soporte pedagógico.
* **Módulo Sabatino / Fin de Semana (Sábados, 20 Horas Académicas al Mes):**
  * Precio por módulo mensual: **$520.000 COP**.
  * Incluye: Clases de 5 horas semanales los sábados y acceso completo a la plataforma digital LMS.
* **Programa Teens (Jóvenes de 10 a 14 años, 30 Horas al Mes):**
  * Precio por módulo mensual: **$580.000 COP**.
  * Modalidad virtual o presencial sábados por la mañana o tardes entre semana.

### 1.2 Programas Personalizados y Tutorías VIP (One-on-One)
* **Hora de clase individual personalizada:** **$75.000 COP / hora**.
* **Paquete Bronce (10 Horas Personalizadas):** **$700.000 COP** (Ahorro de $50.000 COP).
* **Paquete Plata (20 Horas Personalizadas):** **$1.350.000 COP** (Ahorro de $150.000 COP).
* **Paquete Oro (40 Horas Personalizadas):** **$2.500.000 COP** (Ahorro de $500.000 COP).

### 1.3 Cursos Especiales de Preparación para Exámenes Internacionales
* **Curso de Preparación IELTS / TOEFL / Cambridge / DELF / Goethe (40 Horas):**
  * Precio por módulo preparatorio: **$780.000 COP**.
  * Incluye: 4 simulacros computarizados completos con retroalimentación individualizada de Speaking y Writing calificada por examinadores certificados.

---

## 2. Derechos de Matrícula y Material Pedagógico

* **Matrícula Anual Institucional:** **$80.000 COP** (pago único anual por estudiante). Cubre la afiliación al sistema académico, seguro estudiantil presencial y carné digital.
* **Licencia de Plataforma LMS y Libro Digital (E-book):** **$120.000 COP** (válida para 2 niveles completos / 6 meses de vigencia).
* Si el estudiante adquiere un paquete de 3 o más módulos por anticipado, la matrícula anual queda 100% bonificada ($0 COP).

---

## 3. Canales y Medios de Pago Autorizados

La academia cuenta con pasarela de pagos integrada para emisión instantánea de factura electrónica con RUT y cumplimiento tributario DIAN:

1. **PSE (Pagos Seguros en Línea):** Transferencias seguras desde cualquier banco colombiano (Bancolombia, Davivienda, BBVA, Banco de Bogotá, Scotiabank Colpatria, Itaú, Nu Colombia, Lulo Bank, etc.).
2. **Billeteras Digitales:** Pagos directos vía **Nequi** y **Daviplata** escaneando el código QR institucional oficial o a la línea de convenios empresariales.
3. **Tarjetas de Crédito y Débito:** Visa, MasterCard, American Express y Diners Club. Posibilidad de diferir pagos de 1 a 12 cuotas según las condiciones del banco emisor.
4. **Pago en Efectivo o Corresponsal Bancario:** Convenio de recaudo empresarial en puntos Bancolombia Corresponsal, Efecty y SuRed a nivel nacional utilizando el código de convenio institucional de la academia.
5. **Pagos Internacionales:** Pasarela Stripe y PayPal habilitada para estudiantes residentes en el exterior (conversión automática a USD al tipo de cambio oficial TRM del día).

---

## 4. Beneficios, Descuentos y Promociones

* **Descuento por Pronto Pago (10% de descuento):** Aplica para estudiantes que cancelen la totalidad del valor del módulo con al menos 10 días hábiles de anticipación a la fecha oficial de inicio de ciclo.
* **Descuento de Continuidad y Fidelidad (15% de descuento):** Otorgado de forma permanente a partir del tercer módulo cursado ininterrumpidamente en la institución.
* **Convenio Familiar:** 10% de descuento para familiares en primer grado de consanguinidad (hermanos, padres, hijos o cónyuges) inscritos simultáneamente.
* **Nota sobre descuentos:** Los descuentos no son acumulables entre sí; el sistema aplicará automáticamente el de mayor beneficio económico para el estudiante.

---

## 5. Políticas de Reembolso, Congelamiento y Cancelación

* **Reembolso Total (100% del valor cancelado):** El estudiante puede solicitar la devolución del 100% del dinero si radica su solicitud formal por correo electrónico o canal de soporte con mínimo 3 días hábiles de anterioridad al inicio formal del ciclo académico.
* **Retiro una vez iniciadas las clases:** De conformidad con la ley colombiana de educación para el trabajo, una vez iniciadas las actividades académicas no se realizan reembolsos en dinero en efectivo.
* **Congelamiento de Saldo Educativo (Crédito a Favor):** Si por motivos laborales, médicos o de fuerza mayor el alumno debe suspender sus estudios, puede congelar su saldo restante para retomarlo en cualquier ciclo dentro de los siguientes 6 meses calendario, notificando formalmente con soporte justificativo.
"""

INSCRIPCIONES_Y_CERTIFICACIONES_CONTENT = r"""# Academia de Idiomas Colombiana - Guía Oficial de Inscripciones, Certificaciones y Exámenes
**Dirección de Registro y Control Académico**
**Versión:** 2026.1

---

## 1. Proceso de Admisión e Inscripción Paso a Paso

El proceso de vinculación a la Academia de Idiomas Colombiana es 100% ágil y puede realizarse de manera virtual o presencial:

```
[ Paso 1: Registro Online ] ──► [ Paso 2: Placement Test ] ──► [ Paso 3: Selección de Curso ] ──► [ Paso 4: Pago y Bienvenida ]
```

### Detalle de los Pasos:
1. **Paso 1: Solicitud de Información y Registro Inicial:**
   * El aspirante ingresa sus datos básicos (nombre completo, número de documento de identidad, correo electrónico, número de WhatsApp y el idioma que desea aprender) a través del asistente virtual web o el bot de Telegram.
2. **Paso 2: Presentación de la Prueba de Clasificación (Gratuita):**
   * Si el aspirante ya posee conocimientos previos del idioma, realiza el placement test virtual de 25 minutos para diagnosticar con precisión el nivel MCER de ingreso. Si el estudiante arranca desde cero (principiante absoluto), pasa directo al nivel A1 sin presentar prueba.
3. **Paso 3: Selección de Sede, Modalidad y Horario:**
   * El aspirante elige entre la modalidad virtual o las sedes presenciales (Bogotá Chapinero, Bogotá Calle 100 o Medellín El Poblado), y escoge su franja horaria (Intensivo mañana, tarde, noche o Sabatino).
4. **Paso 4: Pago de Matrícula y Activación Inmediata:**
   * Al confirmar el pago vía PSE, tarjeta o Nequi, el sistema genera de forma automática la factura electrónica DIAN y despacha al correo del alumno sus credenciales de acceso al campus virtual LMS, enlace a la sala de clases y guía de inducción.

---

## 2. Documentos y Requisitos de Ingreso

Para formalizar la matrícula, se exige la siguiente documentación legible:
* **Ciudadanos colombianos mayores de 18 años:** Fotocopia o archivo digital de la Cédula de Ciudadanía vigente.
* **Menores de edad (10 a 17 años):** Fotocopia de la Tarjeta de Identidad y cédula del padre, madre o acudiente legal responsable.
* **Extranjeros residentes o no residentes:** Cédula de Extranjería, Permiso por Protección Temporal (PPT) o Pasaporte internacional vigente.
* **Edad Mínima de Ingreso:** 14 años cumplidos para el programa regular de adultos. Para niños y jóvenes entre 10 y 13 años disponemos de nuestro programa especializado Teens.
* No se requiere título de bachiller ni certificados de estudios secundarios previos.

---

## 3. Certificaciones Oficiales y Diplomas de Egreso

Al completar satisfactoriamente los niveles de formación, la Academia de Idiomas Colombiana expide las siguientes certificaciones con plena validez curricular, laboral y académica:

* **Diploma de Nivel MCER:** Otorgado al finalizar los niveles A1, A2, B1, B2 o C1. Acredita el cumplimiento de las competencias comunicativas y el total de horas académicas cursadas (ejemplo: *Certificado de Suficiencia en Lengua Inglesa - Nivel B2*).
* **Verificación Digital Segura:** Cada diploma emitido cuenta con un código QR único y número de registro académico verificable 24/7 en nuestro portal web institucional por empleadores y universidades.
* **Criterios de Aprobación Obligatorios:**
  * Obtener una calificación ponderada mínima de **80 sobre 100 puntos** en las evaluaciones periódicas y el examen final de módulo.
  * Cumplir con una asistencia mínima obligatoria del **85%** a las sesiones de clase programadas.
* **Constancias de Estudio y Certificados de Asistencia:** Los estudiantes activos pueden solicitar constancias de estudio digitales para trámites ante cajas de compensación, empresas o subsidios familiares, las cuales se emiten sin costo en un plazo máximo de 24 horas hábiles.

---

## 4. Preparación para Exámenes Internacionales Oficiales

La academia brinda módulos especializados intensivos de preparación técnica para las pruebas estandarizadas de mayor demanda internacional:

* **IELTS (International English Language Testing System):** Módulos enfocados en IELTS Academic (para admisiones universitarias y becas en Reino Unido, Canadá, Australia y Europa) y General Training (para procesos migratorios).
* **TOEFL iBT (Test of English as a Foreign Language):** Entrenamiento con software simulador idéntico a la prueba real de ETS, manejo estricto de tiempos y técnicas para Speaking integrado.
* **Exámenes de la Universidad de Cambridge:** Preparación para B2 First (FCE) y C1 Advanced (CAE).
* **DELF y DALF (Diplôme d'Études en Langue Française):** Preparación para los exámenes del Ministerio de Educación de Francia (A1 a B2).
* **Goethe-Zertifikat:** Preparación para las certificaciones oficiales del Goethe-Institut para idioma alemán.
* **Importante:** La academia es centro de preparación autorizado; el valor del examen internacional ante la entidad examinadora oficial (British Council, ETS, etc.) se cancela directamente ante dicha institución evaluadora.

---

## 5. Matriz de Atención Humana y Protocolo de Escalamiento

El asistente virtual resolverá automáticamente todas las preguntas fundamentadas en este catálogo. Cuando una solicitud corresponda a las siguientes situaciones excepcionales fuera de alcance, se activará el protocolo de escalamiento a un asesor académico humano:

1. **Traducciones Oficiales con Sello Juramentado:** Solicitudes de traducción oficial de registros civiles, títulos universitarios o sentencias judiciales para embajadas o juzgados (requieren remitir al área de peritos traductores certificados).
2. **Negociaciones Corporativas para Empresas:** Solicitudes de cotización de planes corporativos para grupos de más de 15 colaboradores con convenios empresariales a la medida.
3. **Planes de Pago Especiales o Solicitud de Condonaciones:** Casos especiales de fuerza mayor médica o calamidad familiar que requieran acuerdos financieros directos con la Dirección Administrativa.
4. **Homologaciones de Títulos Internacionales y Convalidación Formal ante el Ministerio de Educación Nacional.**
5. **Conflictos con Docentes o Solicitud de Reasignación de Grupo por Incompatibilidad.**

Al detectarse estas temáticas, el asistente emitirá el código de escalamiento `[[ESCALATE]]`, solicitará el nombre y número de cédula del alumno y creará una sesión en cola para atención prioritaria por el equipo de admisiones.
"""


def generate_all():
    DATA_RAW_DIR.mkdir(parents=True, exist_ok=True)
    
    files = [
        ("cursos_y_modalidades.md", COURSES_AND_MODALITIES_CONTENT),
        ("precios_y_metodos_de_pago.md", PRICING_AND_PAYMENT_METHODS_CONTENT),
        ("inscripciones_y_certificaciones.md", INSCRIPCIONES_Y_CERTIFICACIONES_CONTENT),
    ]
    
    for filename, content in files:
        target_path = DATA_RAW_DIR / filename
        with open(target_path, "w", encoding="utf-8") as f:
            f.write(content.strip() + "\n")
        print(f"Generated: {target_path} ({len(content)} characters)")

if __name__ == "__main__":
    generate_all()
