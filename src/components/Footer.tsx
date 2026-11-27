import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';

export const Footer: React.FC = () => {
  const { language, currentScreen, setCurrentScreen } = useApp();
  const t = UI_TRANSLATIONS[language];

  return (
    <footer className="mt-auto border-t border-surface-container-high bg-surface-container-low/70 py-6 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-3">
        <div className="flex items-center gap-2 text-on-surface-variant text-[15px] font-medium">
          <span className="material-symbols-outlined text-[20px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
            shield
          </span>
          <span>{t.noDataStored}</span>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[15px] text-secondary font-semibold">
          <button
            onClick={() => setCurrentScreen('about')}
            className="underline underline-offset-4 hover:text-primary min-h-[44px] px-2 flex items-center"
          >
            {t.aboutTitle}
          </button>
          {currentScreen !== 'home' && (
            <button
              onClick={() => setCurrentScreen('home')}
              className="underline underline-offset-4 hover:text-primary min-h-[44px] px-2 flex items-center"
            >
              {t.appTitle} Home
            </button>
          )}
        </div>

        <p className="text-[13px] text-on-surface-variant/80">
          {t.footerRights} • {t.disclaimerCard}
        </p>
      </div>
    </footer>
  );
};
