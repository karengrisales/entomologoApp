import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colores.white,
    borderColor: colores.primaryPurple,
    borderRadius: 18,
    borderWidth: 2,
    flex: 1,
  },
  textButton: {
    color: colores.black,
    fontSize: 18,
    textAlign: 'left',
  },
  dropdown: {
    borderRadius: 18,
    marginTop: 10,
  },
  rowText: {
    color: colores.black,
    fontSize: 18,
    paddingLeft: 10,
    textAlign: 'left',
  },
});
