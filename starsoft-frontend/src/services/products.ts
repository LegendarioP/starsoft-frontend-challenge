import { backendURL } from "../lib/api";
import { ProductFilters, ProductListResponse } from "../types/product";

export const getProducts = async (filters: ProductFilters): Promise<ProductListResponse> => {
  const params = new URLSearchParams({
    page: filters.page.toString() || '1',
    rows: filters.rows.toString() || '10',
    sortBy: filters.sortBy || 'id',
    orderBy: filters.orderBy || 'ASC'
  });

  try {
    const response = await fetch(`${backendURL}/products?${params}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ProductListResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}