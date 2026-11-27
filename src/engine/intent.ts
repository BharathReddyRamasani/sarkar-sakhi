import type { Language } from '../types';
import { INTENT_KEYWORDS } from '../config/content';

export interface IntentMatchResult {
  matched: boolean;
  intent?: 'old_age' | 'widow' | 'single_woman' | 'general';
  confidence: 'high' | 'medium' | 'low';
  rawText: string;
}

/**
 * Keyword-based intent matching for voice utterances or text input.
 * Executes locally in real time without external API calls.
 */
export function matchIntent(text: string, lang: Language): IntentMatchResult {
  const normalized = text.toLowerCase().trim();
  if (!normalized) {
    return { matched: false, confidence: 'low', rawText: text };
  }

  const langsToCheck: Language[] = [lang, 'en', 'te', 'hi'].filter(
    (v, idx, arr) => arr.indexOf(v) === idx
  ) as Language[];

  for (const l of langsToCheck) {
    const keywords = INTENT_KEYWORDS[l];
    if (!keywords) continue;

    for (const kw of keywords.widow) {
      if (normalized.includes(kw.toLowerCase())) {
        return { matched: true, intent: 'widow', confidence: 'high', rawText: text };
      }
    }

    for (const kw of keywords.singleWoman) {
      if (normalized.includes(kw.toLowerCase())) {
        return { matched: true, intent: 'single_woman', confidence: 'high', rawText: text };
      }
    }

    for (const kw of keywords.oldAge) {
      if (normalized.includes(kw.toLowerCase())) {
        return { matched: true, intent: 'old_age', confidence: 'high', rawText: text };
      }
    }
  }

  for (const l of langsToCheck) {
    const keywords = INTENT_KEYWORDS[l];
    if (!keywords) continue;

    for (const kw of keywords.general) {
      if (normalized.includes(kw.toLowerCase())) {
        return { matched: true, intent: 'general', confidence: 'medium', rawText: text };
      }
    }
  }

  return { matched: false, confidence: 'low', rawText: text };
}
