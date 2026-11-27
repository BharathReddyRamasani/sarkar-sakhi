import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, SCHEMES } from '../config/content';
import { HearAgainButton } from '../components/HearAgainButton';

export const ResultsScreen: React.FC = () => {
  const { language, evaluations, setCurrentScreen } = useApp();
  const t = UI_TRANSLATIONS[language];

  const fullAudioSummary = evaluations
    .map((e) => {
      const scheme = SCHEMES[e.schemeId];
      const status = e.qualifies ? t.mayQualifyBadge : t.doesNotQualifyBadge;
      return `${scheme.name[language]}: ${status}. ${scheme.amountText[language]}.`;
    })
    .join(' ');

  return (
    <div className="flex flex-col gap-6 py-4 animate-fadeIn">
      {/* Header & Listen Button */}
      <div className="flex flex-col gap-3 bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 text-left">
        <div className="flex items-center justify-between gap-3">
          <h1 className="font-bold text-[28px] sm:text-[32px] text-on-surface leading-tight">
            {t.schemesHeading}
          </h1>
          <HearAgainButton textToSpeak={`${t.schemesHeading}. ${t.schemesSubheading} ${fullAudioSummary}`} />
        </div>
        <p className="text-[18px] text-on-surface-variant">
          {t.schemesSubheading}
        </p>
      </div>

      {/* Scheme Cards */}
      <div className="flex flex-col gap-5">
        {evaluations.map((evaluation) => {
          const scheme = SCHEMES[evaluation.schemeId];
          const isEligible = evaluation.qualifies;

          return (
            <div
              key={evaluation.schemeId}
              className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden border border-outline-variant/40"
            >
              {/* Card Status Banner */}
              <div
                className={`flex items-center justify-between px-4 py-3 ${
                  isEligible
                    ? 'bg-secondary-container text-on-secondary-container'
                    : 'bg-surface-container-high text-on-surface-variant'
                }`}
              >
                {/* Mandatory Disclaimer Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-on-surface font-bold text-[14px] shadow-sm">
                  <span className="material-symbols-outlined text-[18px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    info
                  </span>
                  <span>{t.demoBadge}</span>
                </div>

                {/* Qualification badge: Always 'May qualify', never 'eligible' */}
                <div className="inline-flex items-center gap-1 font-bold text-[17px]">
                  <span
                    className="material-symbols-outlined text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {isEligible ? 'verified' : 'cancel'}
                  </span>
                  <span>{isEligible ? t.mayQualifyBadge : t.doesNotQualifyBadge}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col gap-4 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[32px]">{scheme.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h2 className="font-bold text-[24px] text-on-surface leading-snug">
                      {scheme.name[language]}
                    </h2>
                    <span className="text-[16px] text-on-surface-variant font-medium">
                      {scheme.alias[language]}
                    </span>
                    <span className="text-[17px] font-bold text-secondary mt-1">
                      {scheme.amountText[language]}
                    </span>
                  </div>
                </div>

                <p className="text-[16px] text-on-surface-variant">
                  {scheme.description[language]}
                </p>

                {/* Matched / Unmet conditions breakdown */}
                <div className="flex flex-col gap-2 p-3 bg-surface-container-low rounded-xl">
                  {/* Matched */}
                  {evaluation.matched.map((m, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[16px] text-on-surface font-medium">
                      <span className="material-symbols-outlined text-secondary text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span>{m.labelKey}</span>
                    </div>
                  ))}

                  {/* Unmet */}
                  {evaluation.unmet.map((u, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[16px] text-error font-medium">
                      <span className="material-symbols-outlined text-[24px]">cancel</span>
                      <span>{u.labelKey}</span>
                    </div>
                  ))}

                  {/* Needs Verification */}
                  {evaluation.needsVerification.map((v, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-[16px] text-primary font-medium">
                      <span className="material-symbols-outlined text-[24px]">help</span>
                      <span>{v.labelKey}</span>
                    </div>
                  ))}
                </div>

                {/* Confirm note */}
                <div className="text-[14px] text-on-surface-variant italic">
                  * {scheme.disclaimer[language]}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Large CTA: Proceed to Document Checklist */}
      <button
        type="button"
        onClick={() => setCurrentScreen('checklist')}
        className="w-full min-h-[64px] px-6 rounded-2xl bg-primary text-on-primary font-bold text-[21px] flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-[30px]">fact_check</span>
        <span>{t.viewChecklistCta}</span>
      </button>
    </div>
  );
};
