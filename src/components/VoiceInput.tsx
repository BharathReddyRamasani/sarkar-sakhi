import React from 'react';
import { useApp } from '../context/AppContext';
import { UI_TRANSLATIONS } from '../config/content';

interface VoiceInputProps {
  onTranscriptSubmitted?: (text: string) => void;
  showTranscriptInput?: boolean;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({
  onTranscriptSubmitted,
  showTranscriptInput = true
}) => {
  const { language, voice } = useApp();
  const t = UI_TRANSLATIONS[language];

  const handleToggleListening = () => {
    if (voice.isListening) {
      voice.stopListening();
    } else {
      voice.startListening((finalText) => {
        if (onTranscriptSubmitted && finalText) {
          onTranscriptSubmitted(finalText);
        }
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full py-2">
      {/* Voice notice / error alerts */}
      {voice.error === 'not-supported' && (
        <div className="w-full p-4 rounded-xl bg-surface-container-high border-l-4 border-primary flex items-start gap-3 text-left" role="alert">
          <span className="material-symbols-outlined text-primary text-[26px]">info</span>
          <p className="text-[17px] text-on-surface">{t.voiceNotSupported}</p>
        </div>
      )}

      {voice.error === 'permission-denied' && (
        <div className="w-full p-4 rounded-xl bg-error-container text-on-error-container flex items-start gap-3 text-left" role="alert">
          <span className="material-symbols-outlined text-[26px]">mic_off</span>
          <p className="text-[17px] font-medium">{t.voiceNoMic}</p>
        </div>
      )}

      {voice.error === 'no-speech' && (
        <div className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface-variant flex items-center gap-2" role="status">
          <span className="material-symbols-outlined text-[24px]">help</span>
          <p className="text-[16px]">{t.voiceNoMatch}</p>
        </div>
      )}

      {!voice.hasLocalVoice && language === 'te' && (
        <div className="w-full p-3 rounded-xl bg-primary-fixed text-on-primary-fixed text-[15px] flex items-center gap-2">
          <span className="material-symbols-outlined text-[22px]">volume_off</span>
          <span>{t.voiceNoTeluguVoice}</span>
        </div>
      )}

      {/* Pulsing Concentric Mic Button */}
      <div className="relative flex items-center justify-center my-3">
        {voice.isListening && (
          <>
            <span
              className="absolute w-52 h-52 rounded-full bg-primary/20 animate-ping"
              style={{ animationDuration: '1.8s' }}
            />
            <span
              className="absolute w-44 h-44 rounded-full bg-primary/30 animate-pulse"
            />
          </>
        )}

        <button
          type="button"
          onClick={handleToggleListening}
          aria-label={voice.isListening ? t.listening : t.tapToSpeak}
          aria-pressed={voice.isListening}
          className={`relative w-36 h-36 min-h-[56px] min-w-[56px] rounded-full shadow-2xl flex flex-col items-center justify-center gap-1.5 transition-transform active:scale-95 focus-visible:outline-secondary px-2 ${
            voice.isListening
              ? 'bg-error text-on-error ring-8 ring-error/30'
              : 'bg-primary text-on-primary hover:bg-primary-container'
          }`}
        >
          <span
            className="material-symbols-outlined text-[54px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            mic
          </span>
          <span className="text-[17px] font-bold tracking-wide leading-tight text-center">
            {voice.isListening ? t.listening : t.tapToSpeak}
          </span>
        </button>
      </div>

      {/* Editable Transcript Field */}
      {showTranscriptInput && (voice.transcript || voice.isListening) && (
        <div className="w-full flex flex-col gap-2 p-3 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/50 text-left animate-fadeIn">
          <label htmlFor="voice-transcript-input" className="text-[15px] font-semibold text-secondary flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[20px]">edit_note</span>
            {t.transcriptLabel}
          </label>
          <div className="flex gap-2">
            <input
              id="voice-transcript-input"
              type="text"
              value={voice.transcript}
              onChange={(e) => voice.setTranscript(e.target.value)}
              placeholder={t.transcriptPlaceholder}
              className="flex-1 min-h-[52px] px-3 rounded-lg border border-outline-variant bg-surface text-on-surface text-[18px] focus:outline-primary"
            />
            {onTranscriptSubmitted && voice.transcript && (
              <button
                type="button"
                onClick={() => onTranscriptSubmitted(voice.transcript)}
                className="min-h-[52px] px-4 rounded-lg bg-primary text-on-primary font-bold text-[16px] active:scale-95 transition-transform shrink-0"
              >
                {t.confirm}
              </button>
            )}
          </div>
          <span className="text-[13px] text-on-surface-variant">
            {t.transcriptEditPrompt}
          </span>
        </div>
      )}
    </div>
  );
};
