import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {useModal} from '~/hooks/useModal';
import Modal from './Modal';
import {Icon, Margin} from '~/components';
import {Color} from '~/styles';
import {getUniversities} from '~/services/universityService';
import * as S from './styles';
import ItemMenu from './ItemMenu';
import {ImageBackground, Dimensions} from 'react-native';
import Lottie from 'lottie-react-native';
import Lupe from '~/assets/Animations/lupe.json';
const background = require('~/assets/Images/background.jpg');

import normalize from '~/utils/DynamicRatio';
const Home: React.FC = () => {
  const {setComponent} = useModal();
  const [universities, setUniversities] = useState<any[]>();
  const [textSearch, setTextSearch] = useState<string>('');
  const [data, setData] = useState<any[]>();

  const {width, height} = Dimensions.get('window');


  const handleRenderModalExit = useCallback(() => {
    setComponent(<Modal />);
  }, [setComponent]);

  const getUniversitiesData = async () => {
    const data = await getUniversities('brazil');
  
    const newDataSort = data?.sort(function (a, b) {
	
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
    });


     setData(newDataSort);
     setUniversities(data);

  };



  const sortArrayAlphabetic = () => {
    const newData = universities?.sort(function (a, b) {
	
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
     
    });
     
    setData(newData)
  } 


  function searchFilterFunction(text: string) {

    if(text.length == 0){
      sortArrayAlphabetic()
    }

    else if (text.length == 1) {
   
      const newData = universities?.filter((item: any) => {
        const itemData = `${item.name.toUpperCase()}
        ${item.name.toUpperCase()} ${item.country.toUpperCase()}`;

        const textData = text.toUpperCase();

        return itemData.substring(0, 1) == textData ;
      })
      setData(newData)

    } else {
      const newData = universities?.filter((item: any) => {
        const itemData = `${item.name.toUpperCase()}
        ${item.web_pages.map((web_page: string) => {
          return web_page.toUpperCase()
      })} ${item.domains.map((domain: string) => {
          return domain.toUpperCase()
      })}`;

        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
    }
  }

  useEffect(() => {
    getUniversitiesData();
  }, []);

  return (
    <S.Container>
      <ImageBackground
        source={background}
        style={{
          width: width,
          height: height,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
        blurRadius={8}>
      <S.ContainerButton onPress={() => handleRenderModalExit()}>
        <Icon
          name={'exit-outline'}
          iconIonicons
          color={Color.white}
          size={28}
        />
      </S.ContainerButton>

      <View style={{flex: 1, paddingTop: normalize(100), alignItems: 'center'}}>
        <S.ContainerSearchInput>
        <Lottie
            source={Lupe}
            autoPlay
            style={{width: normalize(50), height: normalize(40)}}
            loop
            resizeMode={'contain'}
          />
          <S.InputSearch
            testID="inputSearch"
            placeholder="Nome da universidade"
            placeholderTextColor="#FFF"
            value={textSearch}
            onChangeText={(text: string) => {
              setTextSearch(text);
              searchFilterFunction(text);
            }}
            autoCorrect={false}
          />

        
          {/* <Lupe height={normalize(18)} width={normalize(18)} /> */}
        </S.ContainerSearchInput>
        <FlatList
          testID="listFlat"
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <ItemMenu Name={item.name} Description={item.web_pages[0]} domains={item.domains} sites={item.web_pages}/>
          )}
          keyExtractor={(item: any) => item.name}
        />
      </View>
      </ImageBackground>
    </S.Container>
  );
};

export default Home;
