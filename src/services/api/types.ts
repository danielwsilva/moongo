export type Success = {
  success: string[];
};

export type Error = {
  response: {
    data: Record<string, Array<string>>;
  };
};
