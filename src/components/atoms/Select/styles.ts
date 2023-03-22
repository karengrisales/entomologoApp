import { StyleSheet } from 'react-native';
import { colores } from '../../../theme/theme';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colores.white,
    borderColor: colores.primaryPurple,
    borderRadius: 18,
    borderWidth: 2,
    flex: 1,
  },
  textButton: {
    color: colores.black,
    fontSize: 22,
    textAlign: 'left',
  },
  dropdown: {
    borderRadius: 18,
    marginTop: 10,
  },
  rowText: {
    color: colores.black,
    fontSize: 20,
    paddingLeft: 10,
    textAlign: 'left',
  },
});
