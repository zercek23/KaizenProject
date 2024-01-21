import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Svg, Path} from 'react-native-svg';
import {DiscoverScreen} from './screens/DiscoverScreen';
import {MoreWalletScreen} from './screens/MoreWalletScreen';
import {DiscoverIcon} from './assets/icons/DiscoverIcon';
import {MoreWalletIcon} from './assets/icons/MoreWalletIcon';
import PATHS from './common/paths';
import Header from './components/Header';
import color from './common/colors';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {},
          tabBarActiveTintColor: color.black,
          tabBarInactiveTintColor: 'gray',
          style: {
            borderTopWidth: 2, // Border at the top of the tab bar
            borderTopColor: 'red', // Color of the border
          },
          tabStyle: {
            borderRightWidth: 1, // Border to the right of each tab
            borderRightColor: 'green', // Color of the border
          },
          // headerShown: false,
          header: props => <Header {...props} />,
        })}>
        <Tab.Screen
          name={PATHS.DISCOVER_SCREEN.name}
          component={DiscoverScreen}
          options={() => ({
            title: 'Keşfet',
            tabBarIcon: ({color}) => <DiscoverIcon color={color} />,
          })}
        />
        <Tab.Screen
          name={PATHS.MORE_WALLET_SCREEN.name}
          component={MoreWalletScreen}
          options={() => ({
            title: 'Daha Cüzdan',
            tabBarIcon: ({color}) => <MoreWalletIcon color={color} />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
