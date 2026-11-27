import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';

export const Header: React.FC = () => {
  const { language, setLanguage, currentScreen, setCurrentScreen, autoSpeak, setAutoSpeak } = useApp();
  const t = UI_TRANSLATIONS[language];

  const handleBack = () => {
    switch (currentScreen) {
      case 'home':
        return;
      case 'intent':
        setCurrentScreen('home');
        break;
      case 'question_age':
        setCurrentScreen('intent');
        break;
      case 'question_gender':
        setCurrentScreen('question_age');
        break;
      case 'question_maritalStatus':
        setCurrentScreen('question_gender');
        break;
      case 'question_incomeBand':
        setCurrentScreen('question_maritalStatus');
        break;
      case 'question_receivingPension':
        setCurrentScreen('question_incomeBand');
        break;
      case 'results':
        setCurrentScreen('question_receivingPension');
        break;
      case 'application_form':
        setCurrentScreen('results');
        break;
      case 'checklist':
        setCurrentScreen('application_form');
        break;
      case 'next_steps':
        setCurrentScreen('checklist');
        break;
      case 'about':
        setCurrentScreen('home');
        break;
    }
  };

  const getScreenTitle = () => {
    switch (currentScreen) {
      case 'home':
        return t.appSubtitle;
      case 'intent':
        return t.intentFallbackTitle;
      case 'question_age':
      case 'question_gender':
      case 'question_maritalStatus':
      case 'question_incomeBand':
      case 'question_receivingPension':
        return t.questionHeaderLabel;
      case 'results':
        return t.schemesHeading;
      case 'application_form':
        return t.formHeading;
      case 'checklist':
        return t.checklistHeading;
      case 'next_steps':
        return t.nextStepsHeading;
      case 'about':
        return t.aboutTitle;
    }
  };

  const cycleLanguage = () => {
    if (language === 'te') setLanguage('en');
    else if (language === 'en') setLanguage('hi');
    else setLanguage('te');
  };

  const getLanguageLabel = () => {
    if (language === 'te') return 'తెలుగు / EN';
    if (language === 'en') return 'EN / हिंदी';
    return 'हिंदी / తెలుగు';
  };

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_6px_rgba(0,0,0,0.06)] border-b border-surface-container-high pt-safe print:hidden">
      <div className="h-20 max-w-xl mx-auto px-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {currentScreen !== 'home' ? (
            <button
              aria-label={t.back}
              onClick={handleBack}
              className="w-14 h-14 min-h-[56px] min-w-[56px] flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high active:scale-95 transition-all shrink-0 focus-visible:outline-primary"
            >
              <span className="material-symbols-outlined text-[32px]">arrow_back</span>
            </button>
          ) : (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[30px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                diversity_1
              </span>
            </div>
          )}

          <div
            className="flex flex-col min-w-0 cursor-pointer"
            onClick={() => setCurrentScreen('home')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setCurrentScreen('home');
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`${t.appTitle} Home`}
          >
            <span className="font-bold text-[22px] leading-tight text-secondary truncate">
              {t.appTitle}
            </span>
            <span className="text-[14px] text-on-surface-variant truncate">
              {getScreenTitle()}
            </span>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Auto-speak Voice Guide Toggle */}
          <button
            type="button"
            aria-label={autoSpeak ? t.voiceGuideOn : t.voiceGuideOff}
            aria-pressed={autoSpeak}
            onClick={() => setAutoSpeak(!autoSpeak)}
            title={autoSpeak ? t.voiceGuideOn : t.voiceGuideOff}
            className={`min-h-[52px] min-w-[52px] px-2.5 rounded-full flex items-center justify-center shadow-sm active:scale-95 transition-all border ${
              autoSpeak
                ? 'bg-primary-fixed text-on-primary-fixed border-primary/30'
                : 'bg-surface-container-high text-on-surface-variant border-outline-variant'
            }`}
          >
            <span className="material-symbols-outlined text-[24px]">
              {autoSpeak ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Language Switcher Button */}
          <button
            aria-label={`Switch Language. Current is ${language}`}
            onClick={cycleLanguage}
            className="min-h-[52px] min-w-[52px] px-3 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[16px] flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform border border-secondary/20"
          >
            <span className="material-symbols-outlined text-[24px]">translate</span>
            <span>{getLanguageLabel()}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
