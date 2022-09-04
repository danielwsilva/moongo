import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartProvider } from 'hooks/cart';

import { Password } from 'modules/Auth/screens/ForgotPassword';
import { FormUser, FormCar, FormAddress } from 'modules/Register/screens';
import { ROUTES } from 'navigation/appRoutes';
import styles from 'navigation/tabNavigation/styles';

import { Profile } from '../screens';

export type ProfileRouteMap = {
  [ROUTES.PROFILE]: undefined;
  [ROUTES.REGISTER_USER]: undefined;
  [ROUTES.REGISTER_CAR]: undefined;
  [ROUTES.REGISTER_ADDRESS]: undefined;
  [ROUTES.AUTH_FORGOT_PASSWORD]: { stack: 'auth' | 'register' };
};

const { Navigator, Screen } = createNativeStackNavigator<ProfileRouteMap>();

const ProfileRoutes = ({ route }: NativeStackScreenProps<ProfileRouteMap>) => {
  const navigation = useNavigation();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName !== ROUTES.PROFILE && !!routeName) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: styles.navigator });
    }
  }, [navigation, route]);

  return (
    <CartProvider>
      <Navigator
        initialRouteName={ROUTES.PROFILE}
        screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
      >
        <Screen name={ROUTES.PROFILE} component={Profile} />
        <Screen name={ROUTES.REGISTER_USER} component={FormUser} />
        <Screen name={ROUTES.REGISTER_CAR} component={FormCar} />
        <Screen name={ROUTES.REGISTER_ADDRESS} component={FormAddress} />
        <Screen name={ROUTES.AUTH_FORGOT_PASSWORD} component={Password} />
      </Navigator>
    </CartProvider>
  );
};

export default ProfileRoutes;
