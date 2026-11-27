import type { UserAnswers, SchemeConfig, SchemeEvaluation, CriterionResult } from '../types';

/**
 * Pure evaluation engine for scheme eligibility.
 * Returns { qualifies, statusTextKey, matched[], unmet[], needsVerification[], requiredDocumentIds[] }.
 */
export function evaluate(answers: UserAnswers, scheme: SchemeConfig): SchemeEvaluation {
  const matched: CriterionResult[] = [];
  const unmet: CriterionResult[] = [];
  const needsVerification: CriterionResult[] = [];
  const requiredDocumentIds: string[] = ['aadhaar', 'ration_card', 'bank_passbook', 'passport_photo'];

  const rules = scheme.rules;

  // 1. Age Evaluation
  if (rules.minAge !== undefined) {
    let userAgeNumeric: number | undefined = answers.age;
    if (userAgeNumeric === undefined && answers.ageRange) {
      switch (answers.ageRange) {
        case 'under_57':
          userAgeNumeric = 50;
          break;
        case '57_64':
          userAgeNumeric = 60;
          break;
        case '65_79':
          userAgeNumeric = 70;
          break;
        case '80_plus':
          userAgeNumeric = 85;
          break;
      }
    }

    if (userAgeNumeric === undefined) {
      needsVerification.push({
        id: 'age',
        labelKey: `Age verification required (Min: ${rules.minAge})`,
        status: 'needsVerification'
      });
    } else if (userAgeNumeric >= rules.minAge) {
      matched.push({
        id: 'age',
        labelKey: `Age ${rules.minAge}+ criteria met (Your age: ${answers.age || (answers.ageRange === 'under_57' ? '<57' : '57+')})`,
        status: 'matched'
      });
      if (scheme.id === 'telangana_old_age') {
        requiredDocumentIds.push('age_proof');
      }
    } else {
      unmet.push({
        id: 'age',
        labelKey: `Requires minimum age of ${rules.minAge} years`,
        status: 'unmet'
      });
    }
  }

  // 2. Gender Evaluation
  if (rules.targetGender && rules.targetGender.length > 0) {
    if (!answers.gender) {
      needsVerification.push({
        id: 'gender',
        labelKey: 'Gender verification needed',
        status: 'needsVerification'
      });
    } else if (rules.targetGender.includes(answers.gender)) {
      matched.push({
        id: 'gender',
        labelKey: 'Target gender criteria met',
        status: 'matched'
      });
    } else {
      unmet.push({
        id: 'gender',
        labelKey: 'Scheme specifically designated for women',
        status: 'unmet'
      });
    }
  }

  // 3. Marital Status Evaluation
  if (rules.requiredMaritalStatus && rules.requiredMaritalStatus.length > 0) {
    if (!answers.maritalStatus) {
      needsVerification.push({
        id: 'maritalStatus',
        labelKey: 'Marital status verification needed',
        status: 'needsVerification'
      });
    } else if (rules.requiredMaritalStatus.includes(answers.maritalStatus)) {
      const statusLabel = answers.maritalStatus === 'widow' ? 'Widow' : 'Single / Unmarried / Separated';
      matched.push({
        id: 'maritalStatus',
        labelKey: `Marital status criteria met (${statusLabel})`,
        status: 'matched'
      });
      if (answers.maritalStatus === 'widow') {
        requiredDocumentIds.push('death_certificate');
      } else if (scheme.id === 'telangana_single_woman') {
        requiredDocumentIds.push('single_status_cert');
      }
    } else {
      unmet.push({
        id: 'maritalStatus',
        labelKey:
          scheme.id === 'telangana_widow'
            ? 'Scheme specifically designated for widows'
            : 'Scheme designated for unmarried, divorced, or separated women',
        status: 'unmet'
      });
    }
  }

  // 4. Income Band / BPL Evaluation
  if (rules.incomeLimitBand && rules.incomeLimitBand.length > 0) {
    if (!answers.incomeBand || answers.incomeBand === 'unknown') {
      needsVerification.push({
        id: 'incomeBand',
        labelKey: 'Income status / White Ration Card verification needed at Mandal office',
        status: 'needsVerification'
      });
    } else if (rules.incomeLimitBand.includes(answers.incomeBand)) {
      matched.push({
        id: 'incomeBand',
        labelKey: 'Income within eligibility band (Below ₹1.5 Lakh / White Ration Card)',
        status: 'matched'
      });
    } else {
      unmet.push({
        id: 'incomeBand',
        labelKey: 'Household income exceeds sample threshold (Above ₹1.5 Lakh)',
        status: 'unmet'
      });
    }
  }

  // 5. Existing Pension Evaluation
  if (rules.disqualifyIfExistingPension) {
    if (!answers.receivingPension) {
      needsVerification.push({
        id: 'receivingPension',
        labelKey: 'Verification of existing pension status required',
        status: 'needsVerification'
      });
    } else if (answers.receivingPension === 'no') {
      matched.push({
        id: 'receivingPension',
        labelKey: 'Not receiving other government pension (First-time applicant)',
        status: 'matched'
      });
    } else {
      unmet.push({
        id: 'receivingPension',
        labelKey: 'Already receiving another government pension (Single pension rule)',
        status: 'unmet'
      });
    }
  }

  const qualifies = unmet.length === 0 && matched.length > 0;
  const statusTextKey = qualifies ? 'may_qualify' : 'does_not_qualify';
  const uniqueDocIds = Array.from(new Set(requiredDocumentIds));

  return {
    schemeId: scheme.id,
    qualifies,
    statusTextKey,
    matched,
    unmet,
    needsVerification,
    requiredDocumentIds: uniqueDocIds
  };
}
