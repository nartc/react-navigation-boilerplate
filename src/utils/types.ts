import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ComponentType} from 'react';

export type ScreenType = 'stack' | 'tab' | 'drawer';

export type GetNavigationProps<
  TScreenType extends ScreenType,
  TParams extends {},
  TParamListKey extends keyof TParams
> = TScreenType extends 'stack'
  ? StackNavigationProp<TParams, TParamListKey>
  : TScreenType extends 'tab'
  ? BottomTabNavigationProp<TParams, TParamListKey>
  : never;

export type GetNavigationScreenProps<
  TScreenType extends ScreenType,
  TParams extends {},
  TParamListKey extends keyof TParams
> = {
  route: RouteProp<TParams, TParamListKey>;
  navigation: GetNavigationProps<TScreenType, TParams, TParamListKey>;
};

export type NavigationScreen<
  TScreenType extends ScreenType,
  TProps = {},
  TParams extends {} = {},
  TParamListKey extends keyof TParams = never
> = ComponentType<
  TProps & GetNavigationScreenProps<TScreenType, TParams, TParamListKey>
>;
