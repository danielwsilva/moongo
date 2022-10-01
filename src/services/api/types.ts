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
