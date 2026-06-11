// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoFuse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoFuse/i);
    expect(titleElement).toBeInTheDocument();
});
