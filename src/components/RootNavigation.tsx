import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainScreen from '../screens/MainScreen';
import {Case} from '../data';
import RollScreen from '../screens/RollScreen';

export type RootStackParamList = {
  Main: undefined;
  Roll: Case;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Roll" component={RollScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
