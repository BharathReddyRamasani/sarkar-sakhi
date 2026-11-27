---
name: Sarkar-Sakhi
colors:
  surface: '#f8f9fa'
  surface-dim: '#d8dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f5'
  surface-container: '#eceeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#584237'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#eff1f2'
  outline: '#8b7265'
  outline-variant: '#dfc0b1'
  surface-tint: '#9d4400'
  primary: '#994200'
  on-primary: '#ffffff'
  primary-container: '#c05400'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb690'
  secondary: '#206963'
  on-secondary: '#ffffff'
  secondary-container: '#a7ece5'
  on-secondary-container: '#256d68'
  tertiary: '#005fa0'
  on-tertiary: '#ffffff'
  tertiary-container: '#0078c9'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#331100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#aaefe8'
  secondary-fixed-dim: '#8fd3cc'
  on-secondary-fixed: '#00201e'
  on-secondary-fixed-variant: '#00504b'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#9fcaff'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#00497d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Noto Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Noto Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Noto Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Noto Sans
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 33px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Noto Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 26px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0.02em
  caption:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 1.75rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is built for **Sarkar-Sakhi**, a mobile-first web application empowering elderly rural Indian citizens to discover, verify, and apply for government welfare schemes. The target audience includes older adults who may have limited digital literacy, presbyopia (age-related farsightedness), and a preference for regional languages and voice-assisted navigation.

The interface must evoke **warmth, institutional trust, and effortless clarity**. It avoids intimidating, dense bureaucratic forms in favor of a calm, guided, conversational experience.

The design style blends **Tactile Accessibility** with **Warm Modernism**:
- **Tactile & Physical:** Interactive elements—especially primary buttons, voice-input triggers, and tap-to-answer cards—feature crisp 2px borders and subtle, grounded shadows so they feel unmistakably pressable.
- **Low-Glare & High-Contrast:** Warm, paper-like off-white surfaces reduce eye strain under bright outdoor sunlight, paired with deep charcoal ink and high-saturation semantic accents.
- **Zero Clutter:** Every screen presents a single clear task with generous breathing room, pairing large rounded icons with plain,concise text.

## Colors

The palette is anchored in high-contrast, sunlight-readable tones that balance civic authority with approachable warmth:

- **Primary — Warm Saffron (`#E66A12`, hover/active `#FF7A1A`):** Reserved for primary calls-to-action, the voice/microphone trigger, and active selection states. Always pair with pure white (`#FFFFFF`) text and icons.
- **Secondary — Deep Teal (`#0F5E59`, dark `#0B4F4A`):** Used for top navigation headers, trust badges, institutional anchors, and secondary high-contrast surfaces.
- **Backgrounds — Warm Cream (`#FFFDF8`) & Soft Parchment (`#FAF6EE`):** Used for the main canvas and elevated card surfaces to eliminate harsh white glare.
- **Text — Deep Charcoal (`#1A1D1E`):** Used for all primary body copy and headings on light surfaces to guarantee WCAG AAA contrast.

### Semantic & Status Colors
- **Verified Green (`#1B7F3A`):** Indicates confirmed eligibility, completed steps, and verified documents.
- **Needs-Verification Amber (`#B45309`):** Signals pending checks, missing documents, or cautionary notices.
- **Unmet / Alert Red (`#B91C1C`):** Communicates ineligibility, validation errors, or urgent action required.
- **WhatsApp Green (`#16A34A`):** Dedicated exclusively to WhatsApp assistance, scheme sharing, and family/sahayak support triggers.

## Typography

**Noto Sans** is used across all typographic roles to ensure seamless, consistent rendering across Latin, Devanagari, Telugu, and other Indian regional scripts.

- **Minimum Readability Floor:** Standard body copy never drops below `20px` (`body-md`), with a generous `1.5` line-height (`30px`) and slight positive letter-spacing (`0.01em`) to prevent character crowding for elderly readers.
- **Bold Action Labels:** Button and interactive card labels use `18px`–`20px` bold (`700`) weights so actions are scannable at a glance.
- **Concise Copy:** Headings (`24px`–`28px`) should be limited to 3–6 words. Avoid all-caps text, as it reduces word-shape recognition.

## Layout & Spacing

The layout uses a **mobile-first fluid grid** designed to eliminate horizontal scrolling and visual crowding:

