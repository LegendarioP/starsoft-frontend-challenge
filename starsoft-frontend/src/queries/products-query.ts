import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/products"
import { ProductFilters, ProductListResponse } from "../types/product"

export const useProductList = (filters: ProductFilters) => {
  return useQuery<ProductListResponse>({
    queryKey: ['products', filters],
    queryFn: () => getProducts(filters),
    staleTime: 1000 * 60 * 2,
  })
}