import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

export type RootStackParams = {
  Home: undefined;
  Details: undefined;
  Edit: undefined;
  Add: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
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
      <Stack.Screen name="Home" options={{ title: '' }} component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