- **Mobile (`< 640px`):** 4-column fluid grid with `20px` (`1.25rem`) outer margins and `16px` (`1rem`) gutters. Primary content stacks vertically in a single column so users only focus on one decision at a time.
- **Tablet (`640px – 1024px`):** 8-column fluid grid with `24px` outer margins. Two-column arrangements are permitted for large tap-answer cards.
- **Desktop (`> 1024px`):** 12-column grid constrained to a centered `720px`–`840px` reading container to preserve the focused, single-task flow.

Generous vertical spacing (`space-lg` and `space-xl`) separates distinct sections, ensuring accidental taps are minimized.

## Elevation & Depth

Visual hierarchy relies on a combination of **high-contrast 2px borders** and **crisp tactile shadows** rather than subtle, low-contrast blurs:

- **Interactive Cards & Tap Options:** Use a `2px solid` border (`#0F5E59` or `#1A1D1E` at 20%–100% depending on state) paired with a grounded, non-blurry offset shadow (`0 4px 0 rgba(26, 29, 30, 0.12)`) that depresses (`translateY(2px)`) on active tap.
- **Floating Voice / Microphone CTA:** Elevated with a warm, diffused saffron-tinted shadow (`0 8px 20px rgba(230, 106, 18, 0.35)`) to draw immediate attention.
- **Tonal Surface Separation:** Use Warm Cream (`#FFFDF8`) for the base canvas and Soft Parchment (`#FAF6EE`) for grouped informational containers.

## Shapes

This design system uses a **Rounded (`2`)** shape language (`0.5rem` base, `1rem` for `rounded-lg`, `1.5rem` for `rounded-xl` / `rounded-2xl`) to create a friendly, approachable, and non-threatening interface.

- **Primary & Voice Buttons:** Use full pill shapes (`9999px`) or `rounded-2xl` (`24px`) to clearly distinguish actionable triggers from static content.
- **Cards & Input Fields:** Use `rounded-xl` (`24px`) corners to soften large rectangular blocks.
- **Status Badges & Chips:** Use full pill shapes (`9999px`) for immediate recognition.

## Components

Every interactive component is engineered for large touch targets, clear iconography, and unmistakable state feedback. Pair every label with a **28px–32px rounded Material Symbol** icon.

### Buttons
- **Dimensions:** Minimum height of `56px`–`64px`, full-width on mobile where possible, with `20px` horizontal padding.
- **Primary Button:** Warm Saffron (`#E66A12`) fill, pure white (`#FFFFFF`) bold `20px` text, `2px solid #0B4F4A` or `#1A1D1E` bottom-heavy tactile shadow.
- **Secondary / Outline Button:** Warm Cream (`#FFFDF8`) fill, `2px solid #0F5E59` border, Deep Teal (`#0F5E59`) bold `18px`–`20px` text.
- **Voice / Microphone CTA:** Extra-large (`64px`–`72px`) pill or circular button in Warm Saffron with a `32px` microphone icon and clear "Speak Now" label.

### Tap-Answer Cards (Radio & Checkbox Replacements)
- Replace small standard radio buttons and checkboxes with full-width, `rounded-2xl` tap cards (minimum `64px` height).
- **Default State:** `#FFFDF8` background, `2px solid #1A1D1E` (30% opacity) border, `28px` icon on the left, `20px` bold label.
- **Selected State:** Soft Saffron tint (`#FFF3E8`) background, `2px solid #E66A12` border, and a `28px` filled checkmark icon.

### Scheme Cards
- `#FAF6EE` or `#FFFDF8` surface with a `2px solid #0F5E59` border and `rounded-2xl` corners.
- Top row displays a semantic status pill (e.g., Verified Green `#1B7F3A` "Eligible").
- Maximum 3 data points per card: Scheme Title (`24px` bold), 1-line benefit summary (`20px`), and a single full-width action button.

### Chips & Status Badges
- Pill-shaped (`9999px`), minimum `36px` height, `16px`–`18px` bold text, paired with a `20px` status icon.

### Input Fields
- Minimum `56px` height, `rounded-xl` (`16px`–`24px`), `2px solid #1A1D1E` border, `#FFFFFF` background, and `20px` input text. Always include a microphone icon button inside the right edge of text inputs for voice dictation.

### WhatsApp Help Bar
- A dedicated, persistent footer or card action using WhatsApp Green (`#16A34A`) with pure white text and a `28px` chat/WhatsApp icon, allowing users to send scheme details to a family member or local *Sahayak* with one tap.