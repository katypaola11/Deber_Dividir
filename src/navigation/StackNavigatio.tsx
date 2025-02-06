import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/LoginScreen';
import { CalculoScreen } from '../screens/CalculoScreen';


const Stack = createNativeStackNavigator();

export const NavigatorStack=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LoginScreen} />
      <Stack.Screen name="Formulario" component={CalculoScreen} />
    </Stack.Navigator>
  );
}