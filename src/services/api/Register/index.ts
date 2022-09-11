import { UserForm } from 'components/forms/FormUser';
import { moongoAPI } from 'services/apiConfig';
import { MotoristDtoReq } from 'services/dtos/MotoristDto';
import { Error } from 'utils/types';

export const postMotorist = async (motorist: MotoristDtoReq) => {
  try {
    const { data } = await moongoAPI.post<MotoristDtoReq>(`/create/motorist`, motorist);
    return data;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.message;
  }
};

export const getVerify = async (user: UserForm) => {
  try {
    await moongoAPI.get(`/verify/profile`, { params: { ...user } });
  } catch (error) {
    const { response } = error as Error;
    throw response.data.errors;
  }
};
