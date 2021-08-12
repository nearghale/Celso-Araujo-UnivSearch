import React, {useCallback} from 'react';
import {View} from 'react-native';
import normalize from '~/utils/DynamicRatio/index';
import {InputComponentProps} from '~/interfaces/Index';
import {Icon} from '~/components';
import * as Styles from './styles';

const Input: React.FC<InputComponentProps> = ({
  iconName,
  fontSize,
  width,
  height,
  sizeIcon,
  placeholderTextColor,
  iconEvilIcons,
  marginHorizontal,
  iconFontAwesome5,
  iconFontAwesome,
  iconFontisto,
  iconFoundation,
  iconMaterial,
  iconAntDesign,
  iconEntypo,
  iconIonicons,
  iconFeather,
  placeholder,
  secureTextEntry,
  value,
  keyboardTypeNumeric,
  setValue,
  errorMessage,
  marginBottom,
}) => {
  return (
    <>
      <Styles.Container
        width={width}
        height={height}
        marginBottom={marginBottom}>
        <Icon
          iconEvilIcons={iconEvilIcons}
          iconFontAwesome5={iconFontAwesome5}
          iconFontAwesome={iconFontAwesome}
          iconFontisto={iconFontisto}
          iconFoundation={iconFoundation}
          iconMaterial={iconMaterial}
          iconAntDesign={iconAntDesign}
          iconEntypo={iconEntypo}
          iconFeather={iconFeather}
          iconIonicons={iconIonicons}
          name={iconName || ''}
          size={normalize(sizeIcon || 14)}
          color="#FFF"
          marginHorizontal={normalize(marginHorizontal || 0)}
        />
        <Styles.Input
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          value={value}
          style={{textAlign: 'left'}}
          fontSize={fontSize || 14}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={keyboardTypeNumeric ? 'numeric' : 'default'}
          placeholder={placeholder}
          onChangeText={setValue}
        />
      </Styles.Container>
      {errorMessage && (
        <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
      )}
    </>
  );
};

export default Input;
