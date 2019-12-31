import { useFocusEffect } from '@react-navigation/core';
import React, { useRef } from 'react';
import { Text } from 'react-native';
import Animated from 'react-native-reanimated';
import { TabParamsList } from '../../navigators/RootNavigator';
import AnimatedScrollView from '../../shared/ui/AnimatedScrollView/AnimatedScrollView';
import { NavigationScreen } from '../../utils/types';

const ArticleScreen: NavigationScreen<'stack',
  {},
  TabParamsList,
  'Article'> = ({ route }) => {
  const animatedScrollViewRef = useRef<{ scrollTo: any }>(null);
  const scrollYRef = useRef(0);
  Animated.useCode(() => Animated.call([route.params.scrollY], ([val]) => {
    scrollYRef.current = val;
  }), []);

  useFocusEffect(() => {
    animatedScrollViewRef?.current?.scrollTo(scrollYRef.current);
  });

  return (
    <AnimatedScrollView
      ref={ animatedScrollViewRef }
      scrollY={ route.params.scrollY }>
      { Array.from({ length: 10 }).map((_, index) => {
        return <Text key={ index }>Article</Text>;
      }) }
    </AnimatedScrollView>
  );
};

export default ArticleScreen;
