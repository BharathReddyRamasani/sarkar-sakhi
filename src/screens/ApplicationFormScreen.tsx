import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, SCHEMES } from '../config/content';
import { HearAgainButton } from '../components/HearAgainButton';
import type { ApplicationFormData } from '../types';

type VoiceFieldKey = 'applicantName' | 'guardianName' | 'district' | 'mandal' | 'village';

export const ApplicationFormScreen: React.FC = () => {
  const {
    language,
    answers,
    evaluations,
    formData,
    updateFormField,
    setCurrentScreen,
    voice
  } = useApp();
  const t = UI_TRANSLATIONS[language];

  const [listeningField, setListeningField] = useState<VoiceFieldKey | null>(null);

  const qualifying = evaluations.filter((e) => e.qualifies);
  const availableSchemes = qualifying.length > 0 ? qualifying : evaluations;

  const activeSchemeId =
    formData.selectedSchemeId && SCHEMES[formData.selectedSchemeId]
      ? formData.selectedSchemeId
      : availableSchemes[0]?.schemeId || 'telangana_old_age';

  const activeScheme = SCHEMES[activeSchemeId];

  const handleVoiceFill = (field: VoiceFieldKey, promptLabel: string) => {
    if (listeningField === field && voice.isListening) {
      voice.stopListening();
      setListeningField(null);
      return;
    }

    setListeningField(field);
    voice.speak(promptLabel);

    // Slight delay so TTS does not bleed into microphone pickup if supported
    setTimeout(() => {
      voice.startListening((finalText) => {
        if (finalText) {
          updateFormField(field, finalText.trim());
        }
        setListeningField(null);
      });
    }, 350);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const content = [
      '=== SARKAR-SAKHI SAMPLE PENSION APPLICATION DRAFT ===',
      `Scheme: ${activeScheme.name[language]} (${activeScheme.alias[language]})`,
      `Applicant Name: ${formData.applicantName || '________________'}`,
      `Husband / Father Name: ${formData.guardianName || '________________'}`,
      `Age: ${answers.age || answers.ageRange || '________________'}`,
      `Gender: ${answers.gender || '________________'}`,
      `Marital Status: ${answers.maritalStatus || '________________'}`,
      `Income / Ration Card: ${answers.incomeBand || '________________'}`,
      `District: ${formData.district || '________________'}`,
      `Mandal / Municipality: ${formData.mandal || '________________'}`,
      `Village / Ward: ${formData.village || '________________'}`,
      '',
      'Note: Sample application draft prepared via Sarkar-Sakhi.',
      'Please verify details and submit with original documents at your Mandal / MeeSeva office.'
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sarkar-sakhi-application-draft.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const textFields: { key: VoiceFieldKey; label: string; icon: string; placeholder: string }[] = [
    {
      key: 'applicantName',
      label: t.formApplicantName,
      icon: 'person',
      placeholder: language === 'te' ? 'ఉదా: లక్ష్మమ్మ' : 'e.g. Lakshmamma'
    },
    {
      key: 'guardianName',
      label: t.formGuardianName,
      icon: 'family_restroom',
      placeholder: language === 'te' ? 'ఉదా: రామయ్య' : 'e.g. Ramaiah'
    },
    {
      key: 'district',
      label: t.formDistrict,
      icon: 'map',
      placeholder: language === 'te' ? 'ఉదా: నల్గొండ' : 'e.g. Nalgonda'
    },
    {
      key: 'mandal',
      label: t.formMandal,
      icon: 'location_city',
      placeholder: language === 'te' ? 'ఉదా: మిర్యాలగూడ' : 'e.g. Miryalaguda'
    },
    {
      key: 'village',
      label: t.formVillage,
      icon: 'home_pin',
      placeholder: language === 'te' ? 'ఉదా: తక్కెళ్ళపాడు' : 'e.g. Thakkellapadu'
    }
  ];

  const handleFieldChange = (field: keyof ApplicationFormData, value: string) => {
    updateFormField(field, value);
  };

  return (
    <div className="flex flex-col gap-5 py-4 animate-fadeIn">
      {/* Header */}
      <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 flex flex-col gap-3 text-left print:border-black print:shadow-none">
        <div className="flex items-start justify-between gap-2">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[13px] mb-2 print:hidden">
              {t.sampleBadge}
            </span>
            <h1 className="font-bold text-[26px] sm:text-[30px] text-on-surface leading-tight">
              {t.formHeading}
            </h1>
          </div>
          <div className="print:hidden">
            <HearAgainButton
              variant="compact"
              textToSpeak={`${t.formHeading}. ${t.formSubheading}`}
            />
          </div>
        </div>
        <p className="text-[17px] text-on-surface-variant print:hidden">
          {t.formSubheading}
        </p>
      </div>

      {/* Scheme Selector */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/30 flex flex-col gap-2 text-left">
        <label htmlFor="scheme-select" className="text-[16px] font-bold text-secondary">
          {t.formSchemeLabel}
        </label>
        <select
          id="scheme-select"
          value={activeSchemeId}
          onChange={(e) => handleFieldChange('selectedSchemeId', e.target.value)}
          className="min-h-[56px] px-4 rounded-xl border border-outline bg-surface text-on-surface text-[19px] font-bold focus:outline-primary"
        >
          {Object.values(SCHEMES).map((s) => (
            <option key={s.id} value={s.id}>
              {s.name[language]}
            </option>
          ))}
        </select>
      </div>

      {/* Pre-filled Eligibility Summary from Wizard */}
      <div className="bg-surface-container-low rounded-2xl p-4 border border-surface-container-highest grid grid-cols-2 gap-3 text-left text-[15px]">
        <div>
          <span className="text-on-surface-variant block">Age</span>
          <strong className="text-[18px] text-on-surface">{answers.age || answers.ageRange || '—'}</strong>
        </div>
        <div>
          <span className="text-on-surface-variant block">Gender</span>
          <strong className="text-[18px] text-on-surface capitalize">{answers.gender || '—'}</strong>
        </div>
        <div>
          <span className="text-on-surface-variant block">Marital Status</span>
          <strong className="text-[18px] text-on-surface capitalize">{answers.maritalStatus || '—'}</strong>
        </div>
        <div>
          <span className="text-on-surface-variant block">Income Band</span>
          <strong className="text-[18px] text-on-surface">
            {answers.incomeBand === 'below_1_5_lakh' ? '< ₹1.5L / White Card' : answers.incomeBand || '—'}
          </strong>
        </div>
      </div>

      {/* Voice-Fillable Form Inputs */}
      <div className="flex flex-col gap-4 text-left">
        {textFields.map(({ key, label, icon, placeholder }) => {
          const isFieldListening = listeningField === key && voice.isListening;
          return (
            <div
              key={key}
              className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/40 flex flex-col gap-2"
            >
              <label htmlFor={`field-${key}`} className="text-[17px] font-bold text-on-surface flex items-center gap-2">
                <span className="material-symbols-outlined text-[22px] text-secondary">{icon}</span>
                <span>{label}</span>
              </label>

              <div className="flex items-center gap-2">
                <input
                  id={`field-${key}`}
                  type="text"
                  value={isFieldListening && voice.transcript ? voice.transcript : formData[key]}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                  placeholder={placeholder}
                  className="flex-1 min-h-[56px] px-4 rounded-xl border border-outline-variant bg-surface text-on-surface text-[19px] focus:outline-primary"
                />

                {/* Mic button per form field */}
                <button
                  type="button"
                  onClick={() => handleVoiceFill(key, label)}
                  aria-label={`${t.formSpeakToFill}: ${label}`}
                  className={`min-h-[56px] min-w-[56px] px-3 rounded-xl flex items-center justify-center gap-1.5 font-bold shadow-sm active:scale-95 transition-all shrink-0 print:hidden ${
                    isFieldListening
                      ? 'bg-error text-on-error animate-pulse'
                      : 'bg-primary text-on-primary hover:bg-primary-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[26px]">mic</span>
                  <span className="hidden sm:inline text-[15px]">
                    {isFieldListening ? t.formListeningField : t.formSpeakToFill}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Privacy reminder */}
      <p className="text-[14px] text-on-surface-variant text-center print:hidden">
        {t.formPrivacyHint}
      </p>

      {/* Print / Download / Continue Actions */}
      <div className="flex flex-col gap-3 print:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handlePrintPdf}
            className="min-h-[56px] px-4 rounded-2xl bg-surface-container-lowest text-on-surface border-2 border-secondary font-bold text-[17px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[24px] text-secondary">print</span>
            <span>{t.formPrintPdfCta}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadTxt}
            className="min-h-[56px] px-4 rounded-2xl bg-surface-container-lowest text-on-surface border-2 border-outline-variant font-bold text-[17px] flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[24px] text-primary">download</span>
            <span>{t.formDownloadTxtCta}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={() => setCurrentScreen('checklist')}
          className="w-full min-h-[64px] px-6 rounded-2xl bg-primary text-on-primary font-bold text-[20px] flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[28px]">fact_check</span>
          <span>{t.formContinueChecklistCta}</span>
        </button>
      </div>
    </div>
  );
};
