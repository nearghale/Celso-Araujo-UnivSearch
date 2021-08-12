import React from 'react';
import {View} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {IconProps} from '~/interfaces/Index';
import normalize from '~/utils/DynamicRatio';
// import { Container } from './styles';

const Icon: React.FC<IconProps> = ({
  name,
  size,
  color,
  iconEvilIcons,
  marginHorizontal,
  iconFontAwesome5,
  iconFontAwesome,
  iconFontisto,
  iconFoundation,
  iconMaterial,
  iconMaterialCommunityIcons,
  iconAntDesign,
  iconEntypo,
  iconFeather,
  iconIonicons,
  iconSimpleLineIcons,
}) => {
  return (
    <>
      {iconEvilIcons && (
        <IconEvilIcons
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconAntDesign && (
        <IconAntDesign
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconFontAwesome5 && (
        <IconFontAwesome5
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconMaterial && (
        <IconMaterial
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconEntypo && (
        <IconEntypo
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconFontisto && (
        <IconFontisto
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconFeather && (
        <IconFeather
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconFontAwesome && (
        <IconFontAwesome
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconFoundation && (
        <IconFoundation
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconIonicons && (
        <IconIonicons
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconMaterialCommunityIcons && (
        <IconMaterialCommunityIcons
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
      {iconSimpleLineIcons && (
        <IconSimpleLineIcons
          name={name || ''}
          size={size}
          color={color}
          style={{marginHorizontal: normalize(marginHorizontal || 0)}}
        />
      )}
    </>
  );
};

export default Icon;
