import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Button from './Button';
import color from '../common/colors';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import PATHS from '../common/paths';
import {DiscoverIcon} from '../assets/icons/DiscoverIcon';
import {MoreWalletIcon} from '../assets/icons/MoreWalletIcon';
import {useNavigation} from '@react-navigation/native';

export const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 60px;
  background-color: ${color.white};
  border-radius: 20px 20px 0px 0px;
  shadow-color: gray;
  shadow-opacity: 0.3;
  width: 100%;
`;

export const TabBarItem = styled(View)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;

export const TabBarItemText = styled(Text)`
  color: ${color.black};
  text-align: center;
  font-family: Helvetica;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

export const IconContainer = styled(View)`
  margin: 5px 0px;
`;

type TabBarProps = BottomTabBarProps & {};

function RenderIcon({name, color}) {
  console.log('color', color);
  switch (name) {
    case PATHS.DISCOVER_SCREEN.name:
      return <DiscoverIcon color={color} />;

    case PATHS.MORE_WALLET_SCREEN.name:
      return <MoreWalletIcon color={color} />;

    default:
      return <></>;
  }
}

function TabBar(props: TabBarProps) {
  const navigation = useNavigation();
  const {state} = props;
  const activeTabIndex = state.index; // Get the index of the active tab
  const activeTabRoute = state.routes[activeTabIndex]; // Get the active tab's route object
  console.log('navi', state);

  const checkRouteActive = (name: string) => {
    return activeTabRoute.name === name ? color.black : color.gray;
  };

  const handlePress = (index: number) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Container>
        {state?.routeNames?.length > 0 &&
          state.routeNames.map((name, index) => (
            <TouchableOpacity onPress={() => handlePress(index)}>
              <TabBarItem>
                <IconContainer>
                  <RenderIcon name={name} color={checkRouteActive(name)} />
                </IconContainer>

                <TabBarItemText color={checkRouteActive(name)}>
                  {PATHS[name]?.title}
                </TabBarItemText>
              </TabBarItem>
            </TouchableOpacity>
          ))}
      </Container>
    </SafeAreaView>
  );
}

export default TabBar;
