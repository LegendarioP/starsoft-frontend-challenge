import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/products"
import { ProductFilters, ProductListResponse } from "../types/product"

export const useProductList = (filters: ProductFilters) => {
  return useQuery<ProductListResponse>({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    staleTime: 1000 * 60 * 2,
  })
}

export const useInfiniteProductList = (filters: Omit<ProductFilters, 'page'>) => {
  return useInfiniteQuery<ProductListResponse, number>({
    queryKey: ['products', 'infinite', filters],
    queryFn: ({ pageParam }) => getProducts({ ...filters, page: pageParam as number }),
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = Math.ceil(lastPage.count / filters.rows);
      const nextPage = allPages.length + 1;
      return nextPage <= totalPages ? nextPage : undefined;
    },
    initialPageParam: 1,
    staleTime: 1000 * 60 * 2,
  })
}