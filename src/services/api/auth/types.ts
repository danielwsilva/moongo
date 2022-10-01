export type LoginRequest = {
  cpf: string;
  password: string;
  device_name: string;
};

export type LoginResponse = {
  token: string;
};

export type ForgotCpfRequest = {
  cpf: string;
};

export type ForgotCodeRequest = {
  token: string;
};

export type ForgotPasswordRequest = {
  password: string;
  cpf: string;
  code: string;
};
