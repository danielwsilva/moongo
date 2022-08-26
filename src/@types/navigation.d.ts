import { ROUTES } from "../navigation/appRoutes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // REGISTER
      [ROUTES.REGISTER_STACK]: undefined;
      [ROUTES.REGISTER_USER]: undefined;
      [ROUTES.REGISTER_CAR]: undefined;
      [ROUTES.REGISTER_ADDRESS]: undefined;
      [ROUTES.REGISTER_PASSWORD]: undefined;
      // AUTH
      [ROUTES.AUTH_STACK]: undefined;
      [ROUTES.SIGNIN]: undefined;
      [ROUTES.FORGOT_PASSWORD]: undefined;
      [ROUTES.SMS]: undefined;
      [ROUTES.PASSWORD]: undefined;

    }
  }
}