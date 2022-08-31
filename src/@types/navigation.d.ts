import { ROUTES } from '../navigation/appRoutes';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // REGISTER
      [ROUTES.REGISTER_STACK]: undefined;
      [ROUTES.REGISTER_USER]: undefined;
      [ROUTES.REGISTER_CAR]: undefined;
      [ROUTES.REGISTER_ADDRESS]: undefined;
      // AUTH
      [ROUTES.AUTH_STACK]: undefined;
      [ROUTES.AUTH_SIGNIN]: undefined;
      [ROUTES.AUTH_FORGOT_CPF]: undefined;
      [ROUTES.AUTH_FORGOT_CODE]: undefined;
      [ROUTES.AUTH_FORGOT_PASSWORD]: { stack: 'auth' | 'register' };
      // BUTTON-NAV
      [ROUTES.BUTTON_NAV]: undefined;
      // HOME
      [ROUTES.HOME_STACK]: undefined;
      [ROUTES.HOME_CART]: undefined;
      [ROUTES.HOME]: undefined;
      // SALES
      [ROUTES.SALES_STACK]: undefined;
      [ROUTES.SALES_PRODUCT]: undefined;
      [ROUTES.SALES_CART]: undefined;
    }
  }
}
