import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterProvider } from 'hooks/register';

import { ROUTES } from 'navigation/appRoutes';

import { User, Car, Address, Password } from '../screens';

export type RegisterRouteMap = {
  [ROUTES.REGISTER_USER]: undefined;
  [ROUTES.REGISTER_CAR]: undefined;
  [ROUTES.REGISTER_ADDRESS]: undefined;
  [ROUTES.REGISTER_PASSWORD]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RegisterRouteMap>();

const RegisterRoutes = () => (
  <RegisterProvider>
    <Navigator
      initialRouteName={ROUTES.REGISTER_USER}
      screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
    >
      <Screen name={ROUTES.REGISTER_USER} component={User} />
      <Screen name={ROUTES.REGISTER_CAR} component={Car} />
      <Screen name={ROUTES.REGISTER_ADDRESS} component={Address} />
      <Screen name={ROUTES.REGISTER_PASSWORD} component={Password} />
    </Navigator>
  </RegisterProvider>
);

export default RegisterRoutes;
