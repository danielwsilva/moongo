import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { MeResponse, ProductResponse, SupplyPendingResponse, SupplyRequest } from 'services/api/home/types';
import { moongoAPI } from 'services/apiConfig';
import { Success } from '../types';
import { createMe, createStock, createSupplyPending } from './keys';

export const useMe = () => {
  return useQuery(createMe(), (data) => moongoAPI.get<MeResponse>(`/me`, data).then((response) => response.data));
};

export const useStockMotorist = (options?: UseQueryOptions<ProductResponse[]>) => {
  return useQuery(
    createStock(),
    (data) => moongoAPI.get<ProductResponse[]>(`/stock/products/moongo`, data).then((response) => response.data),
    options
  );
};

export const useSupply = () => {
  return useMutation<Success, Error, SupplyRequest>((data) =>
    moongoAPI.post(`/stock-up/motorist`, data).then((response) => response.data)
  );
};

export const useSupplyPending = () => {
  return useQuery(createSupplyPending(), (data) =>
    moongoAPI.get<SupplyPendingResponse[]>(`/supply-pending`, data).then((response) => response.data)
  );
};
