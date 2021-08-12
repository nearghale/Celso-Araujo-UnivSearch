import React, {useState, useCallback} from 'react';

import {Input, Margin, Button} from '~/components';
import {Color} from '~/styles';
import {useModal} from '~/hooks/useModal';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import * as S from './styles';
import Modal from './Modal';
import {RouteNames} from '~/routes';

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const {setComponent} = useModal();
  const {navigate} = useNavigation();

  const handleRenderModal = useCallback(() => {
    setComponent(<Modal />);
    navigate(RouteNames.LOGIN);
  }, [setComponent]);

  const handleRegister = async () => {
    const data = {
      username,
      password,
    };

    await AsyncStorage.setItem('@ListApp:userRegistered', JSON.stringify(data));

    handleRenderModal();
  };

  return (
    <S.Container>
      <Input
        name={'username'}
        value={username}
        setValue={(value: string) => setUsername(value)}
        width={300}
        icon
        iconColor={Color.black}
        iconFontisto
        sizeIcon={20}
        marginHorizontal={10}
        placeholder={'Nome de usuário'}
        placeholderTextColor={Color.white}
        iconName={'person'}
        height={48}
        borderWidth={1}
        borderRadius={40}
      />
      <Input
        value={password}
        setValue={(text: string) => setPassword(text)}
        width={300}
        name={'password'}
        iconName={'ios-lock-closed'}
        marginHorizontal={10}
        iconIonicons
        sizeIcon={20}
        placeholder={'Senha'}
        placeholderTextColor={Color.white}
        height={48}
        borderWidth={1}
        borderRadius={40}
      />
      <Margin height={10} />
      <Button
        backgroundColor={Color.secondaryOrange}
        width={290}
        height={43}
        borderRadius={80}
        marginBottom={15}
        fontSize={20}
        text={'Registrar'}
        onPress={() => handleRegister()}
        loading={loadingStatus}
      />
    </S.Container>
  );
};

export default Register;
