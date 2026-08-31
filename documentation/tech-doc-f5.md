# Technical Documentation - Phase 5: Frontend Development (React + Vite + Tailwind CSS)

## 1. Overview & Objectives
Phase 5 implements the interactive web application for the **Colombian Language Academy Intelligent Assistant**.

Key accomplishments in this phase include:
1. **Modern Single-Page Application (SPA):** Built with Vite, React 18, Tailwind CSS, and Lucide Icons.
2. **100% Spanish User Experience:** All student-facing dialogues, quick question chips, system announcements, fallback messages, and advisor workspaces are crafted in Spanish.
3. **Conversational RAG Interface:** Fast, responsive chat feed supporting Markdown bolding/lists, cache-hit badges, source citation accordions, and low-confidence warning pills.
4. **Multi-Channel Human Escalation:** Instant transition from automated AI to live human advisor via floating WebSocket chat window and modal identification (`[FirstName]_[Last4Digits]`).
5. **Post-Session Student Satisfaction:** Built-in 1-to-5 star rating and feedback submission upon session closure.
6. **Unified Staff Workspace (`AdminPortal.jsx`):** Protected administrative interface allowing advisors to claim live waiting sessions, monitor student profiles in CRM, inspect reviews, and reply directly to Telegram student chats.
7. **Session Persistence:** Full conversation continuity maintained across page reloads via `sessionStorage`.
8. **Production Build Verification:** Validated static bundle generation (`npm run build`) and SPA routing rewrites (`vercel.json`).

---

## 2. Component Hierarchy & User Journeys

```text
[ App.jsx ]
   ├── [ Navbar.jsx ] (Branding, Live Advisor Trigger, Inquiry Form, Staff Login)
   ├── [ HeroBanner.jsx ] (Quick Topic Prompts)
   ├── [ ChatContainer.jsx ]
   │      └── [ MessageBubble.jsx ] (Markdown parsing, Citations, Escalation Pill)
   ├── [ InputBar.jsx ] (Suggestions chips, Form input, Loading state)
   ├── [ Footer.jsx ] (Academy credentials & Contact info)
   │
   ├── MODALS & WORKSPACES:
   │      ├── [ EscalationModal.jsx ] (Collects Full Name + National ID)
   │      ├── [ LiveAdvisorChat.jsx ] (Floating WebSocket Chat + 5-Star Review Screen)
   │      ├── [ InquiryForm.jsx ] (Form submitting via 'webhook' channel)
   │      ├── [ AdminLoginModal.jsx ] (Admin PIN / Key verification)
   │      └── [ AdminPortal.jsx ] (Full Staff Desk: Escalations, Live Handover, CRM, Telegram reply)
```

---

## 3. Client API Service (`frontend/src/services/api.js`)
* `sendChatMessage(query, sessionId, channel)`: Interacts with `/api/v1/chat`.
* `getAdminMetrics(adminKey)`: Authenticates against `/api/v1/metrics`.
* `startEscalationSession(fullName, nationalId, initialInquiry, channel, tgChatId)`: Registers student and starts session.
* `getEscalatedSessions(adminKey)`: Lists open tickets for advisors.
* `getSessionMessages(sessionId)`: Retrieves conversation logs.
* `closeEscalationSession(adminKey, sessionId)`: Concludes advisor session.
* `submitSessionReview(sessionId, rating, notes)`: Sends satisfaction review.
* `replyTelegramStudent(adminKey, tgChatId, message, sessionId)`: Direct outbound reply to Telegram.
* `getWebSocketChatUrl(sessionId)`: Generates reactive WebSocket URL (`/api/v1/escalation/ws/chat/{session_id}`).

---

## 4. Build & Production Verification
* Production build executed successfully with `npm run build`:
  * Assets compiled: `dist/index.html` (0.84 kB), `dist/assets/*.css` (34.38 kB), `dist/assets/*.js` (227.76 kB).
  * Build time: 1.37 seconds with zero compilation warnings.
* Complete verification confirming zero legacy terms across all frontend sources.
