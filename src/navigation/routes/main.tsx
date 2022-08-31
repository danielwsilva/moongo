import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { CartProvider } from 'hooks/cart';
import HomeStack from 'modules/Home/routes/HomeStack';
import SalesStack from 'modules/Sales/routes/SalesStack';
import { ROUTES } from 'navigation/appRoutes';

import BottomNav from '../tabNavigation';

export type MainRouteMap = {
  [ROUTES.BUTTON_NAV]: undefined;
  [ROUTES.SALES_STACK]: undefined;
  [ROUTES.HOME_STACK]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainRouteMap>();

const MainRoutes = () => (
  <CartProvider>
    <Navigator
      initialRouteName={ROUTES.BUTTON_NAV}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop'
      }}
    >
      <Screen name={ROUTES.BUTTON_NAV} component={BottomNav} />
      <Screen name={ROUTES.SALES_STACK} component={SalesStack} />
      <Screen name={ROUTES.HOME_STACK} component={HomeStack} />
    </Navigator>
  </CartProvider>
);

export default MainRoutes;
