import { moongoAPI } from 'services/apiConfig';
import { MeDtoRes } from 'services/dtos/MeDto';
import { Error } from 'utils/types';

export const getMe = async () => {
  try {
    const { data } = await moongoAPI.get<MeDtoRes>('/me');
    return data;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.message;
  }
};
