import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 190,
  },
  image: {
    alignItems: 'center',
    marginBottom: 30,
  },
  location: {
    marginTop: 70,
  },
  text: {
    marginTop: 20,
    marginHorizontal: 26,
    color: colors.primaryRed,
    fontSize: 18,
    textAlign: 'center',
  },
  buttons: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 44,
  },
  buttonError: {
    marginTop: 110,
  },
});
