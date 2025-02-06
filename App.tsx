import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { NavigatorStack } from './src/navigation/StackNavigatio';

const App = () => {
  return (
    <NavigationContainer>
      <NavigatorStack />
  </NavigationContainer>
    
  );
};

export default App;
