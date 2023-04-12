import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerGlobal: {
    flex: 1,
  },
  text: {
    marginTop: 200,
    marginHorizontal: 26,
    color: colors.primaryRed,
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginHorizontal: 26,
    marginTop: 30,
  },
  containerZero: {
    flex: 1,
    marginHorizontal: 26,
    marginTop: 300,
  },
  insects: {
    marginTop: 23,
    marginBottom: 115,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});
