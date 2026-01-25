import { useState } from 'react';

type FilterValue = string | number | boolean | undefined;

export function useFilters<
  T extends { [K in keyof T]?: FilterValue }
>(initialState: T) {
  const [filters, setFilters] = useState<T>(initialState);

  function setFilter<K extends keyof T>(key: K, value: T[K]) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function setMany(next: Partial<T>) {
    setFilters((prev) => ({
      ...prev,
      ...next,
    }));
  }

  function reset() {
    setFilters(initialState);
  }

  return {
    filters,
    setFilter,
    setMany,
    reset,
  };
}