import { Home } from 'modules/Home/screens';
import { Products } from 'modules/Sales/screens';
import { ROUTES } from 'navigation/appRoutes';

export const MENU_ROUTES = [
  {
    name: ROUTES.HOME,
    component: Home,
    iconName: 'home',
    size: 24,
    textBottomBar: 'Início'
  },
  {
    name: ROUTES.SALES_PRODUCT,
    component: Products,
    iconName: 'box',
    size: 24,
    textBottomBar: 'Venda'
  },
  {
    name: ROUTES.REGISTER_ADDRESS,
    component: Home,
    iconName: 'credit-card',
    size: 24,
    textBottomBar: 'Carteira'
  },
  {
    name: ROUTES.REGISTER_CAR,
    component: Home,
    iconName: 'user',
    size: 24,
    textBottomBar: 'Perfil'
  }
];
