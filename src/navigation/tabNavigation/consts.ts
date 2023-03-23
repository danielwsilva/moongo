import HomeStack from 'modules/home/routes/HomeStack';
import ProfileStack from 'modules/profile/routes/ProfileStack';
import SalesStack from 'modules/sales/routes/SalesStack';
import WalletStack from 'modules/wallet/routes/WalletStack';
import { ROUTES } from 'navigation/appRoutes';

export const MENU_ROUTES = [
  {
    name: ROUTES.HOME_STACK,
    component: HomeStack,
    iconName: 'home',
    size: 22,
    textBottomBar: 'Início'
  },
  {
    name: ROUTES.SALES_STACK,
    component: SalesStack,
    iconName: 'isv',
    size: 22,
    textBottomBar: 'Venda'
  },
  {
    name: ROUTES.REGISTER_STACK,
    component: WalletStack,
    iconName: 'wallet',
    size: 22,
    textBottomBar: 'Carteira'
  },
  {
    name: ROUTES.PROFILE_STACK,
    component: ProfileStack,
    iconName: 'user',
    size: 22,
    textBottomBar: 'Perfil'
  }
];
