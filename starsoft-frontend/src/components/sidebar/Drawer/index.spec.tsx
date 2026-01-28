import { mockCartItem, renderWithProviders } from '@/tests/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import SidebarDrawer from './index';

describe('Drawer (Carrinho Lateral)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('não renderiza quando isOpen é false', () => {
    renderWithProviders(<SidebarDrawer />);

    expect(screen.queryByText('Mochila de Compras')).not.toBeInTheDocument();
  });

  it('renderiza quando isOpen é true', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByText('Mochila de Compras')).toBeInTheDocument();
  });

  it('exibe mensagem quando o carrinho está vazio', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByText('Seu carrinho está vazio')).toBeInTheDocument();
  });

  it('exibe lista de itens quando há produtos no carrinho', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByText(mockCartItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockCartItem.description)).toBeInTheDocument();
  });

  it('calcula o total corretamente com um item', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    const prices = screen.getAllByText('0.05 ETH');
    expect(prices.length).toBeGreaterThan(0);
  });

  it('calcula o total corretamente com múltiplos itens', () => {
    const item1 = { ...mockCartItem, id: 1, price: '0.05', quantity: 2 };
    const item2 = { ...mockCartItem, id: 2, price: '0.03', quantity: 1 };

    const preloadedState = {
      cart: {
        items: [item1, item2],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByText('0.13 ETH')).toBeInTheDocument();
  });

  it('fecha o carrinho ao clicar no botão de fechar', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(<SidebarDrawer />, { preloadedState });

    const closeButton = screen.getByRole('button', { name: 'Fechar carrinho de compras' });
    fireEvent.click(closeButton);

    const state = store.getState();
    expect(state.cart.isOpen).toBe(false);
  });

  it('fecha o carrinho ao clicar no overlay', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    const { container, store } = renderWithProviders(<SidebarDrawer />, { preloadedState });

    const overlay = container.querySelector('[data-open="true"]');
    if (overlay) {
      fireEvent.click(overlay);

      const state = store.getState();
      expect(state.cart.isOpen).toBe(false);
    }
  });

  it('desabilita botão Finalizar Compra quando carrinho está vazio', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    const checkoutButton = screen.getByText('Finalizar Compra');
    expect(checkoutButton).toBeDisabled();
  });

  it('habilita botão Finalizar Compra quando há itens no carrinho', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    const checkoutButton = screen.getByText('Finalizar Compra');
    expect(checkoutButton).not.toBeDisabled();
  });

  it('tem aria-label descritivo no botão de fechar', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByRole('button', { name: 'Fechar carrinho de compras' })).toBeInTheDocument();
  });

  it('tem aria-label descritivo no botão Finalizar Compra quando vazio', () => {
    const preloadedState = {
      cart: {
        items: [],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    const checkoutButton = screen.getByRole('button', { name: /Carrinho vazio/i });
    expect(checkoutButton).toBeInTheDocument();
  });

  it('tem aria-label descritivo no botão Finalizar Compra com itens', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    const checkoutButton = screen.getByRole('button', { name: /Finalizar compra de 1 item/i });
    expect(checkoutButton).toBeInTheDocument();
  });

  it('exibe a lista de itens com role list', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    renderWithProviders(<SidebarDrawer />, { preloadedState });

    expect(screen.getByRole('list', { name: 'Itens no carrinho' })).toBeInTheDocument();
  });
});
