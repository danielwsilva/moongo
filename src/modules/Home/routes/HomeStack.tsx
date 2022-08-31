import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from 'navigation/appRoutes';

import { Home } from '../screens';

export type HomeRouteMap = {
  [ROUTES.HOME]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<HomeRouteMap>();

const HomeRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.HOME}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.HOME} component={Home} />
  </Navigator>
);

export default HomeRoutes;
