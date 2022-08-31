import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from 'navigation/appRoutes';

import { Cart } from '../screens';

export type SalesRouteMap = {
  [ROUTES.SALES_CART]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<SalesRouteMap>();

const SalesRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.SALES_CART}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.SALES_CART} component={Cart} />
  </Navigator>
);

export default SalesRoutes;
