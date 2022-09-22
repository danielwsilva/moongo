import { AuthRouteMap } from 'modules/auth/routes/AuthStack';
import { HomeRouteMap } from 'modules/home/routes/HomeStack';
import { ProfileRouteMap } from 'modules/profile/routes/ProfileStack';
import { RegisterRouteMap } from 'modules/register/routes/RegisterStack';
import { SalesRouteMap } from 'modules/sales/routes/SalesStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRouteMap, RegisterRouteMap, HomeRouteMap, SalesRouteMap, ProfileRouteMap {}
  }
}
