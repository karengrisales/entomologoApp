import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {/* <Stack.Screen
        name="InsectsScreen"
        options={{ headerShown: false }}
        component={InsectsScreen}
      /> */}
    </Stack.Navigator>
  );
};
