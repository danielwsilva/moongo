import { CepResponse } from '../DTOS/CepDto';
import { cepAPI } from '../apiConfig/index';

export const getCep = (cep: string) => cepAPI.get<CepResponse>(`/${cep}/json`);
