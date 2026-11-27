import { Language } from '../types';
import { VOICE_OPTION_MAP } from '../config/content';

/**
 * Maps spoken speech or transcripts to option values or numbers
 */
export function mapSpeechToOption(
  transcript: string,
  options: { value: string; voiceKeywords?: Record<Language, string[]> }[],
  lang: Language
): string | null {
  const lower = transcript.toLowerCase().trim();

  // 1. Direct match with option-specific keywords
  for (const opt of options) {
    if (opt.voiceKeywords && opt.voiceKeywords[lang]) {
      for (const kw of opt.voiceKeywords[lang]) {
        if (lower.includes(kw.toLowerCase())) {
          return opt.value;
        }
      }
    }
  }

  // 2. Check global VOICE_OPTION_MAP
  for (const opt of options) {
    const synonyms = VOICE_OPTION_MAP[opt.value];
    if (synonyms) {
      for (const syn of synonyms) {
        if (lower.includes(syn.toLowerCase())) {
          return opt.value;
        }
      }
    }
  }

  // 3. Number extraction for age
  const numberMatch = lower.match(/\b\d{1,3}\b/);
  if (numberMatch) {
    const num = parseInt(numberMatch[0], 10);
    // If the options have age ranges
    for (const opt of options) {
      if (opt.value === 'under_57' && num < 57) return opt.value;
      if (opt.value === '57_64' && num >= 57 && num <= 64) return opt.value;
      if (opt.value === '65_79' && num >= 65 && num <= 79) return opt.value;
      if (opt.value === '80_plus' && num >= 80) return opt.value;
    }
  }

  return null;
}
