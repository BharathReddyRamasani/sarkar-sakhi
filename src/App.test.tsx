import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { AppProvider } from './context/AppContext';

describe('App Smoke and Accessibility Test', () => {
  it('renders home screen with Telugu heading, voice button, and live start action', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    // Verify Title & Telugu greeting are present
    expect(screen.getByText('సర్కార్-సఖి')).toBeInTheDocument();
    expect(screen.getByText('నమస్తే! పింఛను గురించి అడగండి.')).toBeInTheDocument();

    // Verify accessible live voice & start buttons exist
    expect(screen.getByRole('button', { name: /మాట్లాడండి/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ప్రారంభించండి/i })).toBeInTheDocument();
  });
});
