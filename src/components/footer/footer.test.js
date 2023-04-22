import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer', () => {
  test('renders the title correctly', () => {
    render(<Footer />);
    const titleElement = screen.getByText(/Fale conosco!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the email correctly', () => {
    render(<Footer />);
    const emailElement = screen.getByText(/robocin@cin.upfe.br/i);
    expect(emailElement).toBeInTheDocument();
  });


  test('renders the address correctly', () => {
    render(<Footer />);
    const addressElement = screen.getByText(/Av. Jornalista Aníbal Fernandes, s\/n -/i);
    const cityElement = screen.getByText(/Cidade Universitária, Recife- PE,/i);
    const cepElement = screen.getByText(/50740-560/i);
    const mapElement = screen.getByRole('link', { name: 'Ver no Mapa' });

    expect(addressElement).toBeInTheDocument();
    expect(cityElement).toBeInTheDocument();
    expect(cepElement).toBeInTheDocument();
    expect(mapElement.href).toBe('https://www.google.com/maps/dir//Centro+Integrado+de+Tecnologia+da+Informa%C3%A7%C3%A3o+(CITi+%2F+UFPE)/@-8.050605,-34.96446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7ab1be2128207d9:0xbfdac155456db9af!2m2!1d-34.9513319!2d-8.0553088?hl=pt-BR'
    )
  })
})