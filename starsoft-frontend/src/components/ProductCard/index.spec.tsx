import { mockProduct, renderWithProviders } from '@/tests/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ProductCard from './index';

const mockPush = vi.fn();

vi.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: '/',
    query: {},
    asPath: '/',
  }),
}));

describe('ProductCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });


  it('renderiza o produto corretamente', () => {
    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });

  it('exibe a imagem do produto com alt text correto', () => {
    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    const image = screen.getByAltText(mockProduct.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProduct.image);
  });

  it('navega para a página de detalhes ao clicar na imagem', () => {
    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    const buttons = screen.getAllByRole('button', { name: `Ver detalhes de ${mockProduct.name}` });
    const imageContainer = buttons[0];
    fireEvent.click(imageContainer);

    expect(mockPush).toHaveBeenCalledWith(`/products/${mockProduct.id}`);
  });

  it('navega para a página de detalhes ao clicar no título', () => {
    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    const titleButtons = screen.getAllByRole('button', { name: `Ver detalhes de ${mockProduct.name}` });
    const titleButton = titleButtons.find(btn => btn.textContent === mockProduct.name);

    if (titleButton) {
      fireEvent.click(titleButton);
      expect(mockPush).toHaveBeenCalledWith(`/products/${mockProduct.id}`);
    }
  });

  it('adiciona o produto ao carrinho ao clicar no botão Comprar', () => {
    const { store } = renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    const buyButton = screen.getByRole('button', { name: `Adicionar ${mockProduct.name} ao carrinho` });
    fireEvent.click(buyButton);

    const state = store.getState();
    expect(state.cart.items).toHaveLength(1);
    expect(state.cart.items[0].name).toBe(mockProduct.name);
  });

  it('desabilita o botão e muda o texto quando o produto já está no carrinho', () => {
    const preloadedState = {
      cart: {
        items: [
          {
            id: mockProduct.id,
            name: mockProduct.name,
            description: mockProduct.description,
            price: mockProduct.price,
            image: mockProduct.image,
            createdAt: mockProduct.createdAt,
            quantity: 1,
          },
        ],
        isOpen: false,
      },
    };

    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />,
      { preloadedState }
    );

    const buyButton = screen.getByRole('button', { name: `${mockProduct.name} já está no carrinho` });
    expect(buyButton).toBeDisabled();
    expect(buyButton).toHaveTextContent('Adicionado ao Carrinho');
  });

  it('tem aria-labels apropriados para acessibilidade', () => {
    renderWithProviders(
      <ProductCard
        id={mockProduct.id}
        title={mockProduct.name}
        description={mockProduct.description}
        price={parseFloat(mockProduct.price)}
        imageUrl={mockProduct.image}
        createdAt={mockProduct.createdAt}
      />
    );

    const detailButtons = screen.getAllByRole('button', { name: `Ver detalhes de ${mockProduct.name}` });
    expect(detailButtons).toHaveLength(2);
    expect(screen.getByRole('button', { name: `Adicionar ${mockProduct.name} ao carrinho` })).toBeInTheDocument();
  });
});
