import React from 'react';
import {View, Linking, TouchableOpacity} from 'react-native';
import {Color} from '~/styles';
import normalize from '~/utils/DynamicRatio';
import * as Styles from './styles';
import {useModal} from '~/hooks/useModal';
import AsyncStorage from '@react-native-community/async-storage';
import {useAuth} from '~/hooks/auth';
import {Icon} from '~/components';

const messageExit = 'Deseja realmente sair de sua conta?';

const Modal: React.FC = () => {
  const {hide} = useModal();
  const {cleanState} = useAuth();

  async function logOut() {
    hide();

    await AsyncStorage.removeItem('@ListApp:userLogged');
    cleanState();
  }

  return (
    <Styles.Container>
      <Icon
        name={'exclamation'}
        size={normalize(80)}
        iconMaterialCommunityIcons
        color={Color.red}
      />
      <Styles.Title>{'Atenção'} </Styles.Title>
      <Styles.Description>{messageExit}</Styles.Description>
      <Styles.ContainerRow>
        <Styles.Button
          onPress={() => logOut()}
          backgroundColor={Color.primaryGreen}>
          <Styles.TextButton>Sim</Styles.TextButton>
        </Styles.Button>
        <Styles.Button onPress={() => hide()} backgroundColor={Color.red}>
          <Styles.TextButton>Não</Styles.TextButton>
        </Styles.Button>
      </Styles.ContainerRow>
    </Styles.Container>
  );
};

export default Modal;
