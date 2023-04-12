import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    rowGap: 50,
    marginTop: 60,
  },
  image: {
    alignItems: 'center',
  },
  inputs: {
    flexDirection: 'column',
    rowGap: 14,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 100,
  },
  buttonError: {
    marginTop: 6,
  },
  textError: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: colores.error,
  },
});
