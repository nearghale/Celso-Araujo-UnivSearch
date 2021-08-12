import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Margin} from '~/components';
import { Color } from '~/styles';
import {useModal} from '~/hooks/useModal';
import Modal from './Modal';

import * as S from './styles';

interface params {
  Name?: string;
  Description?: string;
  sites: string[];
  domains: string[];
}

const itemMenu: React.FC<params> = props => {

  const {setComponent} = useModal();

  const handleRenderModal = useCallback((isSite: boolean) => {
    setComponent(<Modal modalSites={isSite} sites={props.sites} domains={props.domains}/>);
  }, [setComponent]);

  return (
    <S.Container>
      <S.Content>
        <S.TitleCell>{props.Name}</S.TitleCell>
         <S.ContainerRow>
          <Button
            backgroundColor={Color.secondaryBlue}
            width={140}
            marginTop={10}
            height={30}
            borderRadius={80}
            fontSize={20}
            text={'Sites'}
            loading={false}
            onPress={() => handleRenderModal(true)}
          />
          <Margin width={10}/>
           <Button
            backgroundColor={Color.secondaryBlue}
            width={140}
            marginTop={10}
            height={30}
            borderRadius={80}
            fontSize={20}
            text={'Domínios'}
            loading={false}
            onPress={() => handleRenderModal(false)}
          />

        </S.ContainerRow>
        <S.LineBottom />
      </S.Content>
    </S.Container>
  );
};

export default itemMenu;
