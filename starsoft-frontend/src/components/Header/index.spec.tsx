import { mockCartItem, renderWithProviders } from '@/tests/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './index';

describe('Header', () => {
  it('renderiza o logo da marca', () => {
    renderWithProviders(<Header />);

    const logo = screen.getByAltText('Starsoft brand');
    expect(logo).toBeInTheDocument();
  });

  it('renderiza o botão do carrinho', () => {
    renderWithProviders(<Header />);

    const cartButton = screen.getByRole('button', { name: /carrinho de compras/i });
    expect(cartButton).toBeInTheDocument();
  });

  it('não exibe contador quando o carrinho está vazio', () => {
    renderWithProviders(<Header />);

    const cartButton = screen.getByRole('button', { name: /0 itens no carrinho/i });
    expect(cartButton).toBeInTheDocument();
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });

  it('exibe o contador correto quando há itens no carrinho', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: false,
      },
    };

    renderWithProviders(<Header />, { preloadedState });

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /1 item no carrinho/i })).toBeInTheDocument();
  });

  it('exibe o contador correto com múltiplos itens', () => {
    const preloadedState = {
      cart: {
        items: [
          { ...mockCartItem, id: 1, quantity: 2 },
          { ...mockCartItem, id: 2, quantity: 1 },
        ],
        isOpen: false,
      },
    };

    renderWithProviders(<Header />, { preloadedState });

    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /3 itens no carrinho/i })).toBeInTheDocument();
  });

  it('abre o carrinho ao clicar no botão', () => {
    const { store } = renderWithProviders(<Header />);

    const cartButton = screen.getByRole('button', { name: /carrinho de compras/i });
    fireEvent.click(cartButton);

    const state = store.getState();
    expect(state.cart.isOpen).toBe(true);
  });

  it('tem aria-label descritivo para acessibilidade', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: false,
      },
    };

    renderWithProviders(<Header />, { preloadedState });

    const cartButton = screen.getByRole('button', { name: 'Abrir carrinho de compras. 1 item no carrinho' });
    expect(cartButton).toBeInTheDocument();
  });
});
