import { UserForm } from 'components/forms/FormUser';
import { moongoAPI } from 'services/apiConfig';
import { MotoristDtoReq, MotoristDtoRes } from 'services/dtos/MotoristDto';

export type Error = {
  response: {
    data: Record<string, Array<string>>;
  };
};

export const postMotorist = async (data: MotoristDtoReq) => {
  try {
    const { data: response } = await moongoAPI.post<MotoristDtoReq, MotoristDtoRes>(`/create/motorist`, data);
    return response;
  } catch (error) {
    const { response } = error as Error;
    throw response.data.message;
  }
};

export const getVerify = (data: UserForm) => moongoAPI.get(`/verify/profile`, { params: { ...data } });
