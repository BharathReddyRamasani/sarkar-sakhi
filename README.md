<div align="center">

# Sarkar-Sakhi (సర్కార్-సఖి)

**Live Voice-First Government Scheme Eligibility, Form-Filling & Readiness Companion for Rural India**

[![Build Status](https://img.shields.io/badge/build-passing-15803d?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Tests](https://img.shields.io/badge/vitest-13%20passing-0f766e?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Accessibility](https://img.shields.io/badge/WCAG%20AA-Compliant-994200?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)
[![Zero Secrets](https://img.shields.io/badge/Backend%20%2F%20API%20Keys-None%20Required-1d4ed8?style=for-the-badge)](https://github.com/BharathReddyRamasani/sarkar-sakhi)

**Built for the Scaler × Wispr — *Build for Bharat* Hackathon (Round 2)**  
**Theme:** Public Infrastructure & Civic Services

</div>

---

## 1. Executive Summary & Real-World Problem

Across rural India, millions of eligible senior citizens, widows, and single women miss out on state social welfare pensions because discovering **eligibility rules**, **filling out application forms**, and **assembling supporting documents** require literacy and keyboard typing.

**Sarkar-Sakhi** runs **live in real time** inside any modern mobile or desktop browser—turning the entire journey from spoken intent to a **voice-filled application draft, personalized document checklist, and WhatsApp handoff** into a single accessible flow.

### Why Sarkar-Sakhi Goes Beyond Static Information
1. **Real-Time Multilingual Voice Interaction**: Citizens speak naturally in **Telugu (`te-IN`)**, **Hindi (`hi-IN`)**, or **English (`en-IN`)**; transcripts stream live, auto-match intent/answers on speech completion, and include an optional **Auto-Read Voice Guide**.
2. **Modular Rules Engine (Easily Swappable)**: Evaluates sample Telangana welfare pension rules (*Old-Age Pension*, *Widow Pension*, and *Single Woman Pension*) with transparent `matched`, `unmet`, and `needsVerification` criteria. All rules, thresholds, and schemes live cleanly in [`src/config/content.ts`](src/config/content.ts) for instant customization.
3. **Voice-Dictated Sample Application Form**: Citizens can fill out a pre-populated pension application form **by speaking into field-level mic buttons** (Applicant Name, Spouse/Father Name, District, Mandal, Village), then **Print / Save as PDF** or **Download `.txt` Draft**.
4. **Personalized Document Checklist & WhatsApp Handoff**: Tailors required documents dynamically (e.g., *Husband's Death Certificate* for widows, *Single Status Certificate* for single women), persists progress in `localStorage`, and generates a one-tap **WhatsApp readiness summary**.

---

## 2. Live End-to-End Flow

```text
┌──────────────┐     ┌──────────────────┐     ┌───────────────────────────────┐
│  Home Screen │ ──▶ │ Live Speech/Tap  │ ──▶ │   5-Step Guided Questionnaire │
│ (Tap & Speak │     │ Intent Recognition│     │ Age → Gender → Marital Status │
│ or Start)    │     │ + Voice Guide TTS │     │ → Income Band → Prior Pension │
└──────────────┘     └──────────────────┘     └───────────────┬───────────────┘
                                                              │
┌────────────────────┐     ┌──────────────────┐               ▼
│ Next Steps & Share │ ◀── │  Personalized    │ ◀── ┌─────────────────────────┐
│ • 3 Action Steps   │     │  Doc Checklist   │     │   Eligibility Results   │
│ • MeeSeva / MPDO   │     │ • Checkboxes     │     │ • Sample Benefit & Rules│
│ • WhatsApp & Copy  │     │ • Audio "Hear"   │     │ • Voice-Fillable Form   │
└────────────────────┘     └──────────────────┘     └─────────────────────────┘
                                    ▲                         │
                                    └───── ┌──────────────────▼──────┐
                                           │ Sample Application Form │
                                           │ • Per-field Voice Input │
                                           │ • Print PDF / Download  │
                                           └─────────────────────────┘
```

---

## 3. Architecture & Customizability

Sarkar-Sakhi is a **zero-backend, privacy-first static React + TypeScript application**. Zero secret keys or external APIs are required.

### Swapping Real Rules & Forms Later
All configurable business data is isolated in [`src/config/content.ts`](src/config/content.ts):
* **`SCHEMES`**: Add new schemes or adjust `rules` (`minAge`, `targetGender`, `requiredMaritalStatus`, `incomeLimitBand`, `disqualifyIfExistingPension`) and benefit text.
* **`DOCUMENTS`**: Add or remap required document items per scheme ID.
* **`QUESTIONS` & `VOICE_OPTION_MAP`**: Customize questions, regional Telugu/Hindi/English synonyms, and numeric voice mappings.
* **`OFFICE_INFO`**: Update local submission centers (MeeSeva, Gram Sachivalayam, MPDO).

### Module Structure

```text
sarkar-sakhi/
├── index.html                          # Semantic HTML5 shell + Noto Sans Telugu typography
├── tailwind.config.js                  # Design tokens aligned with Stitch UI specifications
├── src/
│   ├── config/
│   │   └── content.ts                  # All i18n copy (te, en, hi), sample schemes, rules, docs & questions
│   ├── engine/
│   │   ├── rules.ts                    # Pure evaluate(answers, scheme) eligibility engine
│   │   ├── intent.ts                   # Offline keyword intent matcher (te, en, hi)
│   │   ├── speechMatcher.ts            # Maps spoken numbers & synonyms to option values
│   │   ├── rules.test.ts               # Unit tests covering all sample schemes & edge cases
│   │   └── intent.test.ts              # Unit tests for multilingual voice intent & age mapping
│   ├── hooks/
│   │   └── useVoiceSpeech.ts           # Real-time Web Speech API (SpeechRecognition + SpeechSynthesis)
│   ├── context/
│   │   └── AppContext.tsx              # App state, auto-speak toggle & localStorage persistence
│   ├── components/
│   │   ├── Header.tsx                  # Back nav, Voice Guide ON/OFF toggle & language switcher
│   │   ├── Footer.tsx                  # Privacy note & About link
│   │   ├── VoiceInput.tsx              # Pulsing mic CTA, live transcript & auto-submission
│   │   └── HearAgainButton.tsx         # Contextual TTS playback button
│   └── screens/
│       ├── HomeScreen.tsx              # Voice-first landing + live Start Check CTA
│       ├── IntentScreen.tsx            # Large-target scheme intent selector
│       ├── QuestionWizardScreen.tsx    # One-question-per-screen wizard + exact age entry
│       ├── ResultsScreen.tsx           # Real-time scheme match cards & "Fill Form" CTA
│       ├── ApplicationFormScreen.tsx   # Voice-fillable sample form + Print PDF / Download .txt
│       ├── ChecklistScreen.tsx         # Interactive document checklist with readiness % bar
│       ├── NextStepsScreen.tsx         # MeeSeva/Mandal instructions + WhatsApp & Copy share
│       └── AboutScreen.tsx             # Scope, privacy policy & configuration notes
└── stitch_sarkar_sakhi/                # Reference UI prototypes & DESIGN.md
```

---

## 4. Local Setup & Verification

### Prerequisites
* **Node.js** `v18+`
* **npm** `v9+`

### Run Locally
```bash
git clone https://github.com/BharathReddyRamasani/sarkar-sakhi.git
cd sarkar-sakhi
npm install
npm run dev
```
Open `http://localhost:5173` in Chrome/Edge (recommended for live Web Speech API voice recognition). No `.env` or API keys needed.

### Test, Lint & Build
```bash
npm test       # Vitest + React Testing Library suite
npm run lint   # Static linting via oxlint
npm run build  # TypeScript typecheck + Vite production bundle in dist/
```

---

## 5. Static Deployment

Deploy `dist/` to **Vercel** or **Netlify** with Build Command `npm run build` and Output Directory `dist` (zero environment variables required).

---

<div align="center">

**Developed by BharathReddy Ramasani**  
*Scaler × Wispr — Build for Bharat Hackathon*

</div>
