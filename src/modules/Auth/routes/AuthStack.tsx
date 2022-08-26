import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../../../navigation/appRoutes';
import RegisterStack from '../../Register/routes/RegisterStack';

import { SignIn, CPF, Code, Password } from '../screens';

export type AuthRouteMap = {
  [ROUTES.AUTH_SIGNIN]: undefined;
  [ROUTES.AUTH_FORGOT_CPF]: undefined;
  [ROUTES.AUTH_FORGOT_CODE]: undefined;
  [ROUTES.AUTH_FORGOT_PASSWORD]: { stack: 'auth' | 'register' };
  [ROUTES.REGISTER_STACK]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthRouteMap>();

const AuthRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.AUTH_SIGNIN}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.AUTH_SIGNIN} component={SignIn} />
    <Screen name={ROUTES.AUTH_FORGOT_CPF} component={CPF} />
    <Screen name={ROUTES.AUTH_FORGOT_CODE} component={Code} />
    <Screen name={ROUTES.AUTH_FORGOT_PASSWORD} component={Password} />
    <Screen name={ROUTES.REGISTER_STACK} component={RegisterStack} />
  </Navigator>
);

export default AuthRoutes;
