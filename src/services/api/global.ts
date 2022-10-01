import { useMutation } from '@tanstack/react-query';

import { cepAPI, moongoAPI } from '../apiConfig/index';
import { CepDtoRes } from '../dtos/CepDto';
import { Error, Success, VerifyRequest } from './types';

export const getCep = (cep: string) => cepAPI.get<CepDtoRes>(`/${cep}/json`);

export const useVerify = () => {
  return useMutation<Success, Error, VerifyRequest>((data) =>
    moongoAPI.get(`/verify/profile`, { params: { ...data } }).then((response) => response.data)
  );
};
