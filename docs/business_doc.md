# Business Requirements & Domain Logic Specification
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

---

## 1. Executive Summary & Business Objectives

A leading Colombian Language Academy ("Academia de Idiomas Colombiana") is experiencing customer support saturation across Telegram, email, and web inquiry channels. Prospective and current students repeatedly request information regarding:
* **Horarios (Schedules & Shifts)**
* **Precios (Tuition & Payment Options)**
* **Niveles (Language Levels & CEFR Framework)**
* **Inscripciones (Enrollment Process & Requirements)**
* **Certificaciones (Diplomas & International Exam Prep)**
* **Modalidades (Study Modalities: Online, On-Campus, Hybrid, Intensive)**

The goal of this system is to deploy an intelligent, autonomous customer service assistant that:
1. **Zero-Hallucination Grounded Answers:** Answers inquiries strictly based on official academy business documents.
2. **Deterministic Human Escalation:** Escalates seamlessly to human academic advisors when inquiries are out-of-scope, ambiguous, or require manual verification.
3. **Cost Optimization:** Leverages a semantic cache layer to eliminate LLM API costs on repeated inquiries and a relevance similarity gate before generative calls.
4. **Multi-Channel Reception:** Ingests queries via Telegram bot, HTTP webhooks, and a modern responsive web interface.
5. **Brand Tone:** Maintains a welcoming, professional, and clear communication style tailored to Colombian and international language learners.

---

## 2. Scope Definition Matrix (In-Scope vs. Out-of-Scope)

The assistant operates under a **closed-world retrieval model** based exclusively on the academy's official knowledge base.

| Domain Area | In-Scope (Automated RAG Resolution) | Out-of-Scope (Human Escalation Required) |
| :--- | :--- | :--- |
| **Schedules & Shifts (Horarios)** | Regular weekday shifts (morning, afternoon, night), weekend schedules (Saturdays 8:00 AM - 1:00 PM COT), intensive programs (2h daily), class start dates, holiday policies. | Requests for individual schedule exceptions, rescheduling missed 1-on-1 classes, teacher reassignments. |
| **Pricing & Payments (Precios)** | Standard tuition per module/level in Colombian Pesos (COP) and USD, enrollment fees, study material costs, payment channels (PSE, Bancolombia, Nequi, Credit Card), early bird discounts. | Custom corporate group pricing contracts, debt refinancing, refund dispute claims, financial hardship discount petitions. |
| **Levels & Placement (Niveles)** | Common European Framework of Reference (CEFR: A1, A2, B1, B2, C1), duration per level (hours/months), languages offered (English, French, German, Italian, Portuguese), free online placement test flow. | Validation of informal external language certificates, appeals on placement test scores. |
| **Enrollment & Admissions (Inscripciones)** | Step-by-step registration procedure, required identification (Cédula de Ciudadanía, Tarjeta de Identidad, Pasaporte), registration deadlines, age limits (teens vs. adults). | Special legal guardian authorizations for minors, manual invoice generation with corporate tax ID (RUT / DIAN), contract disputes. |
| **Certifications & Exams (Certificaciones)** | Academy course completion diplomas, certified attendance letters, international preparation modules (IELTS, TOEFL, Cambridge, DELF/DALF, Goethe-Zertifikat), mock exams. | Official court-certified sworn translations, requests to modify legal names on historical diplomas, embassy verification letters. |
| **Study Modalities (Modalidades)** | 100% Online (live interactive Zoom/Meet classes + 24/7 LMS platform), In-Person (physical campuses in Bogotá, Medellín), Hybrid / Blended options. | Campus access badge replacements, physical parking permits, classroom room changes. |

---

## 3. Decision Logic & Workflow State Machine

Every user query passes through an optimized decision funnel designed to minimize latency, eliminate unnecessary token consumption, and protect against hallucinations:

```
                           [ Incoming User Inquiry ]
                                       │
                                       ▼
                       [ Semantic Cache Lookup ]
                            ├── Hit  ──► [ Return Cached Response ($0 API Cost) ]
                            └── Miss ──► [ Vector Store Retrieval (Top-K Chunks) ]
                                                    │
                                                    ▼
                                     [ Similarity >= Relevance Threshold? ]
                                           ├── No  ──► [ Trigger Direct Escalation ]
                                           └── Yes ──► [ LLM Contextual Generation ]
                                                                   │
                                                                   ▼
                                                [ Response Contains Grounded Answer? ]
                                                    ├── Yes ──► [ Return Answer + Update Cache ]
                                                    └── No  ──► [ Human Escalation + Advisor Ticket ]
```

