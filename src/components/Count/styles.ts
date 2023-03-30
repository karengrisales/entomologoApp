import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.quaternaryGreen,
    borderRadius: 15,
    height: 80,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  information: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
    marginLeft: 7,
  },
});
