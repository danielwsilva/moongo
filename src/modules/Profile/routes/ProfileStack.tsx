import { useEffect } from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { ROUTES } from 'navigation/appRoutes';
import styles from 'navigation/tabNavigation/styles';

import { Profile, User, Car, Address, Password } from '../screens';

export type ProfileRouteMap = {
  [ROUTES.PROFILE]: undefined;
  [ROUTES.PROFILE_USER]: undefined;
  [ROUTES.PROFILE_CAR]: undefined;
  [ROUTES.PROFILE_ADDRESS]: undefined;
  [ROUTES.PROFILE_PASSWORD]: undefined;
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
    <Navigator
      initialRouteName={ROUTES.PROFILE}
      screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
    >
      <Screen name={ROUTES.PROFILE} component={Profile} />
      <Screen name={ROUTES.PROFILE_USER} component={User} />
      <Screen name={ROUTES.PROFILE_CAR} component={Car} />
      <Screen name={ROUTES.PROFILE_ADDRESS} component={Address} />
      <Screen name={ROUTES.PROFILE_PASSWORD} component={Password} />
    </Navigator>
  );
};

export default ProfileRoutes;
