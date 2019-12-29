import {createStackNavigator} from '@react-navigation/stack';
import React, {useRef} from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

const RootNavigator = (props: any) => {
  console.log('root', props);
  const Stack = useRef(createStackNavigator());

  return (
    <Stack.current.Navigator initialRouteName={'Home'}>
      <Stack.current.Screen name="Home" component={HomeScreen} />
    </Stack.current.Navigator>
  );
};

export default RootNavigator;
