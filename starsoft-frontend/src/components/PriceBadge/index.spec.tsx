import { renderWithProviders } from '@/tests/test-utils';
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import PriceBadge from './index';

describe('PriceBadge', () => {
  it('renderiza o componente com preço', () => {
    renderWithProviders(<PriceBadge price={0.05} />);

    expect(screen.getByText('0.05 ETH')).toBeInTheDocument();
  });

  it('exibe o ícone do Ethereum', () => {
    renderWithProviders(<PriceBadge price={0.05} />);

    const ethereumIcon = screen.getByAltText('Ethereum');
    expect(ethereumIcon).toBeInTheDocument();
  });

  it('formata preço com duas casas decimais', () => {
    renderWithProviders(<PriceBadge price={1.5} />);

    expect(screen.getByText('1.5 ETH')).toBeInTheDocument();
  });

  it('formata preço com múltiplas casas decimais', () => {
    renderWithProviders(<PriceBadge price={0.123456} />);

    expect(screen.getByText('0.123456 ETH')).toBeInTheDocument();
  });

  it('formata preço inteiro', () => {
    renderWithProviders(<PriceBadge price={5} />);

    expect(screen.getByText('5 ETH')).toBeInTheDocument();
  });

  it('formata preço zero', () => {
    renderWithProviders(<PriceBadge price={0} />);

    expect(screen.getByText('0 ETH')).toBeInTheDocument();
  });

  it('formata preços grandes', () => {
    renderWithProviders(<PriceBadge price={100.99} />);

    expect(screen.getByText('100.99 ETH')).toBeInTheDocument();
  });
});
