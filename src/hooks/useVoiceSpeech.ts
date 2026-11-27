import { useState, useEffect, useCallback, useRef } from 'react';
import { Language } from '../types';

export interface UseVoiceSpeechReturn {
  isSupported: boolean;
  isListening: boolean;
  transcript: string;
  setTranscript: (text: string) => void;
  error: 'none' | 'not-supported' | 'permission-denied' | 'no-speech' | 'network';
  startListening: () => void;
  stopListening: () => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
  isSpeaking: boolean;
  hasLocalVoice: boolean;
}

const getBcp47 = (lang: Language) => {
  switch (lang) {
    case 'te':
      return 'te-IN';
    case 'hi':
      return 'hi-IN';
    case 'en':
    default:
      return 'en-IN';
  }
};

export function useVoiceSpeech(language: Language): UseVoiceSpeechReturn {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<'none' | 'not-supported' | 'permission-denied' | 'no-speech' | 'network'>('none');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasLocalVoice, setHasLocalVoice] = useState(true);

  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Feature detection
  const isSpeechRecognitionSupported = typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;

      const checkVoices = () => {
        if (!synthRef.current) return;
        const voices = synthRef.current.getVoices();
        if (language === 'te') {
          const teVoice = voices.some(v => v.lang.includes('te') || v.lang.toLowerCase().includes('telugu'));
          setHasLocalVoice(teVoice || voices.length === 0);
        } else if (language === 'hi') {
          const hiVoice = voices.some(v => v.lang.includes('hi'));
          setHasLocalVoice(hiVoice || voices.length === 0);
        } else {
          setHasLocalVoice(true);
        }
      };

      checkVoices();
      synthRef.current.onvoiceschanged = checkVoices;
    }
  }, [language]);

  const stopSpeaking = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!synthRef.current || !text) return;

    // Clean text for speech (remove markdown symbols or brackets)
    const cleanText = text
      .replace(/[#*_~`[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    stopSpeaking();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = getBcp47(language);
    utterance.rate = 0.9; // Slightly slower for elderly comprehension
    utterance.pitch = 1.0;

    // Pick best matching voice if available
    const voices = synthRef.current.getVoices();
    const matchedVoice = voices.find(v => v.lang === getBcp47(language)) ||
                         voices.find(v => v.lang.startsWith(language));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    synthRef.current.speak(utterance);
  }, [language, stopSpeaking]);

  const startListening = useCallback(() => {
    if (!isSpeechRecognitionSupported) {
      setError('not-supported');
      return;
    }

    // Stop speaking before listening
    stopSpeaking();
    setError('none');

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;

      recognition.lang = getBcp47(language);
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let fullTranscript = '';
        for (let i = 0; i < event.results.length; ++i) {
          fullTranscript += event.results[i][0].transcript;
        }
        setTranscript(fullTranscript);
      };

      recognition.onerror = (event: any) => {
        setIsListening(false);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          setError('permission-denied');
        } else if (event.error === 'no-speech') {
          setError('no-speech');
        } else if (event.error !== 'aborted') {
          setError('network');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch {
      setIsListening(false);
      setError('permission-denied');
    }
  }, [isSpeechRecognitionSupported, language, stopSpeaking]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, []);

  return {
    isSupported: isSpeechRecognitionSupported,
    isListening,
    transcript,
    setTranscript,
    error,
    startListening,
    stopListening,
    speak,
    stopSpeaking,
    isSpeaking,
    hasLocalVoice
  };
}
