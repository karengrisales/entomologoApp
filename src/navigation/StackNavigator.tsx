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

export type RootStackParams = {
  Register: undefined;
  RegisterInsect: undefined;
  FormInsect: undefined;
  Count: undefined;
  Records: undefined;
  Reports: undefined;
  FormNewInsect: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 22,
        },
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.primaryGreen,
        },
      }}>
      <Stack.Screen
        name="Register"
        options={{ title: '' }}
        component={Register}
      />
      <Stack.Screen
        name="RegisterInsect"
        options={{ title: '' }}
        component={RegisterInsect}
      />
      <Stack.Screen
        name="FormInsect"
        options={{ title: '' }}
        component={FormInsect}
      />
      <Stack.Screen
        name="FormNewInsect"
        options={{ title: '' }}
        component={FormNewInsect}
      />
      <Stack.Screen name="Count" options={{ title: '' }} component={Count} />
      <Stack.Screen
        name="Records"
        options={{ title: '' }}
        component={Records}
      />
      <Stack.Screen
        name="Reports"
        options={{ title: '' }}
        component={Reports}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
