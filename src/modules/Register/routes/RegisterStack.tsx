import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../../../navigation/appRoutes';

import { FormUser, FormCar, FormAddress } from '../screens';

export type RegisterRouteMap = {
  [ROUTES.REGISTER_USER]: undefined;
  [ROUTES.REGISTER_CAR]: undefined;
  [ROUTES.REGISTER_ADDRESS]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RegisterRouteMap>();

const RegisterRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.REGISTER_USER}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.REGISTER_USER} component={FormUser} />
    <Screen name={ROUTES.REGISTER_CAR} component={FormCar} />
    <Screen name={ROUTES.REGISTER_ADDRESS} component={FormAddress} />
  </Navigator>
);

export default RegisterRoutes;
