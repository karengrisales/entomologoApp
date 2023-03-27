import React, { useReducer } from 'react';
import { createContext, FC, PropsWithChildren } from 'react';
import {
  LocationActionType,
  TActionsLocation,
  TLocation,
  TLocationContext,
} from '../../types/types';

export const LocationContext = createContext<TLocationContext | undefined>(
  undefined,
);

const initialState: TLocation = {
  locationAvailable: false,
  position: {
    mocked: false,
    provider: '',
    timestamp: 0,
    coords: {
      accuracy: 0,
      altitude: 0,
      altitudeAccuracy: 0,
      heading: 0,
      latitude: 0,
      longitude: 0,
      speed: 0,
    },
  },
};

const reducer = (state: TLocation, action: LocationActionType): TLocation => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        locationAvailable: action.payload.locationAvailable,
        position: action.payload.position,
      };
  }
};

export const LocationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: TActionsLocation = {
    setLocation: location => {
      dispatch({ type: 'SET_LOCATION', payload: location });
    },
  };

  return (
    <LocationContext.Provider value={{ state, actions }}>
      {children}
    </LocationContext.Provider>
  );
};
