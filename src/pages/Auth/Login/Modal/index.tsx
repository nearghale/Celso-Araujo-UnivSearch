import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Color} from '~/styles';
import normalize from '~/utils/DynamicRatio';
import * as Styles from './styles';
import {useModal} from '~/hooks/useModal';

const messageFail =
  'Ops! não foi possivel achar essa conta no nosso banco de dados, por favor, tente novamente';

const Modal: React.FC = () => {
  const {hide} = useModal();

  return (
    <Styles.Container>
      <Icon name={'remove'} size={normalize(80)} color={Color.error} />
      <Styles.Title>{'Ocorreu um erro!'} </Styles.Title>
      <Styles.Description>{messageFail}</Styles.Description>
      <Styles.Button onPress={() => hide()}>
        <Styles.TextButton>OK!</Styles.TextButton>
      </Styles.Button>
    </Styles.Container>
  );
};

export default Modal;
