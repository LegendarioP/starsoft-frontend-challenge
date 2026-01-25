export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}


export interface ProductFilters {
  page: number
  rows: number
  sortBy: "id" | "name" | "brand" | "price"
  orderBy: "ASC" | "DESC"
}



export interface ProductListResponse {
  products: Product[];
  count: number;
}