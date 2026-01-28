import { mockCartItem, renderWithProviders } from '@/tests/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductCheckout from './index';

describe('ProductCheckout', () => {
  it('renderiza o item do carrinho corretamente', () => {
    renderWithProviders(<ProductCheckout item={mockCartItem} />);

    expect(screen.getByText(mockCartItem.name)).toBeInTheDocument();
    expect(screen.getByText(mockCartItem.description)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockCartItem.quantity.toString())).toBeInTheDocument();
  });

  it('exibe a imagem do produto', () => {
    renderWithProviders(<ProductCheckout item={mockCartItem} />);

    const image = screen.getByAltText(mockCartItem.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockCartItem.image);
  });

  it('incrementa a quantidade ao clicar no botão +', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(
      <ProductCheckout item={mockCartItem} />,
      { preloadedState }
    );

    const incrementButton = screen.getByRole('button', { name: `Aumentar quantidade de ${mockCartItem.name}` });
    fireEvent.click(incrementButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockCartItem.id);
    expect(item?.quantity).toBe(2);
  });

  it('decrementa a quantidade ao clicar no botão -', () => {
    const itemWithQuantity = { ...mockCartItem, quantity: 3 };
    const preloadedState = {
      cart: {
        items: [itemWithQuantity],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(
      <ProductCheckout item={itemWithQuantity} />,
      { preloadedState }
    );

    const decrementButton = screen.getByRole('button', { name: `Diminuir quantidade de ${itemWithQuantity.name}` });
    fireEvent.click(decrementButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === itemWithQuantity.id);
    expect(item?.quantity).toBe(2);
  });

  it('não decrementa a quantidade abaixo de 1', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(
      <ProductCheckout item={mockCartItem} />,
      { preloadedState }
    );

    const decrementButton = screen.getByRole('button', { name: `Diminuir quantidade de ${mockCartItem.name}` });
    fireEvent.click(decrementButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockCartItem.id);
    expect(item?.quantity).toBe(1);
  });

  it('remove o item ao clicar no botão de remover', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(
      <ProductCheckout item={mockCartItem} />,
      { preloadedState }
    );

    const removeButton = screen.getByRole('button', { name: `Remover ${mockCartItem.name} do carrinho` });
    fireEvent.click(removeButton);

    const state = store.getState();
    expect(state.cart.items).toHaveLength(0);
  });

  it('exibe o input de quantidade como readonly', () => {
    renderWithProviders(<ProductCheckout item={mockCartItem} />);

    const quantityInput = screen.getByDisplayValue(mockCartItem.quantity.toString()) as HTMLInputElement;
    expect(quantityInput).toHaveAttribute('readonly');
  });

  it('tem aria-labels apropriados para acessibilidade', () => {
    renderWithProviders(<ProductCheckout item={mockCartItem} />);

    expect(screen.getByRole('button', { name: `Aumentar quantidade de ${mockCartItem.name}` })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: `Diminuir quantidade de ${mockCartItem.name}` })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: `Remover ${mockCartItem.name} do carrinho` })).toBeInTheDocument();
    expect(screen.getByLabelText(`Quantidade: ${mockCartItem.quantity}`)).toBeInTheDocument();
  });

  it('atualiza a quantidade corretamente após múltiplas interações', () => {
    const preloadedState = {
      cart: {
        items: [mockCartItem],
        isOpen: true,
      },
    };

    const { store } = renderWithProviders(
      <ProductCheckout item={mockCartItem} />,
      { preloadedState }
    );

    const incrementButton = screen.getByRole('button', { name: `Aumentar quantidade de ${mockCartItem.name}` });
    const decrementButton = screen.getByRole('button', { name: `Diminuir quantidade de ${mockCartItem.name}` });

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    let state = store.getState();
    let item = state.cart.items.find((i) => i.id === mockCartItem.id);
    expect(item?.quantity).toBe(4);

    fireEvent.click(decrementButton);
    fireEvent.click(decrementButton);

    state = store.getState();
    item = state.cart.items.find((i) => i.id === mockCartItem.id);
    expect(item?.quantity).toBe(2);
  });
});
