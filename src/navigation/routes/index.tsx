import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from 'hooks/auth';
import AuthStack from 'modules/auth/routes/AuthStack';
import BottomNav from 'navigation/tabNavigation';

const Routes = () => {
  const { token } = useAuth();

  return <NavigationContainer>{token ? <BottomNav /> : <AuthStack />}</NavigationContainer>;
};

export default Routes;
