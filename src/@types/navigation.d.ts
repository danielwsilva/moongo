import { AuthRouteMap } from 'modules/auth/routes/AuthStack';
import { HomeRouteMap } from 'modules/home/routes/HomeStack';
import { ProfileRouteMap } from 'modules/profile/routes/ProfileStack';
import { RegisterRouteMap } from 'modules/register/routes/RegisterStack';
import { SalesRouteMap } from 'modules/sales/routes/SalesStack';
import { WalletRouteMap } from 'modules/wallet/routes/WalletStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthRouteMap,
        RegisterRouteMap,
        HomeRouteMap,
        SalesRouteMap,
        WalletRouteMap,
        ProfileRouteMap {}
  }
}
