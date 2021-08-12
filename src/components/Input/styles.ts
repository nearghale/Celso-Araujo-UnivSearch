import styled from 'styled-components/native';
import {Color} from '~/styles/';
import normalize from '~/utils/DynamicRatio/index';

interface containerProps{
   width?: number;
   height?: number;
   marginBottom?: number;
}
export const Container = styled.View<containerProps>`
   border-width: 1px;  
   border-color: ${Color.white};
   flex-direction: row;
   justify-content: flex-start;
   align-items: center;
   width: ${(props) => props.width ? normalize(props.width) : normalize(312)}px;
   height: ${(props) => props.height ? normalize(props.height) : normalize(48)}px;
   margin-bottom: ${(props) => props.marginBottom ? normalize(props.marginBottom) : normalize(10)}px;
   border-radius: ${normalize(80)}px;
   padding-left: ${normalize(10)}px;

`
interface inputProps{
   fontSize?: number;
   fontFamily?: string;
   marginLeft?: number;
   alignText?: string;
}
export const Input = styled.TextInput<inputProps>`
   width: ${normalize(235)}px;
   height: 100%;
   text-align: ${(props) => props.alignText ? props.alignText : 'left'};
   margin-left: ${(props) => props.marginLeft ? normalize(props.marginLeft) : normalize(4)}px;
   font-size: ${(props) => props.fontSize ? normalize(props.fontSize) : normalize(20)}px;
   color: ${Color.white};
`

export const ErrorMessage = styled.Text`
  color: ${Color.warning};
  font-weight: 700;
  font-size: ${15}px;
  margin-bottom: ${normalize(20)}px;

`;
