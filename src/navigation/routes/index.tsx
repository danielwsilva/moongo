import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import AuthStack from 'modules/Auth/routes/AuthStack';
import HomeStack from 'modules/Home/routes/HomeStack';
import BottomNav from '../tabNavigation';

const Routes = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  );
};

export default Routes;
