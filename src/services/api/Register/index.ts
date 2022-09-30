import { useMutation } from '@tanstack/react-query';

import { UpdateMotoristRequest } from 'services/api/register/types';
import { moongoAPI } from 'services/apiConfig';
import { Error, Success } from '../types';

export const useUpdateMotorist = () => {
  return useMutation<Success, Error, UpdateMotoristRequest>((data) =>
    moongoAPI.post(`/create/motorist`, data).then((response) => response.data)
  );
};
