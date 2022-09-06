import { moongoAPI } from 'services/apiConfig';
import { MotoristDtoReq, MotoristDtoRes } from 'services/dtos/RegisterDto';

export const postMotorist = async (data: MotoristDtoReq) => {
  return moongoAPI.post<MotoristDtoReq, MotoristDtoRes>(`/create/motorist`, data);
};
