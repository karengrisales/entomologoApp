import { StyleSheet } from 'react-native';
import { colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.quinaryGrey,
    paddingVertical: 4,
  },
  lastContainer: {
    borderBottomWidth: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    backgroundColor: colors.tertiaryGreen,
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  quantityText: {
    color: colors.quinaryGreen,
    fontSize: 16,
    fontWeight: '500',
  },
  text: {
    fontSize: 16,
    color: colors.quaternaryGrey,
  },
});
