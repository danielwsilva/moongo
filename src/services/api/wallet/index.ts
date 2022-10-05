import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { moongoAPI } from 'services/apiConfig';

import { createBalance } from './keys';
import { BalanceResponse } from './types';

export const useBalance = (options?: UseQueryOptions<BalanceResponse>) => {
  return useQuery(
    createBalance(),
    (data) => moongoAPI.get<BalanceResponse>(`/balance-motorist`, data).then((response) => response.data),
    options
  );
};
