import { moongoAPI } from 'services/apiConfig';
import { LoginDtoReq, LoginDtoRes } from 'services/dtos/LoginDto';
import { Error } from 'utils/types';

export const postLogin = async (user: LoginDtoReq) => {
  try {
    const { data } = await moongoAPI.post<LoginDtoReq, LoginDtoRes>(`/login`, user);
    return data;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};
