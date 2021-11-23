import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/components/RootNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <RootNavigation />
    </NavigationContainer>
  );
};

export default App;
