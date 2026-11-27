import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';
import { VoiceInput } from '../components/VoiceInput';
import { HearAgainButton } from '../components/HearAgainButton';
import { matchIntent } from '../engine/intent';

export const HomeScreen: React.FC = () => {
  const { language, setCurrentScreen, updateAnswer, startDemo, isDemoActive, demoMessage } = useApp();
  const t = UI_TRANSLATIONS[language];

  const handleVoiceIntent = (transcript: string) => {
    const result = matchIntent(transcript, language);
    if (result.matched) {
      updateAnswer('intent', result.intent || 'general');
      setCurrentScreen('question_age');
    } else {
      // Unrecognized intent -> Fall back to explicit intent selection screen
      setCurrentScreen('intent');
    }
  };

  const handleTypeInstead = () => {
    setCurrentScreen('intent');
  };

  return (
    <div className="flex flex-col gap-6 py-4 animate-fadeIn">
      {/* Simulation banner if demo active */}
      {isDemoActive && (
        <div className="p-3 bg-primary-fixed text-on-primary-fixed rounded-xl flex items-center justify-between gap-2 shadow-sm border border-primary/20">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px]">smart_toy</span>
            <span className="text-[16px] font-bold">{demoMessage || t.demoSimulationNote}</span>
          </div>
        </div>
      )}

      {/* Greeting Banner */}
      <div className="bg-primary-fixed/50 rounded-2xl p-5 text-center shadow-sm border border-primary/10 flex flex-col items-center gap-2">
        <h1 className="font-bold text-[28px] sm:text-[32px] text-on-surface leading-snug">
          {t.homeGreeting}
        </h1>
        <p className="text-[18px] text-on-surface-variant font-medium max-w-md">
          {t.homeSubGreeting}
        </p>
        <HearAgainButton
          textToSpeak={`${t.homeGreeting} ${t.homeSubGreeting}`}
          className="mt-2"
        />
      </div>

      {/* Giant Voice Input Section */}
      <div className="flex flex-col items-center justify-center py-2">
        <VoiceInput onTranscriptSubmitted={handleVoiceIntent} />

        {/* Big Tap Alternate: Type Instead */}
        <button
          type="button"
          onClick={handleTypeInstead}
          className="min-h-[56px] px-6 mt-3 rounded-full bg-surface-container-lowest text-secondary font-bold text-[18px] flex items-center gap-2 shadow-sm border border-outline-variant/60 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[26px]">touch_app</span>
          <span>{t.typeInstead}</span>
        </button>
      </div>

      {/* Prominent Play Demo Button (Lakshmamma Fictional Persona) */}
      <div className="flex flex-col gap-1 w-full">
        <button
          type="button"
          onClick={startDemo}
          className="w-full min-h-[64px] px-5 rounded-2xl bg-secondary text-on-secondary font-bold text-[20px] flex items-center justify-center gap-3 shadow-md active:scale-95 transition-transform border border-secondary"
        >
          <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_circle
          </span>
          <span>{t.playDemo}</span>
        </button>
        <span className="text-[14px] text-center text-on-surface-variant font-medium">
          {t.demoSimulationNote}
        </span>
      </div>

      {/* Reassuring Privacy Card */}
      <div className="bg-surface-container-low rounded-2xl p-4 flex items-start gap-3 border border-surface-container-highest">
        <span className="material-symbols-outlined text-[30px] text-secondary shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
          verified_user
        </span>
        <div className="flex flex-col gap-0.5 text-left">
          <span className="text-[16px] font-bold text-on-surface">{t.privacyBadge}</span>
          <p className="text-[16px] text-on-surface-variant leading-relaxed">
            {t.privacyNote}
          </p>
        </div>
      </div>
    </div>
  );
};
