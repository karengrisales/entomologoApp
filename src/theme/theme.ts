import { StyleSheet } from 'react-native';
export const colores = {
  primaryPurple: '#6429CD',
  primaryGrey: '#1D1D1B',
  primaryIndigo: '#DFDFFF',
  secondaryFuchsia: '#E4A4FF',
  secondaryPurple: '#BB65FF',
  success: '#419B44',
  error: '#ED0039',
  white: '#FFF',
  black: '#000',
};

export const colors = {
  primaryGreen: '#D3E8D2',
  secondaryGreen: '#006D31',
  tertiaryGreen: '#006D31',
  primaryBlue: '#BDEAF4',
  primaryWhite: '#FCFDF7',
  primaryGrey: '#747775',
  primaryBlack: '#0E1F11',
};

export const size = {
  borderRadius: 18,
  borderZero: 0,
};

export const stylesGlobal = StyleSheet.create({
  containerGlobal: {
    flex: 1,
    marginHorizontal: 40,
    backgroundColor: colors.primaryWhite,
  },
});
