import React, {useState, useCallback} from 'react';

import * as S from './styles';
import {Input, Margin, Button} from '~/components';
import {Color} from '~/styles';
import {useNavigation} from '@react-navigation/native';
import {ImageBackground, Dimensions} from 'react-native';
import {RouteNames} from '~/routes';
const background = require('~/assets/Images/background.jpg');
import {useAuth} from '~/hooks/auth';
import Modal from './Modal';
import {useModal} from '~/hooks/useModal';
import Lottie from 'lottie-react-native';
import studentAnimation from '~/assets/Animations/student.json';

import AsyncStorage from '@react-native-community/async-storage';
import normalize from '~/utils/DynamicRatio';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loadingStatus, setLoadingStatus] = useState<boolean>(false);
  const {width, height} = Dimensions.get('window');

  const {doLoginUser} = useAuth();
  const {navigate} = useNavigation();
  const {setComponent} = useModal();

  const handleRenderModalFail = useCallback(() => {
    setComponent(<Modal />);
  }, [setComponent]);

  const doLogin = async () => {
    try {
      const data = await AsyncStorage.getItem('@ListApp:userRegistered');

      const userRegisteredVerify = JSON.parse(data || '');
      console.log('userRegisteredVerify ', userRegisteredVerify);
      if (
        userRegisteredVerify.username === username &&
        userRegisteredVerify.password === password
      ) {
        await AsyncStorage.setItem('@ListApp:userLogged', 'true');
        doLoginUser();
      } else {
        handleRenderModalFail();
      }
    } catch (e) {
      handleRenderModalFail();
    }
  };

  return (
    <S.Container>
      <ImageBackground
        source={background}
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: normalize(60)
        }}
        blurRadius={8}>
            <Lottie
            source={studentAnimation}
            autoPlay
            style={{width: normalize(250), height: normalize(250)}}
            loop
            resizeMode={'contain'}
          />
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
          text={'Entrar'}
          onPress={() => doLogin()}
          loading={loadingStatus}
        />
        <S.ContainerRegister>
          <Button
            width={180}
            fontSize={16}
            backgroundColor={Color.dodgeBlue}
            borderRadius={50}
            height={30}
            loading={false}
            text={'Criar conta'}
            onPress={() => navigate(RouteNames.REGISTER)}
          />
        </S.ContainerRegister>
      </ImageBackground>
    </S.Container>
  );
};

export default Login;
