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
    color: ${Color.primaryGreen};
`

export const Description = styled.Text`
    margin-top: ${normalize(10)}px;
    font-size: ${normalize(16)}px;
    width: ${normalize(270)}px;
    text-align: center;
    font-weight: 500;
    color: ${Color.gray};
`

export const TextButton = styled.Text`
    font-size: ${normalize(24)}px;
    font-weight: 700;
    color: ${Color.white};
`


export const Button = styled.TouchableOpacity`
    margin-top: ${normalize(50)}px;
    height: ${normalize(50)}px;
    width: ${normalize(120)}px;
    border-radius: ${normalize(10)}px;;
    background-color: ${Color.gold};
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${Color.warning};

`