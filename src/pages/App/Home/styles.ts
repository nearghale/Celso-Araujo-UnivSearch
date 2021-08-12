import styled from 'styled-components/native';
import { Color } from '~/styles';
import normalize from '~/utils/DynamicRatio/index';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
    flex: 1;
    background-color: ${Color.dodgeBlue};
`
export const ContainerButton = styled.TouchableOpacity`
  margin-left: ${normalize(50)}px;
  position: absolute;
  top: ${normalize(40)}px;
  right: ${normalize(30)}px;
`;

export const ContainerSearchInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  justify-content: space-between;
  padding-left: ${normalize(15)}px;
  padding-right: ${normalize(15)}px;
  height: ${normalize(50)}px;
  border-radius: ${normalize(width * 0.8)}px;
  background-color: rgba(255, 255, 255, 0.2);
  border-width: 1px;
  border-color: ${Color.white};
  margin-bottom: 20px;
`;

export const InputSearch = styled.TextInput`
  color: #ffffff;
  font-weight: 500;
  flex: 1;
  line-height: ${normalize(18)}px;
  font-size: ${normalize(15)}px;
`;