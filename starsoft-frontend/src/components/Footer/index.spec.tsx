import { renderWithProviders } from '@/tests/test-utils';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from './index';

describe('Footer', () => {
  it('renderiza o componente', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/STARSOFT © TODOS OS DIREITOS RESERVADOS/i)).toBeInTheDocument();
  });

  it('renderiza como elemento footer', () => {
    const { container } = renderWithProviders(<Footer />);

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('exibe o texto de copyright', () => {
    renderWithProviders(<Footer />);

    expect(screen.getByText(/STARSOFT/i)).toBeInTheDocument();
    expect(screen.getByText(/TODOS OS DIREITOS RESERVADOS/i)).toBeInTheDocument();
  });
});
