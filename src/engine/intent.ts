import { Language } from '../types';
import { INTENT_KEYWORDS } from '../config/content';

export interface IntentMatchResult {
  matched: boolean;
  intent?: 'old_age' | 'widow' | 'general';
  confidence: 'high' | 'medium' | 'low';
  rawText: string;
}

/**
 * Keyword-based intent matching for voice utterances or text input
 * Zero external AI, completely offline and privacy safe.
 */
export function matchIntent(text: string, lang: Language): IntentMatchResult {
  const normalized = text.toLowerCase().trim();
  if (!normalized) {
    return { matched: false, confidence: 'low', rawText: text };
  }

  const keywords = INTENT_KEYWORDS[lang] || INTENT_KEYWORDS.te;

  // Check Widow keywords first
  for (const kw of keywords.widow) {
    if (normalized.includes(kw.toLowerCase())) {
      return { matched: true, intent: 'widow', confidence: 'high', rawText: text };
    }
  }

  // Check Old-Age keywords
  for (const kw of keywords.oldAge) {
    if (normalized.includes(kw.toLowerCase())) {
      return { matched: true, intent: 'old_age', confidence: 'high', rawText: text };
    }
  }

  // Check general pension keywords
  for (const kw of keywords.general) {
    if (normalized.includes(kw.toLowerCase())) {
      return { matched: true, intent: 'general', confidence: 'medium', rawText: text };
    }
  }

  // Cross-language fallback check (e.g. if user spoke English word "pension" while in Telugu mode)
  for (const kw of INTENT_KEYWORDS.en.widow) {
    if (normalized.includes(kw)) {
      return { matched: true, intent: 'widow', confidence: 'high', rawText: text };
    }
  }
  for (const kw of INTENT_KEYWORDS.en.oldAge) {
    if (normalized.includes(kw)) {
      return { matched: true, intent: 'old_age', confidence: 'high', rawText: text };
    }
  }
  for (const kw of INTENT_KEYWORDS.en.general) {
    if (normalized.includes(kw)) {
      return { matched: true, intent: 'general', confidence: 'medium', rawText: text };
    }
  }

  return { matched: false, confidence: 'low', rawText: text };
}
