import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useRef } from 'react';
import Animated from 'react-native-reanimated';
import ArticleScreen from '../screens/Article/ArticleScreen';
import FeedScreen from '../screens/Feed/FeedScreen';

const {Value} = Animated;

export type TabParamsList = {
  Feed: {scrollY: Animated.Value<number>};
  Article: {scrollY: Animated.Value<number>};
};

const RootNavigator = () => {
  const Tab = useRef(createMaterialTopTabNavigator());
  const scrollY = useRef(new Value(0));

  return (
    <Tab.current.Navigator>
      <Tab.current.Screen
        name={'Feed'}
        initialParams={{scrollY: scrollY.current}}
        component={FeedScreen as any}
      />
      <Tab.current.Screen
        name={'Article'}
        initialParams={{scrollY: scrollY.current}}
        component={ArticleScreen as any}
      />
    </Tab.current.Navigator>
  );
};

export default RootNavigator;
