import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { Color } from '~/styles';
import normalize from '~/utils/DynamicRatio';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${normalize(350)}px;
  background-color: ${Color.white};
  border-radius: ${normalize(30)}px;
  justify-content: flex-start;
  margin-bottom: ${normalize(8)}px;
  padding: ${normalize(0)}px ${normalize(30)}px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: ${normalize(5)}px;
`;

export const TitleCell = styled.Text`
  margin-top: ${normalize(15)}px;
  color: ${Color.black};
  font-weight: 600;
  line-height: ${normalize(22)}px;
  font-size: ${normalize(16)}px;
  align-self: center;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const DescriptionCell = styled.Text`
  color: ${Color.black};
  font-weight: 500;
  line-height: ${normalize(18)}px;
  font-size: ${normalize(13)}px;
`;

export const LineBottom = styled.View`
  width: ${normalize(300)}px;
  height: 1px;
`;
