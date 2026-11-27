import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { AppProvider } from './context/AppContext';

describe('App Smoke and Accessibility Test', () => {
  it('renders home screen with Telugu heading and voice button by default', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    // Verify Title & Telugu greeting are present
    expect(screen.getByText('సర్కార్-సఖి')).toBeInTheDocument();
    expect(screen.getByText('నమస్తే! పింఛన్ల గురించి అడగండి.')).toBeInTheDocument();

    // Verify accessible action buttons exist
    expect(screen.getByRole('button', { name: /మాట్లాడండి/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /డెమో చూడండి/i })).toBeInTheDocument();
  });
});
