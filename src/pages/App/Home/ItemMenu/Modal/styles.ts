import {Color} from '~/styles';
import styled from 'styled-components/native';


import normalize from '~/utils/DynamicRatio';


export const Container = styled.View`
    padding: ${normalize(20)}px;
    padding-top: ${normalize(30)}px;
    align-items: center;
    justify-content: center;
`

export const Title = styled.Text`
    margin-top: ${normalize(10)}px;
    font-size: ${normalize(24)}px;
    font-weight: 700;
    color: ${Color.red};
`

export const ContainerRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: ${normalize(250)}px;
`
export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    width: ${normalize(341)}px;
    padding-right: ${normalize(10)}px;
`

export const Description = styled.Text`
    margin-top: ${normalize(10)}px;
    font-size: ${normalize(16)}px;
    width: ${normalize(290)}px;
    text-align: center;
    font-weight: 500;
    color: ${Color.gray};
`

export const TextButton = styled.Text`
    font-size: ${normalize(24)}px;
    font-weight: 700;
    color: ${Color.white};
`

interface buttonProps{
    backgroundColor: string;
}
export const Button = styled.TouchableOpacity<buttonProps>`
    margin-top: ${normalize(50)}px;
    height: ${normalize(40)}px;
    width: ${normalize(100)}px;
    border-radius: ${normalize(10)}px;;
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : Color.gold};
    align-items: center;
    justify-content: center;
 

`