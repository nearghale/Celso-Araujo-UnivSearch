import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '~/styles';
import normalize from '~/utils/DynamicRatio';
import * as Styles from './styles';
import {useModal} from '~/hooks/useModal';

interface modalProps {
  success?: boolean;
}

const messageSucess = 'Agora você poderá logar!';

const Modal: React.FC<modalProps> = () => {
  const {hide} = useModal();

  return (
    <Styles.Container>
      <Icon name={'check'} size={normalize(80)} color={Color.primaryGreen} />
      <Styles.Title>{'Cadastrado com sucesso!'} </Styles.Title>
      <Styles.Description>{messageSucess}</Styles.Description>
      <Styles.Button onPress={() => hide()}>
        <Styles.TextButton>OK!</Styles.TextButton>
      </Styles.Button>
    </Styles.Container>
  );
};

export default Modal;
