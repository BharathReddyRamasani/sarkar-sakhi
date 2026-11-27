import { describe, it, expect } from 'vitest';
import { evaluate } from './rules';
import { SCHEMES } from '../config/content';
import { UserAnswers } from '../types';

describe('Rules Engine - evaluate()', () => {
  const oldAgeScheme = SCHEMES.telangana_old_age;
  const widowScheme = SCHEMES.telangana_widow;

  // 1. Lakshmamma Persona (68-year-old widow, female, low income, no existing pension)
  it('correctly evaluates Lakshmamma (68 yrs, widow, BPL, no prior pension)', () => {
    const lakshmammaAnswers: UserAnswers = {
      age: 68,
      ageRange: '65_79',
      gender: 'female',
      maritalStatus: 'widow',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'no'
    };

    // Should qualify for Old-Age Pension
    const oldAgeResult = evaluate(lakshmammaAnswers, oldAgeScheme);
    expect(oldAgeResult.qualifies).toBe(true);
    expect(oldAgeResult.statusTextKey).toBe('may_qualify');
    expect(oldAgeResult.unmet).toHaveLength(0);
    expect(oldAgeResult.matched.length).toBeGreaterThan(0);
    expect(oldAgeResult.requiredDocumentIds).toContain('age_proof');
    expect(oldAgeResult.requiredDocumentIds).toContain('aadhaar');

    // Should also qualify for Widow Pension
    const widowResult = evaluate(lakshmammaAnswers, widowScheme);
    expect(widowResult.qualifies).toBe(true);
    expect(widowResult.statusTextKey).toBe('may_qualify');
    expect(widowResult.unmet).toHaveLength(0);
    expect(widowResult.requiredDocumentIds).toContain('death_certificate');
    expect(widowResult.requiredDocumentIds).toContain('ration_card');
  });

  // 2. Edge Case: Young widow (Age 32, female, widow, BPL, no existing pension)
  it('young widow qualifies for Widow Pension but NOT Old-Age Pension', () => {
    const youngWidow: UserAnswers = {
      age: 32,
      ageRange: 'under_57',
      gender: 'female',
      maritalStatus: 'widow',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'no'
    };

    const oldAgeResult = evaluate(youngWidow, oldAgeScheme);
    expect(oldAgeResult.qualifies).toBe(false);
    expect(oldAgeResult.unmet.some((u) => u.id === 'age')).toBe(true);

    const widowResult = evaluate(youngWidow, widowScheme);
    expect(widowResult.qualifies).toBe(true);
    expect(widowResult.statusTextKey).toBe('may_qualify');
    expect(widowResult.requiredDocumentIds).toContain('death_certificate');
  });

  // 3. Edge Case: Already receiving a pension
  it('disqualifies candidate who already receives another pension', () => {
    const existingPensioner: UserAnswers = {
      age: 72,
      ageRange: '65_79',
      gender: 'male',
      maritalStatus: 'married',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'yes'
    };

    const oldAgeResult = evaluate(existingPensioner, oldAgeScheme);
    expect(oldAgeResult.qualifies).toBe(false);
    expect(oldAgeResult.unmet.some((u) => u.id === 'receivingPension')).toBe(true);
  });

  // 4. Edge Case: High income
  it('disqualifies candidate whose household income is above limit', () => {
    const highIncomeApplicant: UserAnswers = {
      age: 62,
      ageRange: '57_64',
      gender: 'male',
      maritalStatus: 'married',
      incomeBand: 'above_1_5_lakh',
      receivingPension: 'no'
    };

    const oldAgeResult = evaluate(highIncomeApplicant, oldAgeScheme);
    expect(oldAgeResult.qualifies).toBe(false);
    expect(oldAgeResult.unmet.some((u) => u.id === 'incomeBand')).toBe(true);
  });

  // 5. Edge Case: Unknown income (marks as needsVerification instead of hard reject)
  it('marks unknown income as needsVerification', () => {
    const unsureApplicant: UserAnswers = {
      age: 60,
      ageRange: '57_64',
      gender: 'male',
      maritalStatus: 'married',
      incomeBand: 'unknown',
      receivingPension: 'no'
    };

    const oldAgeResult = evaluate(unsureApplicant, oldAgeScheme);
    expect(oldAgeResult.unmet).toHaveLength(0);
    expect(oldAgeResult.needsVerification.some((v) => v.id === 'incomeBand')).toBe(true);
  });

  // 6. Male applicant for widow pension
  it('disqualifies male applicant for widow pension', () => {
    const maleApplicant: UserAnswers = {
      age: 65,
      gender: 'male',
      maritalStatus: 'widow',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'no'
    };

    const widowResult = evaluate(maleApplicant, widowScheme);
    expect(widowResult.qualifies).toBe(false);
    expect(widowResult.unmet.some((u) => u.id === 'gender')).toBe(true);
  });
});
