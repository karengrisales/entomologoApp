import React, { useReducer } from 'react';
import { createContext, FC, PropsWithChildren } from 'react';
import {
  InsectsActionType,
  TActions,
  TInsectsContext,
  TInsectsState,
} from '../../types/types';

export const InsectsContext = createContext<TInsectsContext | undefined>(
  undefined,
);

const initialState: TInsectsState = {
  insects: [{ name: 'Mariposa', location: 'Popayan' }],
};

const reducer = (
  state: TInsectsState,
  action: InsectsActionType,
): TInsectsState => {
  switch (action.type) {
    case 'SET_INSECT':
      return {
        ...state,
        insects: state.insects.filter(insect => {
          if (insect.name.toUpperCase() !== action.payload.name.toUpperCase()) {
            return [action.payload, ...state.insects];
          }
          return [...state.insects];
        }),
      };
    case 'EDIT_INSECT':
      return {
        ...state,
        insects: state.insects.filter(insect => {
          if (insect.name.toUpperCase() === action.payload.name.toUpperCase()) {
            insect = action.payload;
          }
        }),
      };
  }
};

export const InsectsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions: TActions = {
    setInsect: insect => {
      dispatch({ type: 'SET_INSECT', payload: insect });
    },
    editInsect: insect => {
      dispatch({ type: 'EDIT_INSECT', payload: insect });
    },
  };

  return (
    <InsectsContext.Provider value={{ state, actions }}>
      {children}
    </InsectsContext.Provider>
  );
};
