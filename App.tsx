import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { InsectsProvider } from './src/contexts/insects/insectsContext';
import { LocationProvider } from './src/contexts/location/locationContext';
import StackNavigatorInitial from './src/navigation/StackNavigatorInitial';

export const App = () => {
  return (
    <NavigationContainer>
      <LocationProvider>
        <InsectsProvider>
          <StackNavigatorInitial />
        </InsectsProvider>
      </LocationProvider>
    </NavigationContainer>
  );
};
