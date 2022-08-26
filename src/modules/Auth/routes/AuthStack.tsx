import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../../../navigation/appRoutes';
import RegisterStack from '../../Register/routes/RegisterStack';

import { SignIn, ForgotPassword, SMS, Password } from '../screens';

export type AuthRouteMap = {
  [ROUTES.SIGNIN]: undefined;
  [ROUTES.FORGOT_PASSWORD]: undefined;
  [ROUTES.REGISTER_STACK]: undefined;
  [ROUTES.SMS]: undefined;
  [ROUTES.PASSWORD]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AuthRouteMap>();

const AuthRoutes = () => (
  <Navigator
    initialRouteName={ROUTES.SIGNIN}
    screenOptions={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'pop' }}
  >
    <Screen name={ROUTES.SIGNIN} component={SignIn} />
    <Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
    <Screen name={ROUTES.REGISTER_STACK} component={RegisterStack} />
    <Screen name={ROUTES.SMS} component={SMS} />
    <Screen name={ROUTES.PASSWORD} component={Password} />
  </Navigator>
);

export default AuthRoutes;
