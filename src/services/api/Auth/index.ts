import { moongoAPI } from 'services/apiConfig';
import { LoginDtoReq, LoginDtoRes } from 'services/dtos/LoginDto';

export type Error = {
  response: {
    data: Record<string, Array<string>>;
  };
};

export const postLogin = async (data: LoginDtoReq) => {
  try {
    const { data: response } = await moongoAPI.post<LoginDtoReq, LoginDtoRes>(`/login`, data);
    return response;
  } catch (error) {
    const { response } = error as Error;
    throw response.data;
  }
};
