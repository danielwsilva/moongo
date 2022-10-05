import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ProductResponse } from 'services/api/home/types';
import { moongoAPI } from 'services/apiConfig';
import { createStockMotorist } from './keys';

export const useStockMotorist = (options?: UseQueryOptions<ProductResponse[]>) => {
  return useQuery(
    createStockMotorist(),
    (data) => moongoAPI.get<ProductResponse[]>(`/products/motorist`, data).then((response) => response.data),
    options
  );
};
