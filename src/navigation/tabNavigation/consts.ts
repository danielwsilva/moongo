import HomeStack from 'modules/Home/routes/HomeStack';
import SalesStack from 'modules/Sales/routes/SalesStack';
import { ROUTES } from 'navigation/appRoutes';

export const MENU_ROUTES = [
  {
    name: ROUTES.HOME_TABNAVIGATION,
    component: HomeStack,
    iconName: 'home',
    size: 22,
    textBottomBar: 'Início'
  },
  {
    name: ROUTES.SALES_TABNAVIGATION,
    component: SalesStack,
    iconName: 'isv',
    size: 22,
    textBottomBar: 'Venda'
  },
  {
    name: ROUTES.REGISTER_ADDRESS,
    component: HomeStack,
    iconName: 'wallet',
    size: 22,
    textBottomBar: 'Carteira'
  },
  {
    name: ROUTES.REGISTER_CAR,
    component: HomeStack,
    iconName: 'user',
    size: 22,
    textBottomBar: 'Perfil'
  }
];
