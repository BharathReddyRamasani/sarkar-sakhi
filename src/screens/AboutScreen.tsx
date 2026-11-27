import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';

export const AboutScreen: React.FC = () => {
  const { language, setCurrentScreen } = useApp();
  const t = UI_TRANSLATIONS[language];

  return (
    <div className="flex flex-col gap-6 py-4 text-left animate-fadeIn">
      <div className="flex flex-col gap-3 bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[28px]">info</span>
          </div>
          <h1 className="font-bold text-[26px] text-on-surface">
            {t.aboutTitle}
          </h1>
        </div>

        <p className="text-[17px] text-on-surface-variant leading-relaxed">
          {t.aboutContent}
        </p>
      </div>

      <div className="bg-surface-container-low rounded-2xl p-5 flex flex-col gap-3 border border-surface-container-highest">
        <h2 className="font-bold text-[20px] text-secondary flex items-center gap-2">
          <span className="material-symbols-outlined text-[24px]">security</span>
          {t.privacyBadge}
        </h2>
        <p className="text-[16px] text-on-surface leading-relaxed">
          {t.privacyNote}
        </p>
        <ul className="list-disc list-inside text-[15px] text-on-surface-variant space-y-1">
          <li>{language === 'te' ? 'ఆధార్ సంఖ్య అడగబడదు' : 'No Aadhaar number is collected.'}</li>
          <li>{language === 'te' ? 'ఫోన్ నంబర్ లేదా బ్యాంక్ వివరాలు నిల్వ చేయబడవు' : 'No phone number or bank details stored.'}</li>
          <li>{language === 'te' ? 'బ్రౌజర్ మెమొరీలో మాత్రమే తాత్కాలికంగా ఉంటుంది' : 'Stored in local device memory only.'}</li>
        </ul>
      </div>

      <div className="bg-primary-fixed/30 rounded-2xl p-5 flex flex-col gap-2 border border-primary/20">
        <h2 className="font-bold text-[18px] text-primary flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px]">warning</span>
          {t.demoBadge}
        </h2>
        <p className="text-[15px] text-on-surface">
          {t.disclaimerCard}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setCurrentScreen('home')}
        className="min-h-[56px] px-6 rounded-2xl bg-secondary text-on-secondary font-bold text-[18px] flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-[24px]">home</span>
        <span>{t.appTitle} Home</span>
      </button>
    </div>
  );
};
