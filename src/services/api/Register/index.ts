import { useMutation } from '@tanstack/react-query';

import { MotoristRequest } from 'services/api/register/types';
import { moongoAPI } from 'services/apiConfig';
import { Error, Success } from '../types';

export const useCreateMotorist = () => {
  return useMutation<Success, Error, MotoristRequest>((data) =>
    moongoAPI.post(`/create/motorist`, data).then((response) => response.data)
  );
};

export const useUpdateMotorist = () => {
  return useMutation<Success, Error, MotoristRequest>((data) =>
    moongoAPI.post(`/update/motorist`, data).then((response) => response.data)
  );
};
