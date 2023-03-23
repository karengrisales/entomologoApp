import { useContext } from 'react';
import { TInsectsContext } from '../../types/types';
import { InsectsContext } from './insectsContext';

const useInsects = (): TInsectsContext => {
  const context = useContext(InsectsContext);
  if (!context) {
    throw new Error('useInsects must be used within a InsectsProvider');
  }
  return context;
};

export default useInsects;
