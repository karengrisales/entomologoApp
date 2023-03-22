import { colores } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  containerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: colores.primaryPurple,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
    borderColor: colores.primaryPurple,
  },
  tableTitle: {
    color: colores.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  rowContainer: {
    borderWidth: 2,
    borderTopWidth: 0,
    borderTopStartRadius: 0,
    borderTopEndRadius: 0,
    borderRadius: 18,
    borderColor: colores.primaryPurple,
  },
});
