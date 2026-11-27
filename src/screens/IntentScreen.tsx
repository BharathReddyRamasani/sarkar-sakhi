import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, SCHEMES } from '../config/content';
import { HearAgainButton } from '../components/HearAgainButton';

export const IntentScreen: React.FC = () => {
  const { language, setCurrentScreen, updateAnswer } = useApp();
  const t = UI_TRANSLATIONS[language];

  const handleSelectScheme = (intent: string) => {
    updateAnswer('intent', intent);
    setCurrentScreen('question_age');
  };

  const oldAgeScheme = SCHEMES.telangana_old_age;
  const widowScheme = SCHEMES.telangana_widow;

  const audioPrompt = `${t.intentFallbackTitle}. ${t.intentFallbackPrompt}`;

  return (
    <div className="flex flex-col gap-6 py-4 animate-fadeIn">
      {/* Title & Speech */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <h1 className="font-bold text-[26px] text-on-surface leading-tight">
          {t.intentFallbackTitle}
        </h1>
        <p className="text-[18px] text-on-surface-variant">
          {t.intentFallbackPrompt}
        </p>
        <HearAgainButton textToSpeak={audioPrompt} />
      </div>

      {/* Big Selection Cards */}
      <div className="flex flex-col gap-4">
        {/* Old-Age Pension Card */}
        <button
          type="button"
          onClick={() => handleSelectScheme('old_age')}
          className="w-full min-h-[80px] p-4 rounded-2xl bg-surface-container-lowest text-on-surface shadow-md border-2 border-transparent hover:border-primary active:scale-[0.98] transition-all flex items-center justify-between gap-4 text-left group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-[32px]">{oldAgeScheme.icon}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[21px] text-on-surface">
                {oldAgeScheme.name[language]}
              </span>
              <span className="text-[16px] text-on-surface-variant line-clamp-2">
                {oldAgeScheme.description[language]}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[32px] text-secondary shrink-0">
            chevron_right
          </span>
        </button>

        {/* Widow Pension Card */}
        <button
          type="button"
          onClick={() => handleSelectScheme('widow')}
          className="w-full min-h-[80px] p-4 rounded-2xl bg-surface-container-lowest text-on-surface shadow-md border-2 border-transparent hover:border-primary active:scale-[0.98] transition-all flex items-center justify-between gap-4 text-left group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-on-primary transition-colors">
              <span className="material-symbols-outlined text-[32px]">{widowScheme.icon}</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[21px] text-on-surface">
                {widowScheme.name[language]}
              </span>
              <span className="text-[16px] text-on-surface-variant line-clamp-2">
                {widowScheme.description[language]}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[32px] text-secondary shrink-0">
            chevron_right
          </span>
        </button>

        {/* General / Check Both */}
        <button
          type="button"
          onClick={() => handleSelectScheme('general')}
          className="w-full min-h-[72px] p-4 rounded-2xl bg-secondary-container/50 text-on-secondary-container shadow-sm border border-secondary/30 active:scale-[0.98] transition-all flex items-center justify-between gap-4 text-left"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[28px]">checklist</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[20px]">
                {language === 'te' ? 'రెండింటినీ తనిఖీ చేయండి' : 'Check both pensions for me'}
              </span>
              <span className="text-[15px] text-on-surface-variant">
                {language === 'te' ? 'నా సమాధానాల ఆధారంగా చెప్పండి' : 'Tell me based on my answers'}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[28px] text-secondary shrink-0">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
};
