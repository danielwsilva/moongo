import HomeStack from 'modules/Home/routes/HomeStack';
import SalesStack from 'modules/Sales/routes/SalesStack';
import { ROUTES } from 'navigation/appRoutes';

export const MENU_ROUTES = [
  {
    name: ROUTES.HOME_TABNAVIGATION,
    component: HomeStack,
    iconName: 'home',
    size: 24,
    textBottomBar: 'Início'
  },
  {
    name: ROUTES.SALES_TABNAVIGATION,
    component: SalesStack,
    iconName: 'box',
    size: 24,
    textBottomBar: 'Venda'
  },
  {
    name: ROUTES.REGISTER_ADDRESS,
    component: HomeStack,
    iconName: 'credit-card',
    size: 24,
    textBottomBar: 'Carteira'
  },
  {
    name: ROUTES.REGISTER_CAR,
    component: HomeStack,
    iconName: 'user',
    size: 24,
    textBottomBar: 'Perfil'
  }
];
