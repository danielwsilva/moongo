import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from 'navigation/appRoutes';

import { Cart } from '../screens';

export type HomeRouteMap = {
  [ROUTES.HOME_CART]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<HomeRouteMap>();

const HomeRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.HOME_CART}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.HOME_CART} component={Cart} />
  </Navigator>
);

export default HomeRoutes;
