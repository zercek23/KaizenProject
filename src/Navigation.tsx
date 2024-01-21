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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailScreen} from './screens/DetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTab = () => (
  <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
    screenOptions={() => ({
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
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={PATHS.HOME_SCREEN.name} component={HomeTab} />
    <Stack.Screen name={PATHS.DETAILS_SCREEN.name} component={DetailScreen} />
  </Stack.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
