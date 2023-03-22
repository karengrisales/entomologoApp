import { colores } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonPrimary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.primaryPurple,
    width: 110,
    height: 30,
    borderRadius: 30,
    margin: 5,
  },
  buttonSecondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.primaryPurple,
    width: 40,
    height: 40,
    borderRadius: 100,
    margin: 5,
  },
  buttonIcon: {
    marginRight: 35,
  },
  title: {
    color: '#f8f6f6',
    fontWeight: 'bold',
  },
});