### Business Rules:
1. **Strict Closed-World Guardrail:** The model answers solely from retrieved business text chunks. If information is absent or insufficient, it outputs the fallback trigger token `[[ESCALATE]]`.
2. **Escalation Protocol:** When an inquiry cannot be answered with high confidence, the system transitions to `ESCALATED_TO_HUMAN`, logs the reason tag (e.g., `OUT_OF_SCOPE`, `LOW_SIMILARITY`, `UNGROUNDED_CONTEXT`), and prompts the student to connect with an academic advisor.
3. **Relevance Gating:** If the cosine similarity of the top retrieved chunk is below `0.70`, the system bypasses generative LLM invocation to conserve API budget.
4. **Semantic Caching:** Query embeddings with similarity $\ge 0.92$ (distance $\le 0.08$) to previous resolved inquiries are served instantly with zero LLM API cost.

---

## 4. Business Knowledge Base Structure

The academy's knowledge repository is organized into three structured business documents:

1. **`courses_and_modalities.md`**
   - Languages offered: English, French, German, Italian, Portuguese.
   - CEFR Framework alignment: A1 (Beginner), A2 (Elementary), B1 (Intermediate), B2 (Upper-Intermediate), C1 (Advanced).
   - Modalities: 100% Virtual (live classes + LMS), On-Campus (Sedes Bogotá: Chapinero & Calle 100; Medellín: El Poblado), Hybrid.
   - Schedules: Morning (6:00 AM - 8:00 AM COT), Standard (9:00 AM - 11:00 AM, 2:00 PM - 4:00 PM), Evening (6:30 PM - 8:30 PM), Saturdays (8:00 AM - 1:00 PM).
   - Placement test: Free 25-minute online evaluation.

2. **`pricing_and_payment_methods.md`**
   - Tuition rates per module/level in COP (e.g., Intensive 40-hour module: $650,000 COP; Regular Saturday track: $520,000 COP; 1-on-1 private tutoring: $75,000 COP/hour).
   - Enrollment fees: One-time registration fee ($80,000 COP), includes digital textbook license and LMS access.
   - Payment gateways: PSE (Colombian interbank transfers), Bancolombia QR/Account Transfer, Nequi, Credit Cards (Visa, Mastercard, American Express).
   - Discounts: 10% early-bird discount (paying 10+ business days prior to cohort start), 15% alumni/continuation discount.
   - Refund policy: 100% refund up to 3 business days before cohort start; no refunds once classes commence.

3. **`admissions_and_certifications.md`**
   - Registration requirements: Valid national ID (Cédula de Ciudadanía, Tarjeta de Identidad, Cédula de Extranjería, Pasaporte), minimum age (14 years for general adult track; specialized teens program for ages 10-13).
   - Registration procedure: 4-step flow (Online application -> Placement test -> Course selection -> Payment confirmation).
   - Certifications: Academy certificate of completion granted upon passing with $\ge 80\%$ grade and $\ge 85\%$ attendance.
   - International exam preparation programs: IELTS Academic/General, TOEFL iBT, Cambridge (FCE, CAE), DELF (A1-B2), Goethe-Zertifikat (A1-B2). Includes weekly computer-based mock exams.

---

## 5. Brand Voice & Communication Guidelines

* **Persona:** Senior Academic Advisor at Academia de Idiomas Colombiana.
* **Tone:** Professional, welcoming, culturally warm (*"con mucho gusto"*, respectful, supportive), clear, concise, and focused on learner empowerment.
* **Language Support:** Primary language for operational contracts and code is English; customer-facing assistant answers fluidly in Spanish and English according to the user's inquiry language.
* **Call to Action (CTA):** Guide prospective students toward scheduling their free placement test or completing enrollment.

---

## 6. Telemetry, Analytics & Business KPIs

The system continuously captures key metrics for business observability:
* **Resolution Status Breakdown:** `RESOLVED_BY_CACHE`, `RESOLVED_BY_RAG`, `ESCALATED_TO_HUMAN`.
* **Escalation Rate (%):** Monitored to detect knowledge gaps in documentation.
* **Cost & Token Telemetry:** Exact prompt and completion tokens tracked per session to evaluate API efficiency.
* **Channel Distribution:** Inquiry origin tracking across Web Chat, Telegram Bot, and Contact Form Webhook.
