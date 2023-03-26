import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsLetter from './index';

describe('Newsletter Component', () => {
  test('renders the newsletter correctly', () => {
    render(<NewsLetter />);
    const heading = screen.getByText(/Assine nossa Newsletter!/i);
    expect(heading).toBeInTheDocument();
    const paragraph = screen.getByText(/Receba conteúdos/i);
    expect(paragraph).toBeInTheDocument();
    const input = screen.getByPlaceholderText(/EMAIL/i);
    expect(input).toBeInTheDocument();
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('form submission works correctly', () => {
    render(<NewsLetter />);
    const input = screen.getByPlaceholderText(/EMAIL/i);
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/Olá, seu email, test@example.com, foi cadastrado com sucesso. Obrigado!/i)).toBeInTheDocument();
  });
});