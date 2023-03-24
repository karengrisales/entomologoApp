import { Dimensions } from 'react-native';
import { TInsectsState } from '../types/types';

const windowWidth = Dimensions.get('window').width;

export const calculateWidth = (size: number) => {
  if (size === 1) {
    return size * 130;
  } else {
    return (windowWidth * size) / 5;
  }
};

export const labelsName = (state: TInsectsState) => {
  let labels: string[] = [];
  state.insects.map(insect => {
    labels = [...labels, insect.name];
  });
  return labels;
};

export const labelsQuantity = (state: TInsectsState) => {
  let labels: number[] = [];
  state.insects.map(insect => {
    labels = [...labels, insect.quantity || 0];
  });
  return labels;
};

export const labelsHabitat = (state: TInsectsState) => {
  let labels: number[] = [];
  let bosque: number = 0;
  let oceano: number = 0;
  let desierto: number = 0;
  let pantano: number = 0;
  let montana: number = 0;
  state.insects.map(insect => {
    if (insect.habitat !== undefined) {
      switch (insect.habitat) {
        case 'Bosque': {
          bosque++;
          break;
        }
        case 'Océano': {
          oceano++;
          break;
        }
        case 'Desierto': {
          desierto++;
          break;
        }
        case 'Pantano': {
          pantano++;
          break;
        }
        case 'Montaña': {
          montana++;
          break;
        }
      }
    }
  });
  labels = [...labels, bosque, oceano, desierto, pantano, montana];
  return labels;
};
