import { ROUTES } from 'navigation/appRoutes';

export const PROFILE_MODULES = [
  {
    name: 'Dados pessoais',
    icon: 'user',
    route: ROUTES.PROFILE_USER
  },
  {
    name: 'Carro',
    icon: 'car',
    route: ROUTES.PROFILE_CAR
  },
  {
    name: 'Endereço',
    icon: 'home',
    route: ROUTES.PROFILE_ADDRESS
  }
  // {
  //   name: 'Alterar senha',
  //   icon: 'lock',
  //   route: ROUTES.PROFILE_PASSWORD
  // },
];
