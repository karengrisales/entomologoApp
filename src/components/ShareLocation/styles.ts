import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: colors.primaryWhite,
    columnGap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'flex-start',
    borderRadius: 20,
  },
  containerText: {
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    color: colors.quaternaryGrey,
  },
  text: {
    fontSize: 14,
    color: colors.secondaryBlack,
  },
  circle: {
    backgroundColor: colors.tertiaryGrey,
  },
});
