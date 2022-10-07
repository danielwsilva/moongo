import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query';

import { moongoAPI } from 'services/apiConfig';
import { Error, Success } from '../types';

import { createBalance } from './keys';
import { BalanceResponse, CashWithdrawalRequest } from './types';

export const useBalance = (options?: UseQueryOptions<BalanceResponse>) => {
  return useQuery(
    createBalance(),
    (data) => moongoAPI.get<BalanceResponse>(`/balance-motorist`, data).then((response) => response.data),
    options
  );
};

export const useCashWithdrawal = () => {
  return useMutation<Success, Error, CashWithdrawalRequest>((data) =>
    moongoAPI.post(`/balance-withdrawal`, data).then((response) => response.data)
  );
};
