import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

import { AddressForm } from 'modules/Register/screens/Address/form';
import { CarForm } from 'modules/Register/screens/Car/form';
import { UserForm } from 'modules/Register/screens/User/form';

type RegisterContextData = {
  user: UserForm;
  car: CarForm;
  address: AddressForm;
  addUser: (_item: UserForm) => void;
  addCar: (_item: CarForm) => void;
  addAddress: (_item: AddressForm) => void;
};

type PropsProvider = {
  children: ReactNode;
};

const RegisterContext = createContext<RegisterContextData>({} as RegisterContextData);

export function RegisterProvider({ children }: PropsProvider) {
  const [user, setUser] = useState<UserForm>({} as UserForm);
  const [car, setCar] = useState<CarForm>({} as CarForm);
  const [address, setAddress] = useState<AddressForm>({} as AddressForm);

  const addUser = useCallback((item: UserForm) => setUser(item), []);
  const addCar = useCallback((item: CarForm) => setCar(item), []);
  const addAddress = useCallback((item: AddressForm) => setAddress(item), []);

  return (
    <RegisterContext.Provider
      value={{
        user,
        car,
        address,
        addUser,
        addCar,
        addAddress
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);
  return context;
}
