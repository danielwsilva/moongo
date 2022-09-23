import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from 'navigation/appRoutes';
import styles from 'navigation/tabNavigation/styles';

import { Wallet } from '../screens';

export type ProfileRouteMap = {
  [ROUTES.WALLET]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<ProfileRouteMap>();

const WalletRoutes = ({ route }: NativeStackScreenProps<ProfileRouteMap>) => {
  const navigation = useNavigation();

  useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName !== ROUTES.WALLET && !!routeName) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: styles.navigator });
    }
  }, [navigation, route]);

  return (
    <Navigator
      initialRouteName={ROUTES.WALLET}
      screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
    >
      <Screen name={ROUTES.WALLET} component={Wallet} />
    </Navigator>
  );
};

export default WalletRoutes;
