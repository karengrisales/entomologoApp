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
  containerImage: {
    shadowColor: colors.primaryBlack,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.43,
    shadowRadius: 16.0,
  },
  image: {
    borderRadius: 100,
  },
});
