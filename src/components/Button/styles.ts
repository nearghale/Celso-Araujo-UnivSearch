import styled from 'styled-components/native';
import {Color, FontFamily} from '~/styles';
import normalize from '~/utils/DynamicRatio/index';

interface buttonProp{
    marginTop?: number;
    marginBottom?: number;
    borderRadius?: number;
    padding?: number;
    paddingLeft?: number;
    backgroundColor?: string;
    height?: number;
    width?: number;
    borderWidth?: number;
    borderColor?: string;
}
export const Button = styled.TouchableOpacity<buttonProp>`
    margin-top: ${(props) => props.marginTop ? normalize(props.marginTop) : 0}px;
    justify-content: center;
    border-width: ${(props) => props.borderWidth ? props.borderWidth : 0}px;
    border-color: ${(props) => props.borderColor ? props.borderColor : 'transparent'};
    align-items: center;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    height: ${(props) => props.height ? normalize(props.height) : 48}px;
    width: ${(props) => props.width ? normalize(props.width) : 100}px;
    margin-bottom: ${(props) => props.marginBottom ? normalize(props.marginBottom) : 0}px;
    border-radius: ${(props) => props.borderRadius ? normalize(props.borderRadius) : 0}px;
    padding: ${(props) => props.padding ? normalize(props.padding) : 0}px;
    padding-left: ${(props) => props.paddingLeft ? normalize(props.paddingLeft) : 0}px;
`

interface textProps{
    fontSize?: number;
    color?: string;
    fontFamily?: string;
    lineHeight?: number;
}
export const Text = styled.Text<textProps>`
    margin-bottom: ${normalize(3)}px;
    font-size: ${(props) => props.fontSize ? normalize(props.fontSize) : normalize(14)}px;
    color: ${(props) => props.color ? props.color : Color.white};
    line-height: ${(props) => props.lineHeight ? normalize(props.lineHeight) : normalize(24)}px;
`
