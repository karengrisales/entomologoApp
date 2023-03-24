import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  containerTable: {
    marginBottom: 110,
    marginTop: 30,
  },
  emptyState: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    color: colores.error,
  },
});
