import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import * as Pages from '~/pages';

import RouteNames from './RouteNames';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={RouteNames.LOGIN} component={Pages.Login} />
      <AuthStack.Screen name={RouteNames.REGISTER} component={Pages.Register} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
