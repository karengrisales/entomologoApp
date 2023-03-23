import { colores } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonPrimary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.primaryPurple,
    width: 110,
    height: 50,
    borderRadius: 30,
    margin: 5,
  },
  buttonSecondary: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.primaryPurple,
    width: 60,
    height: 60,
    borderRadius: 100,
    margin: 5,
  },
  buttonIcon: {
    marginRight: 35,
  },
  titlePrimary: {
    color: '#f8f6f6',
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleSecondary: {
    color: '#f8f6f6',
    fontWeight: 'bold',
    fontSize: 30,
  },
  disabled: {
    opacity: 0.4,
  },
});
