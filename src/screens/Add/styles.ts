import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
  },
  containerInputs: {
    paddingTop: 30,
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textSubmit: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: colores.success,
  },
  textError: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: colores.error,
  },
});
