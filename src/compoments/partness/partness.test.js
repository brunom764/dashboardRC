import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Partness from './index';

describe('Partness component', () => {
  it('renders all images', () => {
    render(<Partness />);
    const cinImg = screen.getByAltText('CIn');
    const cesarImg = screen.getByAltText('Cesar School');
    const hsbsImg = screen.getByAltText('HSBS');
    const microsoftImg = screen.getByAltText('Microsoft');
    const mouraImg = screen.getByAltText('Moura');
    const veroliImg = screen.getByAltText('Veroli');

    expect(cinImg).toBeInTheDocument();
    expect(cesarImg).toBeInTheDocument();
    expect(hsbsImg).toBeInTheDocument();
    expect(microsoftImg).toBeInTheDocument();
    expect(mouraImg).toBeInTheDocument();
    expect(veroliImg).toBeInTheDocument();
  });
});

