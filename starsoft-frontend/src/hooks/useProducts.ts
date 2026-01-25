import { useProductList } from "../queries/products-query";
import { ProductFilters } from "../types/product";

export const useProducts = () => {
  // const {
  //   filters,
  //   setFilter,
  //   setMany,
  //   reset,
  // } = useFilters<ProductFilters>({
  //   page: 1,
  //   rows: 10,
  //   sortBy: "id",
  //   orderBy: "ASC",
  // });

  const filters: ProductFilters = {
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "ASC",
  }



  const { data, isLoading, isError, error } = useProductList(filters);


  const paginationTotal = (data!.count / filters.rows) || 0;

  console.log(paginationTotal)


  return {
    data,
    isLoading,
    isError,
    error,
    // filters,
    // setFilter,
    // setMany,
    // resetFilters: reset,
    paginationTotal


  }





}