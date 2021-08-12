import 'react-native-gesture-handler';
import React, {useEffect} from 'react';

import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ModalProvider} from '~/hooks/useModal';
import {NavigationService} from '~/services';
import {AuthProvider} from '~/hooks/auth';

import Routes from './routes';

const src: React.FC = () => {
  return (
    <NavigationContainer ref={nav => NavigationService.setNavitor(nav)}>
      <SafeAreaProvider>
        <AuthProvider>
          <ModalProvider>
            <BottomSheetModalProvider>
              <Routes />
            </BottomSheetModalProvider>
          </ModalProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default src;
