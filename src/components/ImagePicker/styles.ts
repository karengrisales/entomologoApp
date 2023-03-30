import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    marginTop: '40%',
  },
  avatarImage: {
    height: 120,
    width: 120,
    overflow: 'hidden',
    borderColor: colors.tertiaryGreen,
    borderWidth: 4,
    borderRadius: 260 / 2,
    opacity: 0.7,
  },
  addButton: {
    height: 30,
    width: 30,
    backgroundColor: '#f2f2fC',
    borderRadius: 50,
    position: 'absolute',
    right: 160,
    bottom: 5,
  },
  addButtonIcon: {
    height: 30,
    width: 30,
  },
});
