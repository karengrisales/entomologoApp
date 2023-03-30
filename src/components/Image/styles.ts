import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageCircleBorder: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: colors.tertiaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
  },
});
