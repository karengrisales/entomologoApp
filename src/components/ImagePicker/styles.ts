import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
  },
  avatarImage: {
    height: 120,
    width: 120,
    borderColor: colors.tertiaryGreen,
    borderWidth: 4,
    borderRadius: 100,
    opacity: 1,
  },
  addButton: {
    height: 30,
    width: 30,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  addButtonIcon: {
    height: 30,
    width: 30,
  },
});
