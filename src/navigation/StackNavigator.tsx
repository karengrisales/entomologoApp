import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Edit from '../screens/Edit';
import Details from '../screens/Details';

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
      <Stack.Screen name="Add" options={{ title: '' }} component={Add} />
      <Stack.Screen name="Edit" options={{ title: '' }} component={Edit} />
      <Stack.Screen
        name="Details"
        options={{ title: '' }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
