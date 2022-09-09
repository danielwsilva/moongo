export type LoginDtoReq = {
  cpf: string;
  password: string;
  device_name: string;
};

export type LoginDtoRes = {
  data: {
    token: string;
  };
};
