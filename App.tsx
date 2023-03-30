import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HeaderComponent from './src/components/Header/indes';
import { InsectsProvider } from './src/contexts/insects/insectsContext';
import { LocationProvider } from './src/contexts/location/locationContext';
import StackNavigatorInitial from './src/navigation/StackNavigatorInitial';

export const App = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <InsectsProvider>
          <HeaderComponent />
          <StackNavigatorInitial />
        </InsectsProvider>
      </LocationProvider>
    </NavigationContainer>
  );
};
