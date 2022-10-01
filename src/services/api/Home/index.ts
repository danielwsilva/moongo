import { useQuery } from '@tanstack/react-query';

import { MeResponse, ProductResponse } from 'services/api/home/types';
import { moongoAPI } from 'services/apiConfig';
import { createMe, createStock } from './keys';

export const useMe = () => {
  return useQuery(createMe(), (data) => moongoAPI.get<MeResponse>(`/me`, data).then((response) => response.data));
};

export const useStockMotorist = () => {
  return useQuery(createStock(), (data) =>
    moongoAPI.get<ProductResponse[]>(`stock/products/moongo`, data).then((response) => response.data)
  );
};
