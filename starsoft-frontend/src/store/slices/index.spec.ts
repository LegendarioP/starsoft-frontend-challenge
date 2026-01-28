import { mockProduct } from '@/tests/test-utils';
import { describe, expect, it } from 'vitest';
import cartReducer, {
  addToCart,
  CartItem,
  clearCart,
  closeCart,
  decrementQuantity,
  incrementQuantity,
  openCart,
  removeFromCart,
  toggleCart,
} from './cartSlice';

describe('cartSlice', () => {
  const initialState = {
    items: [] as CartItem[],
    isOpen: false,
  };

  describe('addToCart', () => {
    it('adiciona um novo produto ao carrinho', () => {
      const state = cartReducer(initialState, addToCart(mockProduct));

      expect(state.items).toHaveLength(1);
      expect(state.items[0]).toEqual({ ...mockProduct, quantity: 1 });
    });

    it('incrementa a quantidade se o produto já existe no carrinho', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, addToCart(mockProduct));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].quantity).toBe(2);
    });

    it('adiciona múltiplos produtos diferentes', () => {
      const product2 = { ...mockProduct, id: 2, name: 'Product 2' };

      let state = cartReducer(initialState, addToCart(mockProduct));
      state = cartReducer(state, addToCart(product2));

      expect(state.items).toHaveLength(2);
      expect(state.items[0].id).toBe(1);
      expect(state.items[1].id).toBe(2);
    });
  });

  describe('removeFromCart', () => {
    it('remove um produto do carrinho pelo id', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, removeFromCart(mockProduct.id));

      expect(state.items).toHaveLength(0);
    });

    it('remove apenas o produto correto quando há múltiplos itens', () => {
      const product2 = { ...mockProduct, id: 2, name: 'Product 2', quantity: 1 };
      const stateWithItems = {
        items: [
          { ...mockProduct, quantity: 1 },
          product2,
        ],
        isOpen: false,
      };

      const state = cartReducer(stateWithItems, removeFromCart(1));

      expect(state.items).toHaveLength(1);
      expect(state.items[0].id).toBe(2);
    });

    it('não altera o estado se o produto não existe', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, removeFromCart(999));

      expect(state.items).toHaveLength(1);
    });
  });

  describe('incrementQuantity', () => {
    it('incrementa a quantidade do produto', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, incrementQuantity(mockProduct.id));

      expect(state.items[0].quantity).toBe(2);
    });

    it('não faz nada se o produto não existe', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, incrementQuantity(999));

      expect(state.items[0].quantity).toBe(1);
    });
  });

  describe('decrementQuantity', () => {
    it('decrementa a quantidade do produto', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 3 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, decrementQuantity(mockProduct.id));

      expect(state.items[0].quantity).toBe(2);
    });

    it('não decrementa abaixo de 1', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 1 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, decrementQuantity(mockProduct.id));

      expect(state.items[0].quantity).toBe(1);
    });

    it('não faz nada se o produto não existe', () => {
      const stateWithItem = {
        items: [{ ...mockProduct, quantity: 2 }],
        isOpen: false,
      };

      const state = cartReducer(stateWithItem, decrementQuantity(999));

      expect(state.items[0].quantity).toBe(2);
    });
  });

  describe('clearCart', () => {
    it('remove todos os itens do carrinho', () => {
      const stateWithItems = {
        items: [
          { ...mockProduct, quantity: 1 },
          { ...mockProduct, id: 2, quantity: 2 },
        ],
        isOpen: false,
      };

      const state = cartReducer(stateWithItems, clearCart());

      expect(state.items).toHaveLength(0);
    });
  });

  describe('cart open/close', () => {
    it('abre o carrinho', () => {
      const state = cartReducer(initialState, openCart());

      expect(state.isOpen).toBe(true);
    });

    it('fecha o carrinho', () => {
      const openState = { items: [], isOpen: true };
      const state = cartReducer(openState, closeCart());

      expect(state.isOpen).toBe(false);
    });

    it('alterna o estado do carrinho', () => {
      let state = cartReducer(initialState, toggleCart());
      expect(state.isOpen).toBe(true);

      state = cartReducer(state, toggleCart());
      expect(state.isOpen).toBe(false);
    });
  });

  describe('cenários complexos', () => {
    it('gerencia múltiplas operações em sequência', () => {
      let state = initialState;

      state = cartReducer(state, addToCart(mockProduct));
      expect(state.items).toHaveLength(1);

      state = cartReducer(state, incrementQuantity(mockProduct.id));
      expect(state.items[0].quantity).toBe(2);

      state = cartReducer(state, decrementQuantity(mockProduct.id));
      expect(state.items[0].quantity).toBe(1);

      state = cartReducer(state, openCart());
      expect(state.isOpen).toBe(true);

      state = cartReducer(state, removeFromCart(mockProduct.id));
      expect(state.items).toHaveLength(0);
    });
  });
});
