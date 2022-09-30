import { useQuery } from '@tanstack/react-query';
import { MeResponse } from 'services/api/home/types';
import { moongoAPI } from 'services/apiConfig';
import { createMe } from './keys';

export const useMe = () => {
  return useQuery(createMe(), (data) => moongoAPI.get<MeResponse>(`/me`, data).then((response) => response.data));
};
