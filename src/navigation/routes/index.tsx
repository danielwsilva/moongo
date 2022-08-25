import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RegisterStack from '../../modules/Register/routes/RegisterStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <RegisterStack />
    </NavigationContainer>
  );
};

export default Routes;
