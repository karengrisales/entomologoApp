import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { InsectsProvider } from './src/contexts/insects/insectsContext';
import BottomTabs from './src/navigation/BottomTabs';

export const App = () => {
  return (
    <NavigationContainer>
      <InsectsProvider>
        <BottomTabs />
      </InsectsProvider>
    </NavigationContainer>
  );
};
