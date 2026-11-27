import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, DOCUMENTS } from '../config/content';
import { HearAgainButton } from '../components/HearAgainButton';

export const ChecklistScreen: React.FC = () => {
  const { language, evaluations, checkedDocs, toggleDoc, resetChecklist, setCurrentScreen } = useApp();
  const t = UI_TRANSLATIONS[language];

  // Aggregate required document IDs from qualifying schemes (or all schemes if none qualify yet)
  const qualifyingEvaluations = evaluations.filter((e) => e.qualifies);
  const targetEvaluations = qualifyingEvaluations.length > 0 ? qualifyingEvaluations : evaluations;

  const docIdSet = new Set<string>();
  targetEvaluations.forEach((e) => {
    e.requiredDocumentIds.forEach((id) => docIdSet.add(id));
  });

  const docList = Array.from(docIdSet).map((id) => DOCUMENTS[id]).filter(Boolean);
  const totalCount = docList.length;
  const readyCount = docList.filter((d) => checkedDocs[d.id]).length;
  const percentReady = totalCount > 0 ? Math.round((readyCount / totalCount) * 100) : 0;

  const audioSummary = `${t.checklistHeading}. ${readyCount} of ${totalCount} ready. ` +
    docList.map((d) => `${d.names[language]}: ${checkedDocs[d.id] ? 'Ready' : 'Not ready'}`).join('. ');

  return (
    <div className="flex flex-col gap-5 py-4 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-2 text-left">
        <h1 className="font-bold text-[28px] sm:text-[32px] text-on-surface leading-tight">
          {t.checklistHeading}
        </h1>
        <p className="text-[18px] text-on-surface-variant">
          {t.checklistSubheading}
        </p>
      </div>

      {/* Progress Card */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              task_alt
            </span>
            <span className="text-[19px] font-bold text-on-surface">
              {t.readyCount(readyCount, totalCount)}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[16px]">
            {percentReady}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-5 bg-surface-container-high rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-all duration-300"
            style={{ width: `${percentReady}%` }}
          />
        </div>

        {percentReady === 100 && (
          <div className="flex items-center gap-2 text-secondary font-bold text-[16px] animate-fadeIn">
            <span className="material-symbols-outlined text-[24px]">verified</span>
            <span>{t.allReady}</span>
          </div>
        )}

        {/* Audio helper & Reset */}
        <div className="flex items-center justify-between pt-1 border-t border-surface-container-high">
          <HearAgainButton textToSpeak={audioSummary} />
          <button
            type="button"
            onClick={resetChecklist}
            className="min-h-[44px] px-3 text-[15px] text-error font-semibold flex items-center gap-1 hover:underline active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">restart_alt</span>
            <span>{t.resetChecklist}</span>
          </button>
        </div>
      </div>

      {/* Interactive Document Checklist Items */}
      <div className="flex flex-col gap-3" role="group" aria-label={t.checklistHeading}>
        {docList.map((doc) => {
          const isChecked = Boolean(checkedDocs[doc.id]);

          return (
            <div
              key={doc.id}
              role="checkbox"
              aria-checked={isChecked}
              tabIndex={0}
              onClick={() => toggleDoc(doc.id)}
              onKeyDown={(e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                  e.preventDefault();
                  toggleDoc(doc.id);
                }
              }}
              className={`w-full min-h-[76px] p-4 rounded-2xl shadow-sm flex items-center justify-between gap-3 text-left cursor-pointer transition-all active:scale-[0.99] border-2 ${
                isChecked
                  ? 'bg-primary-fixed border-primary text-on-primary-fixed shadow-md'
                  : 'bg-surface-container-lowest border-surface-container-high hover:border-outline text-on-surface'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0 flex-1">
                {/* Big Checkbox Indicator */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                    isChecked
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  <span
                    className="material-symbols-outlined text-[32px]"
                    style={{ fontVariationSettings: isChecked ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {isChecked ? 'check' : ''}
                  </span>
                </div>

                {/* Doc Icon & Titles */}
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[22px] text-secondary">
                      {doc.icon}
                    </span>
                    <span className="font-bold text-[20px] leading-snug line-clamp-2">
                      {doc.names[language]}
                    </span>
                  </div>
                  <span className="text-[14px] text-on-surface-variant/90 line-clamp-1 mt-0.5">
                    {doc.descriptions[language]}
                  </span>
                </div>
              </div>

              {/* Hear button per document item */}
              <HearAgainButton
                variant="compact"
                textToSpeak={`${doc.names[language]}. ${doc.descriptions[language]}`}
                ariaLabel={`Hear details for ${doc.names[language]}`}
              />
            </div>
          );
        })}
      </div>

      {/* Large Next Steps CTA */}
      <button
        type="button"
        onClick={() => setCurrentScreen('next_steps')}
        className="w-full min-h-[64px] px-6 mt-2 rounded-2xl bg-secondary text-on-secondary font-bold text-[21px] flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
      >
        <span>{t.nextStepsCta}</span>
        <span className="material-symbols-outlined text-[28px]">arrow_forward</span>
      </button>
    </div>
  );
};
