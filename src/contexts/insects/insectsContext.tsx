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
  insects: [
    {
      name: 'Mariposa',
      location: 'Medellín',
      habitat: 'Pantano',
      quantity: 23,
      observation: 'Mariposa del pantano',
    },
    {
      name: 'Mariquita',
      location: 'Cali',
      habitat: 'Bosque',
      quantity: 15,
      observation: 'Mariquita del bosque',
    },
    {
      name: 'Cucarrón',
      location: 'Cali',
      habitat: 'Bosque',
      quantity: 14,
      observation: 'Cucarrón del bosque',
    },
  ],
};

const reducer = (
  state: TInsectsState,
  action: InsectsActionType,
): TInsectsState => {
  switch (action.type) {
    case 'SET_INSECT':
      return {
        ...state,
        insects: [action.payload, ...state.insects],
      };
    case 'EDIT_INSECT':
      return {
        ...state,
        insects: state.insects.map(insect =>
          insect.name === action.payload.name
            ? {
                ...insect,
                location: action.payload.location,
                quantity: action.payload.quantity,
                observation: action.payload.observation,
                habitat: action.payload.habitat,
              }
            : insect,
        ),
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
