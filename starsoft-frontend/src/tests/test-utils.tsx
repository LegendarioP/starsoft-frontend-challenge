import cartReducer from '@/store/slices/cartSlice';
import { theme } from '@/styles/theme';
import { configureStore } from '@reduxjs/toolkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

export function createMockStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState,
  });
}

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

interface AllTheProvidersProps {
  children: ReactNode;
  store?: ReturnType<typeof createMockStore>;
}

function AllTheProviders({ children, store = createMockStore() }: AllTheProvidersProps) {
  const queryClient = createTestQueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  preloadedState?: any;
  store?: ReturnType<typeof createMockStore>;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = createMockStore(preloadedState),
    ...renderOptions
  }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <AllTheProviders store={store}>{children}</AllTheProviders>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Mock data para testes
export const mockProduct = {
  id: 1,
  name: 'Test NFT',
  description: 'Test Description',
  price: '0.05',
  image: '/test-image.jpg',
  createdAt: '2026-01-27T00:00:00.000Z',
};

export const mockCartItem = {
  id: 1,
  name: 'Test NFT',
  description: 'Test Description',
  price: '0.05',
  image: '/test-image.jpg',
  createdAt: '2026-01-27T00:00:00.000Z',
  quantity: 1,
};
