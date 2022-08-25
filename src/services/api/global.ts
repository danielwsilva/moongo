import { cepAPI } from '../apiConfig/index';
import { CepResponse } from '../DTOS/CepDto';

export const getCep = (cep: string) => cepAPI.get<CepResponse>(`/${cep}/json`);
