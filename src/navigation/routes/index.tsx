import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BottomNav from 'navigation/tabNavigation';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};

export default Routes;
