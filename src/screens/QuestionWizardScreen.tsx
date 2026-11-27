import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS, QUESTIONS } from '../config/content';
import { VoiceInput } from '../components/VoiceInput';
import { HearAgainButton } from '../components/HearAgainButton';
import { mapSpeechToOption } from '../engine/speechMatcher';
import type { UserAnswers } from '../types';

interface QuestionWizardProps {
  questionIndex: number;
}

export const QuestionWizardScreen: React.FC<QuestionWizardProps> = ({ questionIndex }) => {
  const { language, answers, updateAnswer, setCurrentScreen, autoSpeak, voice } = useApp();
  const { speak } = voice;
  const t = UI_TRANSLATIONS[language];

  const totalQuestions = QUESTIONS.length;
  const question = QUESTIONS[questionIndex];

  const [showExactAgeInput, setShowExactAgeInput] = useState(false);
  const [exactAgeVal, setExactAgeVal] = useState<string>(answers.age ? String(answers.age) : '');
  const [voiceMismatch, setVoiceMismatch] = useState(false);

  const speechText = question ? `${question.title[language]}. ${question.speechPrompt[language]}` : '';

  useEffect(() => {
    if (autoSpeak && speechText) {
      speak(speechText);
    }
  }, [questionIndex, language, autoSpeak, speechText, speak]);

  if (!question) {
    return <div>Question not found</div>;
  }

  const currentAnswerField = question.id as keyof UserAnswers;
  const selectedValue =
    question.id === 'age'
      ? answers.ageRange || (answers.age ? 'exact' : '')
      : (answers[currentAnswerField] as string) || '';

  const proceedToNext = () => {
    setVoiceMismatch(false);
    if (questionIndex + 1 < totalQuestions) {
      const nextQ = QUESTIONS[questionIndex + 1];
      setCurrentScreen(`question_${nextQ.id}` as any);
    } else {
      setCurrentScreen('results');
    }
  };

  const handleSelectOption = (value: string) => {
    if (question.id === 'age') {
      updateAnswer('ageRange', value);
      if (value === 'under_57') updateAnswer('age', 50);
      else if (value === '57_64') updateAnswer('age', 60);
      else if (value === '65_79') updateAnswer('age', 70);
      else if (value === '80_plus') updateAnswer('age', 85);
    } else {
      updateAnswer(currentAnswerField, value);
    }

    proceedToNext();
  };

  const handleExactAgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(exactAgeVal, 10);
    if (!isNaN(num) && num > 0 && num < 125) {
      updateAnswer('age', num);
      if (num < 57) updateAnswer('ageRange', 'under_57');
      else if (num <= 64) updateAnswer('ageRange', '57_64');
      else if (num <= 79) updateAnswer('ageRange', '65_79');
      else updateAnswer('ageRange', '80_plus');

      proceedToNext();
    }
  };

  const handleVoiceAnswer = (transcript: string) => {
    const matchedVal = mapSpeechToOption(transcript, question.options, language);
    if (matchedVal) {
      handleSelectOption(matchedVal);
    } else {
      setVoiceMismatch(true);
    }
  };

  return (
    <div className="flex flex-col gap-5 py-3 animate-fadeIn">
      {/* Step Progress Dots */}
      <div className="flex items-center justify-between bg-surface-container-low rounded-full px-4 py-2.5 shadow-sm border border-surface-container-high">
        <span className="text-[16px] font-bold text-on-surface-variant">
          {t.stepOf(questionIndex + 1, totalQuestions)}
        </span>
        <div
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={totalQuestions}
          aria-valuenow={questionIndex + 1}
          aria-label={`Progress step ${questionIndex + 1} of ${totalQuestions}`}
          className="flex items-center gap-2"
        >
          {QUESTIONS.map((_, idx) => (
            <span
              key={idx}
              className={`rounded-full transition-all duration-300 ${
                idx === questionIndex
                  ? 'w-7 h-4 bg-primary shadow-sm'
                  : idx < questionIndex
                  ? 'w-4 h-4 bg-secondary'
                  : 'w-4 h-4 bg-surface-container-highest'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question Header & Speech */}
      <div className="flex flex-col items-start gap-3 bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 text-left">
        <h1 className="font-bold text-[26px] sm:text-[30px] text-on-surface leading-snug">
          {question.title[language]}
        </h1>
        <p className="text-[18px] text-on-surface-variant">
          {question.speechPrompt[language]}
        </p>
        <HearAgainButton textToSpeak={speechText} />
      </div>

      {/* Voice Recognition section for this question */}
      <div className="py-1 flex flex-col gap-2">
        <VoiceInput
          onTranscriptSubmitted={handleVoiceAnswer}
          showTranscriptInput={true}
        />
        {voiceMismatch && (
          <div className="w-full p-3 rounded-xl bg-primary-fixed/60 text-on-primary-fixed flex items-center gap-2 text-left" role="alert">
            <span className="material-symbols-outlined text-[24px] shrink-0">info</span>
            <p className="text-[16px] font-medium">{t.voiceNoMatch}</p>
          </div>
        )}
      </div>

      {/* Tap Answer Cards */}
      <div
        role="radiogroup"
        aria-label={question.title[language]}
        className="flex flex-col gap-3"
      >
        {question.options.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelectOption(option.value)}
              className={`w-full min-h-[72px] px-4 py-3 rounded-2xl shadow-sm flex items-center justify-between gap-3 text-left transition-all active:scale-[0.98] border-2 ${
                isSelected
                  ? 'bg-primary-fixed border-primary text-on-primary-fixed ring-2 ring-primary'
                  : 'bg-surface-container-lowest border-surface-container-high hover:border-outline text-on-surface'
              }`}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected
                      ? 'bg-primary text-on-primary'
                      : 'bg-secondary-container text-on-secondary-container'
                  }`}
                >
                  <span className="material-symbols-outlined text-[28px]">
                    {option.icon || 'arrow_forward'}
                  </span>
                </div>
                <span className="font-bold text-[20px] leading-tight">
                  {option.label[language]}
                </span>
              </div>
              <span
                className={`material-symbols-outlined text-[30px] shrink-0 ${
                  isSelected ? 'text-primary' : 'text-outline-variant'
                }`}
                style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
              >
                {isSelected ? 'check_circle' : 'radio_button_unchecked'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Exact Age Entry Toggle */}
      {question.id === 'age' && (
        <div className="mt-2 p-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => setShowExactAgeInput(!showExactAgeInput)}
            className="flex items-center justify-between text-secondary font-bold text-[18px] min-h-[48px]"
          >
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px]">pin</span>
              {t.exactAgeToggle}
            </span>
            <span className="material-symbols-outlined">
              {showExactAgeInput ? 'expand_less' : 'expand_more'}
            </span>
          </button>

          {showExactAgeInput && (
            <form onSubmit={handleExactAgeSubmit} className="flex gap-2 pt-2">
              <input
                type="number"
                min="18"
                max="120"
                value={exactAgeVal}
                onChange={(e) => setExactAgeVal(e.target.value)}
                placeholder={t.exactAgePlaceholder}
                className="flex-1 min-h-[56px] px-4 rounded-xl border border-outline bg-surface text-on-surface text-[22px] font-bold focus:outline-primary"
                aria-label="Enter exact age"
              />
              <button
                type="submit"
                className="min-h-[56px] px-6 rounded-xl bg-primary text-on-primary font-bold text-[18px] active:scale-95 transition-transform"
              >
                {t.confirm}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
