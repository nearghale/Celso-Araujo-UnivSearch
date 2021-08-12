import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {ButtonProps} from '~/interfaces/Index';
import * as Styles from './styles';
import {Icon} from '~/components';
import {Color} from '~/styles';
const Button: React.FC<ButtonProps> = ({
  loading,
  text,
  marginTop,
  backgroundColor,
  height,
  width,
  marginBottom,
  borderRadius,
  borderWidth,
  borderColor,
  lineHeight,
  padding,
  paddingLeft,
  fontSize,
  icon,
  iconColor,
  iconName,
  iconSize,
  fontFamily,
  color,
  onPress,
}) => {
  return (
    <Styles.Button
      height={height}
      width={width}
      marginBottom={marginBottom}
      marginTop={marginTop}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      padding={padding}
      paddingLeft={paddingLeft}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator animating={loading} size={30} color={'#fff'} />
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Styles.Text
            lineHeight={lineHeight}
            fontSize={fontSize}
            color={color}
            fontFamily={fontFamily}>
            {text}
          </Styles.Text>
          {icon && (
            <Icon
              name={iconName || ''}
              size={iconSize || 14}
              iconFeather
              marginHorizontal={5}
              color={iconColor || Color.white}
            />
          )}
        </View>
      )}
    </Styles.Button>
  );
};

export default Button;
