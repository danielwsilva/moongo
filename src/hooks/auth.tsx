import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';

import { useLogin } from 'services/api/auth';
import { LoginRequest } from 'services/api/auth/types';
import { authToken, saveString, loadString, remove } from 'services/storage';
import { useCatch } from './catch';

interface AuthContextData {
  token: string;
  isLoading: boolean;
  signIn: (_data: LoginRequest) => void;
  signOut: () => void;
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

  const loadToken = async () => {
    const tokenStorage = await loadString(authToken);
    if (tokenStorage) {
      setToken(tokenStorage);
    }
  };

  useEffect(() => {
    loadToken();
  }, []);

  const signIn = (credential: LoginRequest) => {
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

  const signOut = useCallback(async () => {
    await remove(authToken);
    setToken('');
  }, []);

  return <AuthContext.Provider value={{ token, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
