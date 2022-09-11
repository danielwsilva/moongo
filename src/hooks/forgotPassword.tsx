import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type ForgotContextData = {
  cpf: string;
  code: string;
  addCpf: (_cpf: string) => void;
  addCode: (_code: string) => void;
};

type PropsProvider = {
  children: ReactNode;
};

const ForgotContext = createContext<ForgotContextData>({} as ForgotContextData);

export function ForgotProvider({ children }: PropsProvider) {
  const [cpf, setCpf] = useState('');
  const [code, setCode] = useState('');

  const addCpf = useCallback((item: string) => setCpf(item), []);
  const addCode = useCallback((item: string) => setCode(item), []);

  return (
    <ForgotContext.Provider
      value={{
        cpf,
        code,
        addCpf,
        addCode
      }}
    >
      {children}
    </ForgotContext.Provider>
  );
}

export function useForgotPassword() {
  const context = useContext(ForgotContext);
  return context;
}
