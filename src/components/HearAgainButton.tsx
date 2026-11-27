import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';

interface HearAgainButtonProps {
  textToSpeak: string;
  ariaLabel?: string;
  className?: string;
  variant?: 'large' | 'compact';
}

export const HearAgainButton: React.FC<HearAgainButtonProps> = ({
  textToSpeak,
  ariaLabel,
  className = '',
  variant = 'large'
}) => {
  const { language, voice } = useApp();
  const t = UI_TRANSLATIONS[language];

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (voice.isSpeaking) {
      voice.stopSpeaking();
    } else {
      voice.speak(textToSpeak);
    }
  };

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={handleSpeak}
        aria-label={ariaLabel || t.hearAgain}
        className={`min-w-[64px] min-h-[56px] px-3 py-2 rounded-xl bg-secondary-container text-on-secondary-container flex flex-col items-center justify-center gap-0.5 shadow-sm shrink-0 active:scale-95 transition-transform border border-secondary/20 ${className}`}
      >
        <span
          className="material-symbols-outlined text-[28px]"
          style={{ fontVariationSettings: voice.isSpeaking ? "'FILL' 1" : "'FILL' 0" }}
        >
          {voice.isSpeaking ? 'volume_up' : 'volume_up'}
        </span>
        <span className="text-[15px] font-bold leading-tight">
          {language === 'te' ? 'వినండి' : 'Hear'}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleSpeak}
      aria-label={ariaLabel || t.hearAgain}
      className={`inline-flex items-center justify-center gap-2 min-h-[56px] px-5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[19px] shadow-sm active:scale-95 transition-transform border border-secondary/20 ${className}`}
    >
      <span
        className="material-symbols-outlined text-[28px]"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        volume_up
      </span>
      <span>{t.hearAgain}</span>
    </button>
  );
};
