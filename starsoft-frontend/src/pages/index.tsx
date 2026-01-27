import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { getProducts } from "@/services/products";
import {
  LoadMoreButton,
  Main,
  PaginationContainer,
  PaginationContent,
  ProductGrid,
  ProgressBar,
  ProgressBarContainer
} from "@/styles/pages/home.styles";
import { ProductFilters, ProductListResponse } from "@/types/product";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface HomeProps {
  initialData: ProductListResponse;
}

export default function Home({ initialData }: HomeProps) {
  const [allProducts, setAllProducts] = useState(initialData.products);

  const {
    products,
    paginationPercent,
    loadMore,
    hasMore,
    isLoadingMore
  } = useProducts();

  useEffect(() => {
    if (products.length > 0) {
      setAllProducts(products);
    }
  }, [products]);

  const displayProducts = products.length > 0 ? products : allProducts;

  return (
    <Main>
      <ProductGrid>
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.description}
            price={parseFloat(product.price)}
            imageUrl={product.image}
            createdAt={product.createdAt}
          />
        ))}
      </ProductGrid>

      <PaginationContainer>
        <PaginationContent>
          <ProgressBarContainer>
            <ProgressBar
              initial={{ width: "0%" }}
              animate={{ width: `${paginationPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </ProgressBarContainer>

          <LoadMoreButton
            onClick={() => loadMore()}
            disabled={isLoadingMore || !hasMore}
            aria-label={hasMore ? (isLoadingMore ? 'Carregando mais produtos' : 'Carregar mais produtos') : 'Todos os produtos foram carregados'}
            aria-busy={isLoadingMore}
          >
            {hasMore ? isLoadingMore ? 'Carregando...' : 'Carregar mais' : "Você ja viu tudo"}
          </LoadMoreButton>
        </PaginationContent>
      </PaginationContainer>
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const filters: ProductFilters = {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  };

  try {
    const data = await getProducts(filters);

    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch products:", error);

    return {
      props: {
        initialData: {
          products: [],
          count: 0,
        },
      },
    };
  }
};
