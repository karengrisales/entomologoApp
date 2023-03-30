import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: colors.primaryWhite,
    height: 80,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 26,
  },
  quantity: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondaryGreen,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  quantityText: {
    color: colors.primaryWhite,
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 0.15,
  },
  specie: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
    color: colors.primaryBlack,
  },
  city: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: colors.quaternaryGrey,
  },
  containerInformation: {
    flexDirection: 'row',
    padding: 15,
  },
  containerCity: {
    flexDirection: 'row',
  },
  image: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
});
