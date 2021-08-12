import styled from 'styled-components/native';

import {MarginProps} from '~/interfaces/Index';
import normalize from '~/utils/DynamicRatio';

export const Margin = styled.View<MarginProps>`
  width: ${props => (props.width ? normalize(props.width) : normalize(5))}px;
  height: ${props => (props.height ? normalize(props.height) : normalize(5))}px;
`;

export default Margin;
