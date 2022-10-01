export type Success = {
  success: string[];
};

export type Error = {
  response: {
    data: Record<string, Array<string>>;
  };
};

export type VerifyRequest = {
  cpf: string;
  email: string;
  phone: string;
  company: string;
};

export type CepResponse = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: unknown;
};
