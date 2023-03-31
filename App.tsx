import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { InsectsProvider } from './src/contexts/insects/insectsContext';
import { LocationProvider } from './src/contexts/location/locationContext';
import StackNavigator from './src/navigation/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <InsectsProvider>
          <StackNavigator />
        </InsectsProvider>
      </LocationProvider>
    </NavigationContainer>
  );
};
