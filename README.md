<div align="center">

# Sarkar-Sakhi (సర్కార్-సఖి)

**Voice-First Government Scheme & Application Readiness Companion for Rural India**

[![Build Status](https://img.shields.io/badge/build-passing-15803d?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Tests](https://img.shields.io/badge/vitest-12%20passing-0f766e?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Accessibility](https://img.shields.io/badge/WCAG%20AA-Compliant-994200?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Zero Secrets](https://img.shields.io/badge/Backend%20%2F%20API%20Keys-None%20Required-1d4ed8?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![License: MIT](https://img.shields.io/badge/License-MIT-334155?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)

**Built for the Scaler × Wispr — *Build for Bharat* Hackathon (Round 2)**  
**Theme:** Public Infrastructure & Civic Services

</div>

---

## 1. Executive Summary & Problem Statement

Across rural India, millions of eligible elderly citizens and widows miss out on critical social welfare pensions—not because schemes do not exist, but because navigating **eligibility rules**, **paperwork checklists**, and **local government offices** requires literacy, typing, and form comprehension.

**Sarkar-Sakhi** transforms welfare discovery from a text-heavy, form-based chore into a **voice-first guided conversation**. Designed around **Lakshmamma** (a fictional 68-year-old Telugu-speaking widow who cannot read forms or type), the platform takes citizens from spoken intent to **Application Readiness** in under 90 seconds.

### Key Differentiator: Application Readiness, Not Just Information
Most portals stop at static scheme descriptions. Sarkar-Sakhi delivers an end-to-end civic readiness pipeline:
1. **Spoken Intent Capture**: Citizens speak naturally in Telugu (`te-IN`), Hindi (`hi-IN`), or English (`en-IN`).
2. **Deterministic Eligibility Evaluation**: A transparent, auditable rules engine identifies qualifying schemes (*Old-Age Pension* & *Widow Pension* under Telangana Aasara demo rules) with matched, unmet, and verification-needed breakdowns.
3. **Personalized Document Checklist**: Dynamically tailors required documents (e.g., surfacing *Husband's Death Certificate* only when applicable) with audio readouts per document and persistent local progress.
4. **Actionable Next Steps & WhatsApp Handoff**: Generates a localized readiness summary for one-tap WhatsApp sharing with family members, Gram Panchayat volunteers, or MeeSeva operators.

---

## 2. Core End-to-End Flow

```text
┌──────────────┐     ┌──────────────────┐     ┌───────────────────────────────┐
│  Home Screen │ ──▶ │  Voice / Intent  │ ──▶ │   5-Step Guided Questionnaire │
│  (Tap & Speak│     │ Keyword Matcher  │     │ Age → Gender → Marital Status │
│  or Play Demo│     │  (Zero Ext. AI)  │     │ → Income Band → Prior Pension │
└──────────────┘     └──────────────────┘     └───────────────┬───────────────┘
                                                              │
┌────────────────────┐     ┌──────────────────┐               ▼
│ Next Steps & Share │ ◀── │  Personalized    │ ◀── ┌─────────────────────────┐
│ • 3 Action Steps   │     │  Doc Checklist   │     │   Eligibility Results   │
│ • MeeSeva / MPDO   │     │ • Checkboxes     │     │ • "May qualify" status  │
│ • WhatsApp & Copy  │     │ • Audio "Hear"   │     │ • Matched / Unmet rules │
└────────────────────┘     └──────────────────┘     └─────────────────────────┘
```

---

## 3. Architecture & Engineering Principles

Sarkar-Sakhi is engineered as a **zero-backend, privacy-first, static web application** that runs locally in the browser with **zero API keys or secret credentials**.

### Privacy & Data Minimization by Design
* **Zero PII Collection**: Never asks for or collects citizen names, phone numbers, or Aadhaar numbers.
* **Client-Side Execution**: All intent matching, rules evaluation, and state persistence execute locally inside the user's browser (`localStorage`).
* **Transparent Disclaimers**: Every scheme result clearly displays *"Demo information, confirm with your Mandal office or official portal"* and uses *"May qualify"* rather than authoritative eligibility guarantees.

### Config-Driven Multi-State & Multi-Language Extensibility
All UI copy, scheme rules, document metadata, office locations, and demo scripts live in a single typed configuration layer ([`src/config/content.ts`](src/config/content.ts)). Extending Sarkar-Sakhi to new Indian states or regional languages requires **configuration additions only**—no component rewrites.

### Module Breakdown

```text
sarkar-sakhi/
├── index.html                          # Semantic HTML5 shell + Noto Sans Telugu typography
├── tailwind.config.js                  # Design tokens aligned with Stitch UI specifications
├── src/
│   ├── config/
│   │   └── content.ts                  # Centralized i18n (te, en, hi), schemes, docs, questions, demo script
│   ├── engine/
│   │   ├── rules.ts                    # Pure evaluate(answers, scheme) engine
│   │   ├── intent.ts                   # Offline multilingual keyword intent matcher
│   │   ├── speechMatcher.ts            # Maps spoken numbers & Telugu/English synonyms to options
│   │   ├── rules.test.ts               # Unit tests: Lakshmamma persona + boundary edge cases
│   │   └── intent.test.ts              # Unit tests: multilingual speech & intent matching
│   ├── hooks/
│   │   └── useVoiceSpeech.ts           # Web Speech API (SpeechRecognition + SpeechSynthesis) wrapper
│   ├── context/
│   │   └── AppContext.tsx              # State management, localStorage persistence & Demo Mode runner
│   ├── components/
│   │   ├── Header.tsx                  # Persistent navigation & instant language switcher (తెలుగు/EN/हिंदी)
│   │   ├── Footer.tsx                  # Privacy guarantee & About/Limitations navigation
│   │   ├── VoiceInput.tsx              # Pulsing mic CTA, editable transcript & graceful error states
│   │   └── HearAgainButton.tsx         # Text-to-speech playback trigger on every screen & item
│   └── screens/
│       ├── HomeScreen.tsx              # Voice-first landing + Lakshmamma "Play demo" CTA
│       ├── IntentScreen.tsx            # Large-target fallback intent selector
│       ├── QuestionWizardScreen.tsx    # One-question-per-screen wizard with exact age toggle
│       ├── ResultsScreen.tsx           # Scheme eligibility breakdown & disclaimers
│       ├── ChecklistScreen.tsx         # Interactive document checklist with readiness % bar
│       ├── NextStepsScreen.tsx         # Mandal/MeeSeva guide + WhatsApp & Clipboard sharing
│       └── AboutScreen.tsx             # Scope, limitations & privacy documentation
└── stitch_sarkar_sakhi/                # Reference UI prototypes & DESIGN.md specification
```

---

## 4. Voice Engine & Accessibility Standards

Built specifically for low-end Android Chrome devices and low-literacy/low-vision users:

| Capability | Implementation Details |
| :--- | :--- |
| **Speech Recognition** | Native Web Speech API (`te-IN`, `hi-IN`, `en-IN`) with live editable transcript confirmation before submission. |
| **Speech Synthesis** | Contextual **"Hear again"** buttons on every prompt, result card, and checklist item, tuned to `0.9x` rate for senior comprehension. |
| **Graceful Degradation** | Feature-detects Speech APIs and local Telugu TTS voices; surfaces clear notices and seamlessly falls back to large tap-cards when unsupported or mic permission is denied. |
| **Touch & Readability** | Minimum `56px × 56px` to `72px` touch targets, `≥ 20px` high-contrast body typography (`Noto Sans Telugu` + `Noto Sans`), and WCAG AA contrast ratios (`#994200` Saffron, `#206963` Teal on `#F8F9FA`). |
| **Motion & Keyboard** | Respects `prefers-reduced-motion` media queries, full ARIA landmarks/roles (`radiogroup`, `checkbox`, `progressbar`), and visible `:focus-visible` outlines. |
| **Zero-Voice Demo Mode** | Built-in **"Play demo"** simulates Lakshmamma's complete Telugu journey end-to-end with timed captions—working even without microphone hardware. |

---

## 5. Local Setup & Verification

### Prerequisites
* **Node.js** `v18+` (verified on `v24.11.1`)
* **npm** `v9+`

### Installation & Development
```bash
# 1. Clone the repository
git clone https://github.com/BharathReddyRamasani/sarkar-sakhi.git
cd sarkar-sakhi

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Navigate to `http://localhost:5173`. No `.env` file or API keys are required.

### Testing, Linting & Production Build
```bash
# Run unit & component test suite (Vitest + React Testing Library)
npm test

# Run static linter (oxlint)
npm run lint

# Build production static bundle (TypeScript check + Vite)
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Static Deployment

Because **Sarkar-Sakhi** has zero backend dependencies, it deploys cleanly to any static edge host:

* **Vercel**: Connect this repository with Build Command `npm run build` and Output Directory `dist`, or run `npx vercel --prod`.
* **Netlify**: Connect this repository with Build Command `npm run build` and Publish Directory `dist`, or run `npx netlify deploy --prod --dir=dist`.

---

## 7. Dependencies, Limitations & Launch Plan

* **Dependencies**: Browser Web Speech API (`SpeechRecognition` / `speechSynthesis`) for live voice; falls back cleanly to touch-cards on unsupported browsers (e.g., Firefox desktop or iOS WebViews without speech permissions).
* **Limitations**: Uses placeholder demo thresholds for Telangana Aasara Old-Age and Widow pensions (`src/config/content.ts`). Not an official Government of Telangana portal; users are explicitly instructed to confirm final thresholds and submit biometrics in person at their **Mandal office / MeeSeva / Gram Sachivalayam**.
* **Launch Plan**:
  1. **Pilot Validation**: Field-test with village-level MeeSeva operators and Telugu-speaking senior citizens in Telangana districts to tune regional dialect keywords.
  2. **PWA Offline Caching**: Bundle a Service Worker (`vite-plugin-pwa`) for zero-connectivity rural zones.
  3. **State & Scheme Expansion**: Add Telangana Disability/Toddy Tapper pensions and neighbor-state schemes via `src/config/content.ts` configs.

---

<div align="center">

**Developed by BharathReddy Ramasani**  
*Scaler × Wispr — Build for Bharat Hackathon*

</div>
