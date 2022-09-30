import { VerifyDtoReq } from 'services/dtos/VerifyDto';
import { cepAPI, moongoAPI } from '../apiConfig/index';
import { CepDtoRes } from '../dtos/CepDto';
import { Error } from './types';

export const getCep = (cep: string) => cepAPI.get<CepDtoRes>(`/${cep}/json`);

export const getVerify = async (user: VerifyDtoReq) => {
  try {
    await moongoAPI.get(`/verify/profile`, { params: { ...user } });
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};
