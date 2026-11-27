import { describe, it, expect } from 'vitest';
import { matchIntent } from './intent';
import { mapSpeechToOption } from './speechMatcher';

describe('Intent Matching & Speech Recognition Mapping', () => {
  it('matches Telugu pension intent correctly', () => {
    const res1 = matchIntent('నాకు పింఛను కావాలమ్మా', 'te');
    expect(res1.matched).toBe(true);
    expect(res1.intent).toBe('general');

    const res2 = matchIntent('వితంతు పింఛన్ గురించి చెప్పండి', 'te');
    expect(res2.matched).toBe(true);
    expect(res2.intent).toBe('widow');

    const res3 = matchIntent('ముసలి వాళ్ళకి ఇచ్చే పథకం', 'te');
    expect(res3.matched).toBe(true);
    expect(res3.intent).toBe('old_age');
  });

  it('matches English intent correctly', () => {
    const res = matchIntent('I want information on widow pension', 'en');
    expect(res.matched).toBe(true);
    expect(res.intent).toBe('widow');
  });

  it('handles cross-language terms like "pension" spoken in Telugu mode', () => {
    const res = matchIntent('Aasara pension details', 'te');
    expect(res.matched).toBe(true);
  });

  it('maps numbers to age range', () => {
    const options = [
      { value: 'under_57' },
      { value: '57_64' },
      { value: '65_79' },
      { value: '80_plus' }
    ];
    expect(mapSpeechToOption('నాకు 68 ఏళ్లు', options, 'te')).toBe('65_79');
    expect(mapSpeechToOption('50 years old', options, 'en')).toBe('under_57');
    expect(mapSpeechToOption('82', options, 'en')).toBe('80_plus');
  });

  it('maps spoken Telugu widow synonyms', () => {
    const options = [
      { value: 'widow' },
      { value: 'married' },
      { value: 'unmarried' }
    ];
    expect(mapSpeechToOption('భర్త చనిపోయారు', options, 'te')).toBe('widow');
    expect(mapSpeechToOption('వితంతువు', options, 'te')).toBe('widow');
  });
});
