import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ComponentType} from 'react';

export type ScreenType = 'stack' | 'tab' | 'drawer' | 'top-tab';

export type GetNavigationProps<
  TScreenType extends ScreenType,
  TParams extends {},
  TParamListKey extends keyof TParams
> = TScreenType extends 'stack'
  ? StackNavigationProp<TParams, TParamListKey>
  : TScreenType extends 'tab'
  ? BottomTabNavigationProp<TParams, TParamListKey>
  : TScreenType extends 'top-tab'
  ? MaterialTopTabNavigationProp<TParams, TParamListKey>
  : never;

export type NavigationScreen<
  TScreenType extends ScreenType,
  TProps = {},
  TParams extends ParamListBase = {},
  TParamListKey extends keyof TParams = any
> = ComponentType<
  TProps & {
    route: RouteProp<TParams, TParamListKey>;
    navigation: GetNavigationProps<TScreenType, TParams, TParamListKey>;
  }
>;
