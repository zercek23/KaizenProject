import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {HeaderIcon, ProfileIcon} from '../assets/icons';
import Button from './Button';
import color from '../common/colors';

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 60px;
  margin: 10px 0px 0px 0px;
  background-color: ${color.white};
  width: 100%;
`;

export const HeaderLeft = styled(View)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 20px;
`;

export const HeaderRight = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 0px 20px;
`;

export const ProfileContainer = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  margin: 0px 0px 0px 10px;
  background-color: ${color.black};
  justify-content: center;
  align-items: center;
`;

type HeaderProps = BottomTabHeaderProps & {};

function Header(props: HeaderProps) {
  return (
    <View style={{backgroundColor: color.white}}>
      <SafeAreaView>
        <Container>
          <HeaderLeft>
            <HeaderIcon />
          </HeaderLeft>
          <HeaderRight>
            <Button type="primary" height={40} width={100}>
              Giriş Yap
            </Button>
            <ProfileContainer>
              <ProfileIcon />
            </ProfileContainer>
          </HeaderRight>
        </Container>
      </SafeAreaView>
    </View>
  );
}

export default Header;
