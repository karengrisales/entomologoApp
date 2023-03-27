export type TInsect = {
  name: string;
  location: string;
  quantity?: number;
  observation?: string;
  habitat?: string;
};

export type TInsectsState = {
  insects: TInsect[];
};

export type TSetInsect = {
  type: 'SET_INSECT';
  payload: TInsect;
};

export type TEditInsect = {
  type: 'EDIT_INSECT';
  payload: TInsect;
};

export type InsectsActionType = TSetInsect | TEditInsect;

export type TActions = {
  setInsect: (insect: TInsect) => void;
  editInsect: (insect: TInsect) => void;
};

export type TInsectsContext = {
  state: TInsectsState;
  actions: TActions;
};

export type TPieChart = {
  name: string;
  quantity: number;
  color?: string;
  legendFontColor?: string;
  legendFontSize?: number;
};
