import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 26,
    marginBottom: 60,
  },
  count: {
    fontSize: 57,
  },
  containerCount: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 96,
    height: 80,
    backgroundColor: colors.tertiaryGreen,
  },
  center: {
    alignItems: 'center',
  },
  containerButton: {
    marginTop: 70,
    alignItems: 'center',
  },
});
