import { useContext } from 'react';
import { TLocationContext } from '../../types/types';
import { LocationContext } from './locationContext';

const useLocation = (): TLocationContext => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export default useLocation;
