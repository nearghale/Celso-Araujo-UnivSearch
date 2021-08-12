import React, {useCallback, useState, useEffect} from 'react';
import {ActivityIndicator, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useAuth} from '~/hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Initializing = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

const Routes: React.FC = () => {
  const {signed, doLoginUser} = useAuth();

  const [dataUser, setIsDataUser] = useState<any>(undefined);
  const [initialRoute, setInicialRoute] = useState('initializing');

  async function loadDataUser() {
    setIsDataUser(
      await AsyncStorage.getItem('@ListApp:userLogged').then(data => {
        if (data) doLoginUser();
      }),
    );
    console.log('dataUser ', dataUser);

    setInicialRoute('');
  }

  useEffect(() => {
    loadDataUser();
  }, []);

  return (
    <>
      {initialRoute === 'initializing' && <Initializing />}
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </>
  );
};

export {default as RouteNames} from './RouteNames';

export default Routes;
