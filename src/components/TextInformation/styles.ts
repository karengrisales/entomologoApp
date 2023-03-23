import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
  },
  information: {
    color: colores.black,
    fontSize: 25,
    fontWeight: 'normal',
  },
  text: {
    color: colores.primaryPurple,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
