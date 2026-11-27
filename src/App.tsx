import React from 'react';
import { useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeScreen } from './screens/HomeScreen';
import { IntentScreen } from './screens/IntentScreen';
import { QuestionWizardScreen } from './screens/QuestionWizardScreen';
import { ResultsScreen } from './screens/ResultsScreen';
import { ApplicationFormScreen } from './screens/ApplicationFormScreen';
import { ChecklistScreen } from './screens/ChecklistScreen';
import { NextStepsScreen } from './screens/NextStepsScreen';
import { AboutScreen } from './screens/AboutScreen';

export const AppContent: React.FC = () => {
  const { currentScreen } = useApp();

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
      case 'application_form':
        return <ApplicationFormScreen />;
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
