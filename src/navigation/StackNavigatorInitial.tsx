import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Location from '../screens/Location';
import StackNavigator from './StackNavigator';

export type RootStackParams = {
  BottomTabs: undefined;
  Location: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigatorInitial = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Location"
        options={{ title: '' }}
        component={Location}
      />
      <Stack.Screen
        name="BottomTabs"
        options={{ title: '' }}
        component={StackNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigatorInitial;
