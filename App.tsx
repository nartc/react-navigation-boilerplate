/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import {enableScreens} from 'react-native-screens';
import RootNavigator from './src/navigators/RootNavigator';

enableScreens();

const App = () => {
  return (
    <NavigationNativeContainer>
      <RootNavigator />
    </NavigationNativeContainer>
  );
};

export default App;
