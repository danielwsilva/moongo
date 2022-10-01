import React, { createContext, useContext, useState, ReactNode } from 'react';

import { useLogin } from 'services/api/auth';
import { LoginDtoReq } from 'services/dtos/LoginDto';
import { authToken, saveString } from 'services/storage';
import { useCatch } from './catch';

interface AuthContextData {
  token: string;
  isLoading: boolean;
  signIn: (_data: LoginDtoReq) => void;
}
interface PropsProvider {
  children: ReactNode;
}
export interface CredentialProps {
  userName: string;
  passwordApp: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: PropsProvider) {
  const [token, setToken] = useState('');

  const { catchError } = useCatch();

  const { mutate, isLoading } = useLogin();

  const signIn = (credential: LoginDtoReq) => {
    mutate(credential, {
      onSuccess: async (data) => {
        setToken(data.token);
        await saveString(authToken, data.token);
      },
      onError(error) {
        catchError(error.response.data.errors);
      }
    });
  };

  return <AuthContext.Provider value={{ token, isLoading, signIn }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
