/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../theme/theme';
import Register from '../screens/Register';
import RegisterInsect from '../screens/RegisterInsect';
import FormInsect from '../screens/FormInsect';
import Count from '../screens/Count';
import Records from '../screens/Records';
import Reports from '../screens/Reports';
import FormNewInsect from '../screens/FormNewInsect/index';
import { TInsect, TInsectRegister } from '../types/types';
import HeaderComponent from '../components/Header/indes';
import { Platform } from 'react-native';

export type RootStackParams = {
  Register: undefined;
  RegisterInsect: undefined;
  FormInsect: undefined;
  Count: TInsect;
  Records: undefined;
  Reports: {
    insect: TInsect;
    quantity: number;
    insectRegister: TInsectRegister[];
  };
  FormNewInsect: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <HeaderComponent />,
        headerStatusBarHeight: Platform.OS === 'ios' ? 60 : 20,
        headerStyle: {
          backgroundColor: colors.primaryGreen,
        },
        headerTitleContainerStyle: { width: '100%' },
        headerLeft: () => null,
        cardStyle: {
          backgroundColor: colors.primaryGreen,
        },
      }}>
      <Stack.Screen
        name="Register"
        options={{ headerShown: false }}
        component={Register}
      />
      <Stack.Screen name="RegisterInsect" component={RegisterInsect} />
      <Stack.Screen name="FormInsect" component={FormInsect} />
      <Stack.Screen name="FormNewInsect" component={FormNewInsect} />
      <Stack.Screen name="Count" component={Count} />
      <Stack.Screen name="Records" component={Records} />
      <Stack.Screen name="Reports" component={Reports} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
