import { UserAnswers, SchemeConfig, SchemeEvaluation, CriterionResult } from '../types';

/**
 * Pure evaluation engine for scheme eligibility
 * Returns { qualifies, statusTextKey, matched[], unmet[], needsVerification[], requiredDocumentIds[] }
 * Never declares "eligible" - uses "may_qualify"
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
          userAgeNumeric = 50; // below 57
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

  // 2. Gender Evaluation (e.g. Widow pension targets female)
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

  // 3. Marital Status Evaluation (e.g. Widow pension)
  if (rules.requiredMaritalStatus && rules.requiredMaritalStatus.length > 0) {
    if (!answers.maritalStatus) {
      needsVerification.push({
        id: 'maritalStatus',
        labelKey: 'Marital status verification needed',
        status: 'needsVerification'
      });
    } else if (rules.requiredMaritalStatus.includes(answers.maritalStatus)) {
      matched.push({
        id: 'maritalStatus',
        labelKey: 'Marital status criteria met (Widow)',
        status: 'matched'
      });
      requiredDocumentIds.push('death_certificate');
    } else {
      unmet.push({
        id: 'maritalStatus',
        labelKey: 'Scheme specifically designated for widows',
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
        labelKey: 'Household income exceeds demo threshold (Above ₹1.5 Lakh)',
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

  // Overall qualification calculation:
  // Must have 0 unmet conditions and at least one matched condition
  const qualifies = unmet.length === 0 && matched.length > 0;
  const statusTextKey = qualifies ? 'may_qualify' : 'does_not_qualify';

  // Deduplicate documents
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
