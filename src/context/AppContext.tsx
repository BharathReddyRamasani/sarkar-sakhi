import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Language, UserAnswers, SchemeEvaluation, ApplicationFormData } from '../types';
import { SCHEMES } from '../config/content';
import { evaluate } from '../engine/rules';
import { useVoiceSpeech, type UseVoiceSpeechReturn } from '../hooks/useVoiceSpeech';

export type ScreenType =
  | 'home'
  | 'intent'
  | 'question_age'
  | 'question_gender'
  | 'question_maritalStatus'
  | 'question_incomeBand'
  | 'question_receivingPension'
  | 'results'
  | 'application_form'
  | 'checklist'
  | 'next_steps'
  | 'about';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currentScreen: ScreenType;
  setCurrentScreen: (screen: ScreenType) => void;
  answers: UserAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<UserAnswers>>;
  updateAnswer: (field: keyof UserAnswers, value: unknown) => void;
  formData: ApplicationFormData;
  updateFormField: (field: keyof ApplicationFormData, value: string) => void;
  resetForm: () => void;
  checkedDocs: Record<string, boolean>;
  toggleDoc: (docId: string) => void;
  resetChecklist: () => void;
  evaluations: SchemeEvaluation[];
  restart: () => void;
  voice: UseVoiceSpeechReturn;
  autoSpeak: boolean;
  setAutoSpeak: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

const STORAGE_KEYS = {
  ANSWERS: 'sarkar_sakhi_answers_v1',
  FORM: 'sarkar_sakhi_form_v1',
  CHECKLIST: 'sarkar_sakhi_checklist_v1',
  LANG: 'sarkar_sakhi_lang_v1',
  AUTOSPEAK: 'sarkar_sakhi_autospeak_v1',
};

const EMPTY_FORM: ApplicationFormData = {
  selectedSchemeId: '',
  applicantName: '',
  guardianName: '',
  district: '',
  mandal: '',
  village: '',
  rationCardAvailable: '',
  bankAadhaarLinked: '',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LANG);
      if (saved === 'te' || saved === 'en' || saved === 'hi') return saved;
    } catch {}
    return 'te';
  });

  const [currentScreenState, setCurrentScreenState] = useState<ScreenType>('home');

  const [answers, setAnswers] = useState<UserAnswers>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ANSWERS);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  const [formData, setFormData] = useState<ApplicationFormData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FORM);
      if (saved) return { ...EMPTY_FORM, ...JSON.parse(saved) };
    } catch {}
    return EMPTY_FORM;
  });

  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  const [autoSpeak, setAutoSpeakState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.AUTOSPEAK);
      if (saved !== null) return saved === 'true';
    } catch {}
    return true;
  });

  const voice = useVoiceSpeech(language);
  const { setTranscript, stopSpeaking, stopListening } = voice;

  const setCurrentScreen = useCallback((screen: ScreenType) => {
    setTranscript('');
    stopListening();
    setCurrentScreenState(screen);
  }, [setTranscript, stopListening]);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    } catch {}
  }, []);

  const setAutoSpeak = useCallback((val: boolean) => {
    setAutoSpeakState(val);
    if (!val) stopSpeaking();
    try {
      localStorage.setItem(STORAGE_KEYS.AUTOSPEAK, String(val));
    } catch {}
  }, [stopSpeaking]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FORM, JSON.stringify(formData));
    } catch {}
  }, [formData]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(checkedDocs));
    } catch {}
  }, [checkedDocs]);

  const updateAnswer = useCallback((field: keyof UserAnswers, value: unknown) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  }, []);

  const updateFormField = useCallback((field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(EMPTY_FORM);
    try {
      localStorage.removeItem(STORAGE_KEYS.FORM);
    } catch {}
  }, []);

  const toggleDoc = useCallback((docId: string) => {
    setCheckedDocs(prev => ({ ...prev, [docId]: !prev[docId] }));
  }, []);

  const resetChecklist = useCallback(() => {
    setCheckedDocs({});
    try {
      localStorage.removeItem(STORAGE_KEYS.CHECKLIST);
    } catch {}
  }, []);

  const restart = useCallback(() => {
    setAnswers({});
    setFormData(EMPTY_FORM);
    setCheckedDocs({});
    try {
      localStorage.removeItem(STORAGE_KEYS.ANSWERS);
      localStorage.removeItem(STORAGE_KEYS.FORM);
      localStorage.removeItem(STORAGE_KEYS.CHECKLIST);
    } catch {}
    setTranscript('');
    setCurrentScreenState('home');
    stopSpeaking();
    stopListening();
  }, [setTranscript, stopListening, stopSpeaking]);

  const evaluations: SchemeEvaluation[] = Object.values(SCHEMES).map(scheme =>
    evaluate(answers, scheme)
  );

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currentScreen: currentScreenState,
        setCurrentScreen,
        answers,
        setAnswers,
        updateAnswer,
        formData,
        updateFormField,
        resetForm,
        checkedDocs,
        toggleDoc,
        resetChecklist,
        evaluations,
        restart,
        voice,
        autoSpeak,
        setAutoSpeak
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
