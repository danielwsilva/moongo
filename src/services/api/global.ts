import { useMutation } from '@tanstack/react-query';

import { cepAPI, moongoAPI } from '../apiConfig/index';
import { CepResponse, Error, Success, VerifyRequest } from './types';

export const getCep = (cep: string) => cepAPI.get<CepResponse>(`/${cep}/json`);

export const useVerify = () => {
  return useMutation<Success, Error, VerifyRequest>((data) =>
    moongoAPI.get(`/verify/profile`, { params: { ...data } }).then((response) => response.data)
  );
};
