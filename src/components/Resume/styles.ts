import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 28,
    backgroundColor: colors.quaternaryGreen,
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginBottom: 120,
  },
  title: {
    fontSize: 24,
    color: colors.quaternaryGrey,
    marginLeft: 8,
    marginBottom: 32,
  },
});
