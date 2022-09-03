import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartProvider } from 'hooks/cart';

import { ROUTES } from 'navigation/appRoutes';

import styles from 'navigation/tabNavigation/styles';
import { Cart, Home } from '../screens';

export type HomeRouteMap = {
  [ROUTES.HOME]: undefined;
  [ROUTES.HOME_CART]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<HomeRouteMap>();

const HomeRoutes = ({ route }: NativeStackScreenProps<HomeRouteMap>) => {
  const navigation = useNavigation();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName === ROUTES.HOME_CART) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: styles.navigator });
    }
  }, [navigation, route]);

  return (
    <CartProvider>
      <Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
      >
        <Screen name={ROUTES.HOME} component={Home} />
        <Screen name={ROUTES.HOME_CART} component={Cart} options={{ contentStyle: { zIndex: 0 } }} />
      </Navigator>
    </CartProvider>
  );
};

export default HomeRoutes;
