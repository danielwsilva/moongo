import { moongoAPI } from 'services/apiConfig';
import { MeDtoRes } from 'services/dtos/MeDto';

export type Error = {
  response: {
    data: Record<string, Array<string>>;
  };
};

export const getMe = async () => {
  try {
    const { data } = await moongoAPI.get<MeDtoRes>('/me');
    return data;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.message;
  }
};
