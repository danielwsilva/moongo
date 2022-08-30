import HomeStack from 'modules/Home/routes/HomeStack';
import { ROUTES } from 'navigation/appRoutes';

export const MENU_ROUTES = [
  {
    name: ROUTES.HOME,
    component: HomeStack,
    iconName: 'home',
    size: 24,
    textBottomBar: 'Início'
  },
  {
    name: ROUTES.AUTH_SIGNIN,
    component: HomeStack,
    iconName: 'box',
    size: 24,
    textBottomBar: 'Abastecer'
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
