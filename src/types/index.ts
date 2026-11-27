export type Language = 'te' | 'en' | 'hi';

export type Gender = 'female' | 'male' | 'other';
export type MaritalStatus = 'widow' | 'married' | 'unmarried' | 'divorced' | 'separated';
export type IncomeBand = 'below_1_5_lakh' | 'above_1_5_lakh' | 'unknown';
export type ExistingPension = 'yes' | 'no';

export interface UserAnswers {
  intent?: string; // matched or selected intent
  age?: number;
  ageRange?: 'under_57' | '57_64' | '65_79' | '80_plus';
  gender?: Gender;
  maritalStatus?: MaritalStatus;
  incomeBand?: IncomeBand;
  receivingPension?: ExistingPension;
}

export type EvaluationStatus = 'matched' | 'unmet' | 'needsVerification';

export interface CriterionResult {
  id: string;
  labelKey: string;
  status: EvaluationStatus;
  noteKey?: string;
}

export interface SchemeEvaluation {
  schemeId: string;
  qualifies: boolean;
  statusTextKey: string; // e.g. "may_qualify", "does_not_qualify"
  matched: CriterionResult[];
  unmet: CriterionResult[];
  needsVerification: CriterionResult[];
  requiredDocumentIds: string[];
}

export interface DocumentItem {
  id: string;
  requiredFor: string[]; // schemeIds or condition strings e.g. 'widow'
  names: Record<Language, string>;
  descriptions: Record<Language, string>;
  icon: string;
}

export interface QuestionOption {
  value: string;
  label: Record<Language, string>;
  icon?: string;
  voiceKeywords: Record<Language, string[]>;
}

export interface QuestionConfig {
  id: string;
  title: Record<Language, string>;
  speechPrompt: Record<Language, string>;
  options: QuestionOption[];
}

export interface SchemeConfig {
  id: string;
  name: Record<Language, string>;
  alias: Record<Language, string>;
  description: Record<Language, string>;
  amountText: Record<Language, string>; // "Check with official office"
  disclaimer: Record<Language, string>;
  icon: string;
  // VERIFY with official Telangana Aasara sources
  rules: {
    minAge?: number;
    targetGender?: Gender[];
    requiredMaritalStatus?: MaritalStatus[];
    incomeLimitBand?: IncomeBand[];
    disqualifyIfExistingPension?: boolean;
  };
}

export interface OfficeInfo {
  title: Record<Language, string>;
  description: Record<Language, string>;
  places: Record<Language, string[]>;
  hours: Record<Language, string>;
}

export interface DemoStep {
  screen: string;
  stepIndex: number;
  answerField: keyof UserAnswers;
  answerValue: any;
  speechText: Record<Language, string>;
  caption: Record<Language, string>;
  delayMs: number;
}
