import { useMutation } from '@tanstack/react-query';

import { moongoAPI } from 'services/apiConfig';
import { Success, Error } from '../types';
import { ForgotCodeRequest, ForgotCpfRequest, ForgotPasswordRequest, LoginRequest, LoginResponse } from './types';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>((data) =>
    moongoAPI.post(`/login`, data).then((response) => response.data)
  );
};

export const useForgotCpf = () => {
  return useMutation<Success, Error, ForgotCpfRequest>((data) =>
    moongoAPI.post(`/reset/password`, data).then((response) => response.data)
  );
};

export const useForgotCode = () => {
  return useMutation<Success, Error, ForgotCodeRequest>((data) =>
    moongoAPI.get(`/verify/token/password`, { params: data }).then((response) => response.data)
  );
};

export const useForgotPassword = () => {
  return useMutation<Success, Error, ForgotPasswordRequest>((data) =>
    moongoAPI.post(`/new/password`, data).then((response) => response.data)
  );
};
