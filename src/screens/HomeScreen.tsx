import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';
import { VoiceInput } from '../components/VoiceInput';
import { HearAgainButton } from '../components/HearAgainButton';
import { matchIntent } from '../engine/intent';

export const HomeScreen: React.FC = () => {
  const { language, setCurrentScreen, updateAnswer, autoSpeak, voice } = useApp();
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

  const handleStartCheck = () => {
    if (autoSpeak) {
      voice.speak(t.intentFallbackPrompt);
    }
    setCurrentScreen('intent');
  };

  return (
    <div className="flex flex-col gap-6 py-4 animate-fadeIn">
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

        {/* Spoken hint examples */}
        <p className="text-[15px] text-on-surface-variant text-center mt-1 px-2">
          {language === 'te'
            ? 'ఉదాహరణకు: "నాకు వితంతు పింఛను కావాలి" లేదా "వృద్ధాప్య పింఛను"'
            : language === 'hi'
            ? 'उदाहरण: "मुझे विधवा पेंशन चाहिए" या "बुजुर्ग पेंशन"'
            : 'Try saying: "I need widow pension" or "Old age pension"'}
        </p>
      </div>

      {/* Primary Live Flow Start Button (for touch users or quick navigation) */}
      <button
        type="button"
        onClick={handleStartCheck}
        className="w-full min-h-[64px] px-5 rounded-2xl bg-secondary text-on-secondary font-bold text-[20px] flex items-center justify-center gap-3 shadow-md active:scale-95 transition-transform border border-secondary"
      >
        <span className="material-symbols-outlined text-[30px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          arrow_forward
        </span>
        <span>{t.startCheckCta}</span>
      </button>

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
