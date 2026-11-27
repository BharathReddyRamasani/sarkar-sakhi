import { describe, it, expect } from 'vitest';
import { evaluate } from './rules';
import { SCHEMES } from '../config/content';
import type { UserAnswers } from '../types';

describe('Rules Engine - evaluate()', () => {
  const oldAgeScheme = SCHEMES.telangana_old_age;
  const widowScheme = SCHEMES.telangana_widow;
  const singleWomanScheme = SCHEMES.telangana_single_woman;

  it('correctly evaluates 68-year-old widow with low income and no prior pension', () => {
    const answers: UserAnswers = {
      age: 68,
      ageRange: '65_79',
      gender: 'female',
      maritalStatus: 'widow',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'no'
    };

    const oldAgeResult = evaluate(answers, oldAgeScheme);
    expect(oldAgeResult.qualifies).toBe(true);
    expect(oldAgeResult.statusTextKey).toBe('may_qualify');
    expect(oldAgeResult.unmet).toHaveLength(0);
    expect(oldAgeResult.matched.length).toBeGreaterThan(0);
    expect(oldAgeResult.requiredDocumentIds).toContain('age_proof');
    expect(oldAgeResult.requiredDocumentIds).toContain('aadhaar');

    const widowResult = evaluate(answers, widowScheme);
    expect(widowResult.qualifies).toBe(true);
    expect(widowResult.statusTextKey).toBe('may_qualify');
    expect(widowResult.unmet).toHaveLength(0);
    expect(widowResult.requiredDocumentIds).toContain('death_certificate');
    expect(widowResult.requiredDocumentIds).toContain('ration_card');
  });

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

  it('separated/unmarried low-income woman qualifies for Single Woman Pension', () => {
    const singleWoman: UserAnswers = {
      age: 40,
      ageRange: 'under_57',
      gender: 'female',
      maritalStatus: 'separated',
      incomeBand: 'below_1_5_lakh',
      receivingPension: 'no'
    };

    const singleRes = evaluate(singleWoman, singleWomanScheme);
    expect(singleRes.qualifies).toBe(true);
    expect(singleRes.requiredDocumentIds).toContain('single_status_cert');
    expect(evaluate(singleWoman, widowScheme).qualifies).toBe(false);
  });

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
