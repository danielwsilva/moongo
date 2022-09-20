import { moongoAPI } from 'services/apiConfig';
import { UpdateMotoristDtoReq } from 'services/dtos/UpdateMotoristDto';
import { Error } from 'utils/types';

export const postUpdateMotorist = async (motorist: UpdateMotoristDtoReq) => {
  try {
    const { data } = await moongoAPI.post<UpdateMotoristDtoReq>(`/update/motorist`, motorist);
    return data;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.message;
  }
};
