import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  title: {
    color: colores.black,
    fontSize: 22,
  },
  counter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  select: {
    marginVertical: 30,
  },
  save: {
    alignItems: 'center',
    marginTop: 30,
  },
});
