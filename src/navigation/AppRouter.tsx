import Home from '../screens/Home.tsx';
import Character from '../screens/Character.tsx';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationRoutes} from './types.ts';

export const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationRoutes.Home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigationRoutes.Character}
          component={Character}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
