import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Language, UserAnswers, SchemeEvaluation } from '../types';
import { SCHEMES, LAKSHMAMMA_DEMO_STEPS } from '../config/content';
import { evaluate } from '../engine/rules';
import { useVoiceSpeech, UseVoiceSpeechReturn } from '../hooks/useVoiceSpeech';

export type ScreenType =
  | 'home'
  | 'intent'
  | 'question_age'
  | 'question_gender'
  | 'question_maritalStatus'
  | 'question_incomeBand'
  | 'question_receivingPension'
  | 'results'
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
  checkedDocs: Record<string, boolean>;
  toggleDoc: (docId: string) => void;
  resetChecklist: () => void;
  evaluations: SchemeEvaluation[];
  restart: () => void;
  voice: UseVoiceSpeechReturn;
  isDemoActive: boolean;
  demoStepIndex: number;
  demoMessage: string;
  startDemo: () => void;
  stopDemo: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const STORAGE_KEYS = {
  ANSWERS: 'sarkar_sakhi_answers_v1',
  CHECKLIST: 'sarkar_sakhi_checklist_v1',
  LANG: 'sarkar_sakhi_lang_v1',
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to Telugu for Lakshmamma persona
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

  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CHECKLIST);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Demo mode state
  const [isDemoActive, setIsDemoActive] = useState(false);
  const [demoStepIndex, setDemoStepIndex] = useState(0);
  const [demoMessage, setDemoMessage] = useState('');

  const voice = useVoiceSpeech(language);
  const { setTranscript, speak, stopSpeaking, stopListening } = voice;

  const setCurrentScreen = useCallback((screen: ScreenType) => {
    setTranscript('');
    setCurrentScreenState(screen);
  }, [setTranscript]);

  // Synchronize state with local storage
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
    } catch {}
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CHECKLIST, JSON.stringify(checkedDocs));
    } catch {}
  }, [checkedDocs]);

  const updateAnswer = useCallback((field: keyof UserAnswers, value: unknown) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
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
    setCheckedDocs({});
    try {
      localStorage.removeItem(STORAGE_KEYS.ANSWERS);
      localStorage.removeItem(STORAGE_KEYS.CHECKLIST);
    } catch {}
    setTranscript('');
    setCurrentScreenState('home');
    setIsDemoActive(false);
    setDemoStepIndex(0);
    setDemoMessage('');
    stopSpeaking();
    stopListening();
  }, [setTranscript, stopListening, stopSpeaking]);

  // Compute evaluations dynamically from current answers
  const evaluations: SchemeEvaluation[] = Object.values(SCHEMES).map(scheme =>
    evaluate(answers, scheme)
  );

  // Automated Demo Controller
  const stopDemo = useCallback(() => {
    setIsDemoActive(false);
    setDemoStepIndex(0);
    setDemoMessage('');
    stopSpeaking();
  }, [stopSpeaking]);

  const startDemo = useCallback(() => {
    setLanguage('te');
    setAnswers({});
    setCheckedDocs({
      aadhaar: true,
      ration_card: true
    });
    setTranscript('');
    setIsDemoActive(true);
    setDemoStepIndex(0);
    setDemoMessage(LAKSHMAMMA_DEMO_STEPS[0].caption.te);
    setCurrentScreenState('home');
  }, [setLanguage, setTranscript]);

  useEffect(() => {
    if (!isDemoActive) return;

    // Post-question phase: Results -> Checklist -> Next Steps / WhatsApp Share
    if (demoStepIndex === LAKSHMAMMA_DEMO_STEPS.length) {
      const toChecklistTimer = setTimeout(() => {
        setCurrentScreenState('checklist');
        setDemoMessage('లక్ష్మమ్మ ఆధార్, రేషన్ కార్డు సిద్ధంగా ఉన్నాయి. మిగిలినవి సేకరించాలి.');
        setDemoStepIndex(prev => prev + 1);
      }, 3500);
      return () => clearTimeout(toChecklistTimer);
    }

    if (demoStepIndex === LAKSHMAMMA_DEMO_STEPS.length + 1) {
      const toShareTimer = setTimeout(() => {
        setCurrentScreenState('next_steps');
        setDemoMessage('లక్ష్మమ్మ డెమో పూర్తయింది! వాట్సాప్‌లో జాబితాను పంపండి.');
        setDemoStepIndex(prev => prev + 1);
      }, 3500);
      return () => clearTimeout(toShareTimer);
    }

    if (demoStepIndex > LAKSHMAMMA_DEMO_STEPS.length + 1) {
      return;
    }

    const step = LAKSHMAMMA_DEMO_STEPS[demoStepIndex];
    speak(step.speechText[language]);

    const timer = setTimeout(() => {
      setAnswers(prev => ({ ...prev, [step.answerField]: step.answerValue }));

      if (step.screen === 'intent') {
        setCurrentScreenState('question_age');
      } else if (step.screen === 'question_age') {
        setCurrentScreenState('question_gender');
      } else if (step.screen === 'question_gender') {
        setCurrentScreenState('question_maritalStatus');
      } else if (step.screen === 'question_maritalStatus') {
        setCurrentScreenState('question_incomeBand');
      } else if (step.screen === 'question_incomeBand') {
        setCurrentScreenState('question_receivingPension');
      } else if (step.screen === 'question_receivingPension') {
        setCurrentScreenState('results');
      }

      const nextStep = LAKSHMAMMA_DEMO_STEPS[demoStepIndex + 1];
      if (nextStep) {
        setDemoMessage(nextStep.caption[language]);
      } else {
        setDemoMessage('లక్ష్మమ్మ డెమో: అర్హత ఫలితాలు సిద్ధంగా ఉన్నాయి.');
      }

      setDemoStepIndex(prev => prev + 1);
    }, step.delayMs + 1000);

    return () => clearTimeout(timer);
  }, [isDemoActive, demoStepIndex, language, speak]);

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
        checkedDocs,
        toggleDoc,
        resetChecklist,
        evaluations,
        restart,
        voice,
        isDemoActive,
        demoStepIndex,
        demoMessage,
        startDemo,
        stopDemo
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
