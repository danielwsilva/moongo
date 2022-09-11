import React, { createContext, useContext, ReactNode, useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { FormikErrors } from 'formik';

interface CatchContextData {
  catchError: (_error: string[]) => void;
  catchFormError: (_error: any, _setErrors: (_err: FormikErrors<any>) => void) => void;
}
interface PropsProvider {
  children: ReactNode;
}

const CatchContext = createContext<CatchContextData>({} as CatchContextData);

export function CatchProvider({ children }: PropsProvider) {
  const catchError = useCallback((error: string[]) => {
    if (error?.length) {
      Toast.show({ type: 'generic', props: { title: error[0] } });
    }
  }, []);

  const catchFormError = useCallback((error: any, setErrors: (_err: FormikErrors<any>) => void) => {
    const fieldKey = Object.keys(error).map((item) => item);

    let objErrors = {};

    for (let i = 0; i < fieldKey.length; i++) {
      objErrors = { ...objErrors, [fieldKey[i]]: error[fieldKey[i]].length ? error[fieldKey[i]][0] : '' };
    }

    if (error?.error?.length) {
      Toast.show({ type: 'generic', props: { title: error?.error[0] } });
    } else {
      setErrors(objErrors);
    }
  }, []);

  return <CatchContext.Provider value={{ catchError, catchFormError }}>{children}</CatchContext.Provider>;
}

export function useCatch() {
  const context = useContext(CatchContext);
  return context;
}
