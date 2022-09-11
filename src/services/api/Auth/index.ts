import { moongoAPI } from 'services/apiConfig';
import { ForgotCpfDtoReq, ForgotPasswordDtoReq } from 'services/dtos/ForgotPassword';
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

export const getForgotCpf = async (cpf: ForgotCpfDtoReq) => {
  try {
    await moongoAPI.post(`/reset/password`, cpf);
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};

export const getForgotCode = async (code: string) => {
  try {
    await moongoAPI.get(`verify/token/password`, { params: code });
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};

export const postForgotPassword = async (user: ForgotPasswordDtoReq) => {
  try {
    await moongoAPI.post<ForgotPasswordDtoReq>(`/new/password`, user);
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};
