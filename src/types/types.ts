export type TInsect = {
  name: string;
  image?: string;
  url: string;
};

export type TInsectRegister = {
  name: string;
  location: string;
  quantity: number;
  observation?: string;
  habitat?: string;
  image?: string;
  date?: string;
};

export type TInsectsState = {
  insects: TInsectRegister[];
};

export type TSetInsect = {
  type: 'SET_INSECT';
  payload: TInsectRegister;
};

export type TEditInsect = {
  type: 'EDIT_INSECT';
  payload: TInsectRegister;
};

export type InsectsActionType = TSetInsect | TEditInsect;

export type TActions = {
  setInsect: (insect: TInsectRegister) => void;
  editInsect: (insect: TInsectRegister) => void;
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

export type TLocation = {
  locationAvailable: boolean;
  position: Position;
};

export type Position = {
  coords: Coords;
  mocked: boolean;
  provider: string;
  timestamp: number;
};

export type Coords = {
  accuracy: number;
  altitude: number;
  altitudeAccuracy: number;
  heading: number;
  latitude: number;
  longitude: number;
  speed: number;
};

export type TLocationContext = {
  state: TLocation;
  actions: TActionsLocation;
};

export type TActionsLocation = {
  setLocation: (location: TLocation) => void;
};

export type TSetLocation = {
  type: 'SET_LOCATION';
  payload: TLocation;
};

export type LocationActionType = TSetLocation;

export type TLocationResponse = {
  results: Result[];
};

export type Result = {
  datasource: Datasource;
  name: string;
  country: string;
  country_code: string;
  city: string;
  postcode: string;
  district: string;
  neighbourhood: string;
  suburb: string;
  street: string;
  housenumber: string;
  lon: number;
  lat: number;
  distance: number;
  result_type: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: Timezone;
  rank: Rank;
  place_id: string;
  bbox: Bbox;
};

export type Bbox = {
  lon1: number;
  lat1: number;
  lon2: number;
  lat2: number;
};

export type Datasource = {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
};

export type Rank = {
  importance: number;
  popularity: number;
};

export type Timezone = {
  name: string;
  offset_STD: string;
  offset_STD_seconds: number;
  offset_DST: string;
  offset_DST_seconds: number;
  abbreviation_STD: string;
  abbreviation_DST: string;
};
