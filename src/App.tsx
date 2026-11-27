import React from 'react';
import { useApp } from './context/AppContext';
import { UI_TRANSLATIONS } from './config/content';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { IntentScreen } from './screens/IntentScreen';
import { QuestionWizardScreen } from './screens/QuestionWizardScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { ChecklistScreen } from './screens/ChecklistScreen';
import { NextStepsScreen } from './screens/NextStepsScreen';
import { AboutScreen } from './screens/AboutScreen';

export const AppContent: React.FC = () => {
  const { currentScreen, isDemoActive, demoMessage, language } = useApp();
  const t = UI_TRANSLATIONS[language];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen />;
      case 'intent':
        return <IntentScreen />;
      case 'question_age':
        return <QuestionWizardScreen questionIndex={0} />;
      case 'question_gender':
        return <QuestionWizardScreen questionIndex={1} />;
      case 'question_maritalStatus':
        return <QuestionWizardScreen questionIndex={2} />;
      case 'question_incomeBand':
        return <QuestionWizardScreen questionIndex={3} />;
      case 'question_receivingPension':
        return <QuestionWizardScreen questionIndex={4} />;
      case 'results':
        return <ResultsScreen />;
      case 'checklist':
        return <ChecklistScreen />;
      case 'next_steps':
        return <NextStepsScreen />;
      case 'about':
        return <AboutScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      <Header />
      <main className="flex-1 w-full max-w-xl mx-auto px-4 py-2 flex flex-col">
        {isDemoActive && currentScreen !== 'home' && (
          <div className="mt-2 p-3 bg-primary-fixed text-on-primary-fixed rounded-xl flex items-center gap-2 shadow-sm border border-primary/20" role="status">
            <span className="material-symbols-outlined text-[24px] shrink-0">smart_toy</span>
            <span className="text-[16px] font-bold">{demoMessage || t.demoSimulationNote}</span>
          </div>
        )}
        {renderScreen()}
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return <AppContent />;
};
export default App;
