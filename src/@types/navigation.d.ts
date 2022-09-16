import { AuthRouteMap } from 'modules/Auth/routes/AuthStack';
import { HomeRouteMap } from 'modules/Home/routes/HomeStack';
import { ProfileRouteMap } from 'modules/Profile/routes/ProfileStack';
import { RegisterRouteMap } from 'modules/Register/routes/RegisterStack';
import { SalesRouteMap } from 'modules/Sales/routes/SalesStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthRouteMap, RegisterRouteMap, HomeRouteMap, SalesRouteMap, ProfileRouteMap {}
  }
}
