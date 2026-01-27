import { useMemo } from "react";
import { useInfiniteProductList } from "../queries/products-query";
import { ProductFilters } from "../types/product";
import { useFilters } from "./useFilters";

export const useProducts = () => {
  const {
    filters,
    setFilter,
    setMany,
    reset,
  } = useFilters<Omit<ProductFilters, 'page'>>({
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  });

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteProductList(filters);

  const allProducts = useMemo(() => {
    return data?.pages.flatMap(page => page.products) ?? [];
  }, [data]);

  const totalCount = data?.pages[0]?.count ?? 0;

  const paginationPercent = totalCount > 0
    ? (allProducts.length / totalCount) * 100
    : 0;

  return {
    products: allProducts,
    totalCount,
    isLoading,
    isError,
    error,
    filters,
    setFilter,
    setMany,
    resetFilters: reset,
    paginationPercent,
    loadMore: fetchNextPage,
    hasMore: hasNextPage,
    isLoadingMore: isFetchingNextPage,
  }
}