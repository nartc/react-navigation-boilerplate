import React, { forwardRef, RefForwardingComponent, useImperativeHandle, useRef } from 'react';
import { ScrollViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

const { ScrollView, View, event, set, Extrapolate } = Animated;

const AnimatedScrollView: RefForwardingComponent<{ scrollTo: any }, ScrollViewProps & { scrollY: Animated.Value<number>, children?: any }> =
  (props, ref) => {
    const scrollViewRef = useRef<Animated.ScrollView>(null);
    const translateY = props.scrollY?.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 200],
      extrapolate: Extrapolate.CLAMP,
    });

    useImperativeHandle(ref, () => {
      return {
        scrollTo: (y: number) => {
          scrollViewRef?.current?.getNode()?.scrollTo({ x: 0, y, animated: false });
        }
      };
    }, []);

    return (
      <ScrollView
        { ...props }
        ref={ scrollViewRef }
        scrollEventThrottle={ 1 }
        onScroll={ event([
          {
            nativeEvent: ({ contentOffset: { y } }: any) => set(props.scrollY, y),
          },
        ]) }>
        <View style={ { paddingBottom: 200, transform: [{ translateY }] } }>
          { props.children }
        </View>
      </ScrollView>
    );
  };

export default forwardRef(AnimatedScrollView);
