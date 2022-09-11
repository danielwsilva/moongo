export type ForgotCpfDtoReq = {
  cpf: string;
};

export type ForgotCodeDtoReq = {
  token: string;
};

export type ForgotPasswordDtoReq = {
  password: string;
  cpf: string;
  code: string;
};
