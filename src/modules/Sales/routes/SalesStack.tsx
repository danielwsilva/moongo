import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartProvider } from 'hooks/cart';

import { Cart } from 'modules/Home/screens';
import { ROUTES } from 'navigation/appRoutes';
import styles from 'navigation/tabNavigation/styles';
import { Products } from '../screens';

export type SalesRouteMap = {
  [ROUTES.SALES_PRODUCT]: undefined;
  [ROUTES.HOME_CART]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<SalesRouteMap>();

const SalesRoutes = ({ route }: NativeStackScreenProps<SalesRouteMap>) => {
  const navigation = useNavigation();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName !== ROUTES.SALES_PRODUCT && !!routeName) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: styles.navigator });
    }
  }, [navigation, route]);

  return (
    <CartProvider>
      <Navigator
        initialRouteName={ROUTES.SALES_PRODUCT}
        screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
      >
        <Screen name={ROUTES.SALES_PRODUCT} component={Products} />
        <Screen name={ROUTES.HOME_CART} component={Cart} />
      </Navigator>
    </CartProvider>
  );
};

export default SalesRoutes;
