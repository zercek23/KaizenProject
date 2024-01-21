import {ScrollView, Text, TouchableOpacity, View, Image} from 'react-native';
import color from '../common/colors';
import styled from 'styled-components';
import {
  TabView as NativeTabView,
  NavigationState,
  PagerPan,
} from 'react-native-tab-view';
import {useState} from 'react';

const Container = styled(View)`
  display: flex;
  background-color: ${color.white};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const TabIndicatorView = styled(View)`
  background: transparent;
  align-self: center;
  margin-bottom: 20px;
`;

const TabIndicatorList = styled(View)`
  flex-direction: row;
`;

const TabIndicator = styled<{active?: boolean}>(View)`
  width: ${props => (props.active ? '15px' : '10px')};
  height: 8px;
  border-radius: 5px;

  margin: 0 3px;

  background-color: ${props => (props.active ? color.red : color.lightGray)};
`;

export type Tab = {
  id: string;
  title: string;
  component: React.ReactNode;
};

export type TabMap = {
  [key: string]: Tab;
};

type SliderProps = {
  readonly tabs: Tab[];
  initialTabIndex?: number;
  locationStateKey?: string;
};

export function Slider(props: SliderProps) {
  const {tabs, initialTabIndex, locationStateKey} = props;
  const [index, setIndex] = useState(0);

  const [routes, setRoutes] = useState(
    tabs.map(tab => {
      return {
        key: tab.id,
        title: tab.title,
      };
    }),
  );
  console.log('routes', routes);

  const renderScene = ({route}) => {
    console.log('burak1', route);
    console.log('burak2', tabs);
    const TabScene =
      tabs?.length > 0 && tabs.find(t => t.id === route.key)?.component;
    console.log('burak3', TabScene);

    return TabScene ? <TabScene /> : null;
  };

  const handleIndexChange = (index: number) => {
    setIndex(index);
  };

  const renderTabBar = () => (
    <TabIndicatorView>
      <TabIndicatorList>
        {routes?.length > 0 &&
          routes.map((route, i) => (
            <TabIndicator active={i === index} key={route.key} />
          ))}
      </TabIndicatorList>
    </TabIndicatorView>
  );

  const renderPager = props => <PagerPan {...props} />;

  return (
    <NativeTabView
      navigationState={{index, routes}}
      onIndexChange={handleIndexChange}
      renderPager={renderPager}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      tabBarPosition="bottom"
    />
  );
}
