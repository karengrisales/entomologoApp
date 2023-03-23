import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Analysis from '../screens/Analysis';
import { colores } from '../theme/theme';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colores.primaryPurple,
        tabBarInactiveTintColor: 'rgba(100, 41, 205, 0.5)',
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          marginVertical: 10,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      <Tab.Screen
        name="StackNavigator"
        options={{
          title: 'Inicio',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={28} color={color} />
          ),
        }}
        component={StackNavigator}
      />
      <Tab.Screen
        name="Análisis"
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <Icon name="bar-chart-2" size={28} color={color} />
          ),
        }}
        component={Analysis}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
