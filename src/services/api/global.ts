import { cepAPI } from '../apiConfig/index';
import { CepDtoRes } from '../dtos/CepDto';

export const getCep = (cep: string) => cepAPI.get<CepDtoRes>(`/${cep}/json`);
