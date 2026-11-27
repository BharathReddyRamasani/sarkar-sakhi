import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, SCHEMES, DOCUMENTS, OFFICE_INFO } from '../config/content';
import { HearAgainButton } from '../components/HearAgainButton';

export const NextStepsScreen: React.FC = () => {
  const { language, answers, formData, evaluations, checkedDocs, restart } = useApp();
  const t = UI_TRANSLATIONS[language];
  const [copied, setCopied] = useState(false);

  const qualifying = evaluations.filter((e) => e.qualifies);
  const schemesText = qualifying.length > 0
    ? qualifying.map((q) => SCHEMES[q.schemeId].name[language]).join(', ')
    : (language === 'te' ? 'ధృవీకరణ అవసరం' : 'Verification Needed');

  const docNamesReady: string[] = [];
  const docNamesMissing: string[] = [];

  const allDocIds = new Set<string>();
  (qualifying.length > 0 ? qualifying : evaluations).forEach((e) => {
    e.requiredDocumentIds.forEach((id) => allDocIds.add(id));
  });

  allDocIds.forEach((id) => {
    const doc = DOCUMENTS[id];
    if (doc) {
      if (checkedDocs[id]) {
        docNamesReady.push(doc.names[language]);
      } else {
        docNamesMissing.push(doc.names[language]);
      }
    }
  });

  const generateShareSummary = () => {
    const applicantLine = formData.applicantName ? `Applicant: ${formData.applicantName}\n` : '';
    const locationParts = [formData.village, formData.mandal, formData.district].filter(Boolean);
    const locationLine = locationParts.length > 0 ? `Location: ${locationParts.join(', ')}\n` : '';
    const ageLine = answers.age ? `Age: ${answers.age}\n` : '';

    if (language === 'te') {
      return (
        `*సర్కార్-సఖి: పింఛను దరఖాస్తు సన్నద్ధత సారాంశం*\n` +
        `సంభావ్య పథకాలు: ${schemesText}\n` +
        (formData.applicantName ? `దరఖాస్తుదారు: ${formData.applicantName}\n` : '') +
        (locationParts.length > 0 ? `ప్రాంతం: ${locationParts.join(', ')}\n` : '') +
        (answers.age ? `వయస్సు: ${answers.age}\n` : '') +
        `\nసిద్ధంగా ఉన్న పత్రాలు (${docNamesReady.length}):\n${docNamesReady.map((d) => `✓ ${d}`).join('\n') || '—'}\n\n` +
        `సేకరించవలసిన పత్రాలు (${docNamesMissing.length}):\n${docNamesMissing.map((d) => `○ ${d}`).join('\n') || '—'}\n\n` +
        `ఎక్కడికి వెళ్ళాలి: ${OFFICE_INFO.places.te[0]}\n` +
        `గమనిక: మండల కార్యాలయం లేదా మీసేవ వద్ద నిర్ధారించుకోండి.`
      );
    } else {
      return (
        `*Sarkar-Sakhi: Pension Readiness Summary*\n` +
        `Schemes: ${schemesText}\n` +
        applicantLine +
        locationLine +
        ageLine +
        `\nReady Documents (${docNamesReady.length}):\n${docNamesReady.map((d) => `✓ ${d}`).join('\n') || '—'}\n\n` +
        `Documents to Collect (${docNamesMissing.length}):\n${docNamesMissing.map((d) => `○ ${d}`).join('\n') || '—'}\n\n` +
        `Where to Visit: ${OFFICE_INFO.places.en[0]}\n` +
        `Note: Confirm locally at your Mandal office or MeeSeva.`
      );
    }
  };

  const handleShareWhatsApp = () => {
    const text = generateShareSummary();
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopySummary = async () => {
    const text = generateShareSummary();
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } catch {}

    if (navigator.share) {
      try {
        await navigator.share({
          title: t.appTitle,
          text
        });
      } catch {}
    }
  };

  const audioSummary = `${t.nextStepsHeading}. ${t.nextStepsSubheading}. ` +
    `1. ${t.step1Title}. 2. ${t.step2Title}. 3. ${t.step3Title}.`;

  return (
    <div className="flex flex-col gap-5 py-4 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col gap-2 text-left">
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-bold text-[28px] sm:text-[32px] text-on-surface leading-tight">
            {t.nextStepsHeading}
          </h1>
          <HearAgainButton textToSpeak={audioSummary} />
        </div>
        <p className="text-[18px] text-on-surface-variant">
          {t.nextStepsSubheading}
        </p>
      </div>

      {/* 3 Numbered Steps */}
      <div className="flex flex-col gap-3 text-left">
        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary font-bold text-[24px] flex items-center justify-center shrink-0 shadow-sm">
            1
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-bold text-[20px] text-on-surface">{t.step1Title}</span>
            <span className="text-[15px] text-on-surface-variant">{t.step1Desc}</span>
          </div>
          <span className="material-symbols-outlined text-[28px] text-primary shrink-0">
            folder_open
          </span>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-secondary text-on-secondary font-bold text-[24px] flex items-center justify-center shrink-0 shadow-sm">
            2
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-bold text-[20px] text-on-surface">{t.step2Title}</span>
            <span className="text-[15px] text-on-surface-variant">{t.step2Desc}</span>
          </div>
          <span className="material-symbols-outlined text-[28px] text-secondary shrink-0">
            directions_walk
          </span>
        </div>

        <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary font-bold text-[24px] flex items-center justify-center shrink-0 shadow-sm">
            3
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-bold text-[20px] text-on-surface">{t.step3Title}</span>
            <span className="text-[15px] text-on-surface-variant">{t.step3Desc}</span>
          </div>
          <span className="material-symbols-outlined text-[28px] text-primary shrink-0">
            fact_check
          </span>
        </div>
      </div>

      {/* Where to Go Card */}
      <div className="bg-surface-container-low rounded-2xl p-4 shadow-sm border border-surface-container-highest flex flex-col gap-2 text-left">
        <div className="flex items-center gap-2 text-secondary font-bold text-[18px]">
          <span className="material-symbols-outlined text-[24px]">location_on</span>
          <span>{OFFICE_INFO.title[language]}</span>
        </div>
        <p className="text-[16px] text-on-surface">
          {OFFICE_INFO.description[language]}
        </p>
        <ul className="list-disc list-inside text-[15px] text-on-surface-variant space-y-1 mt-1">
          {OFFICE_INFO.places[language].map((place, idx) => (
            <li key={idx} className="font-medium">{place}</li>
          ))}
        </ul>
        <div className="flex items-center gap-2 text-[14px] text-secondary font-semibold mt-1">
          <span className="material-symbols-outlined text-[20px]">schedule</span>
          <span>{OFFICE_INFO.hours[language]}</span>
        </div>
      </div>

      {/* In-Person Visit Notice */}
      <div className="bg-primary-fixed/30 rounded-2xl p-4 border border-primary/20 flex items-start gap-3 text-left">
        <span className="material-symbols-outlined text-primary text-[28px] shrink-0 mt-0.5">
          groups
        </span>
        <p className="text-[15px] text-on-surface font-medium leading-relaxed">
          {t.inPersonNotice}
        </p>
      </div>

      {/* Sharing Buttons */}
      <div className="flex flex-col gap-3 mt-2">
        <button
          type="button"
          onClick={handleShareWhatsApp}
          className="w-full min-h-[64px] px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-[20px] flex items-center justify-center gap-3 shadow-md active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[28px]">share</span>
          <span>{t.shareWhatsAppCta}</span>
        </button>

        <button
          type="button"
          onClick={handleCopySummary}
          className="w-full min-h-[56px] px-6 rounded-2xl bg-surface-container-lowest text-secondary font-bold text-[18px] flex items-center justify-center gap-2 shadow-sm border border-secondary/30 active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[24px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span>{copied ? t.copiedNotice : t.copySummaryCta}</span>
        </button>

        <button
          type="button"
          onClick={restart}
          className="min-h-[52px] text-on-surface-variant font-semibold text-[16px] underline hover:text-primary transition-colors mt-2"
        >
          {t.clear}
        </button>
      </div>
    </div>
  );
};
