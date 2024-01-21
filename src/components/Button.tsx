import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import color from '../common/colors';

export const Container = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => (props.height ? `height: ${props.height}px` : '')};
  ${props => (props.height ? `border-radius: ${props.height / 2}px` : '')};
  background-color: ${props =>
    props.type === 'primary' ? color.red : color.white};
`;

export const ButtonText = styled(Text)`
  text-align: center;
  font-family: Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  color: ${props => (props.type === 'primary' ? color.white : color.red)};
`;

type ButtonProps = {
  children: React.ReactNode;
  height?: number;
  width: number;
  type: 'primary' | 'secondary';
};

function Button(props: ButtonProps) {
  const {children, height, width, type} = props;
  return (
    <TouchableOpacity>
      <Container height={height} width={width} type={type}>
        <ButtonText type={type}>{children}</ButtonText>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;
