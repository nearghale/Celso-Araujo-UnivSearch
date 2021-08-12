import React, {useEffect} from 'react';
import {Linking} from 'react-native';
import {Color} from '~/styles';

import * as Styles from './styles';
import {useModal} from '~/hooks/useModal';

import { Button} from '~/components';

interface modalProps {
  success?: boolean;
  modalSites: boolean;
  sites: string[];
  domains: string[];
}

const Modal: React.FC<modalProps> = ({modalSites, sites, domains}) => {
  const {hide} = useModal();


  return (
    <Styles.Container>
      {modalSites && sites ? (
        <>
        <Styles.ContainerHeader>
            <Button
              borderRadius={30}
              width={30}
              height={30}
              fontSize={18}
              loading={false}
              text={'X'}
              color={Color.menuUserName}
              onPress={() => hide()}
              backgroundColor={Color.lighter}
            />
          </Styles.ContainerHeader>

          
          
        {sites.map((site) => {
          return(
          <Button
            width={280}
            height={40}
            marginTop={20}
            fontSize={17}
            borderRadius={20}
            loading={false}
            text={site}
            backgroundColor={Color.greenFour}
            onPress={() =>
              Linking.openURL(site)
            }/>
          )
        })}
          
        
        </>
      ) : (
        <>
          <Styles.ContainerHeader>
            <Button
              borderRadius={30}
              width={30}
              height={30}
              fontSize={18}
              loading={false}
              text={'X'}
              color={Color.menuUserName}
              onPress={() => hide()}
              backgroundColor={Color.lighter}
            />
          </Styles.ContainerHeader>

            
          {domains.map((domain) => {
          return(
          <Button
            width={280}
            height={40}
            marginTop={20}
            fontSize={17}
            borderRadius={20}
            loading={false}
            text={domain}
            backgroundColor={Color.greenFour}
            onPress={() =>
              Linking.openURL(domain)
            }/>
          )
        })}
        </>
      )}
    </Styles.Container>
  );
};

export default Modal;
