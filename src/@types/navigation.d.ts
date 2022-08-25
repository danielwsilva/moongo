import { ROUTES } from "../navigation/appRoutes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      [ROUTES.REGISTER_USER]: undefined;
      [ROUTES.REGISTER_CAR]: undefined;
      [ROUTES.REGISTER_ADDRESS]: undefined;
      [ROUTES.REGISTER_PASSWORD]: undefined;
    }
  }
}