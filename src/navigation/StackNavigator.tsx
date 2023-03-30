import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Edit from '../screens/Edit';
import Details from '../screens/Details';
import { TInsect } from '../types/types';
import { colores, colors } from '../theme/theme';
import AddInsect from '../screens/AddInsect';

export type RootStackParams = {
  Home: undefined;
  Details: TInsect;
  Edit: TInsect;
  AddInsect: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colores.primaryPurple,
        headerTitleStyle: {
          fontSize: 22,
        },
        headerShown: false,
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: colors.primaryGreen,
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{ title: '', headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="AddInsect"
        options={{ title: 'Registrar' }}
        component={AddInsect}
      />
      <Stack.Screen
        name="Edit"
        options={({ route }) => ({
          title: route.params.name,
        })}
        component={Edit}
      />
      <Stack.Screen
        name="Details"
        options={{ title: '' }}
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
