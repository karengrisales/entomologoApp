import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    marginHorizontal: 26,
    flex: 1,
  },
  containerCard: {
    backgroundColor: colors.primaryWhite,
    height: 80,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerInformation: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  containerCity: {
    flexDirection: 'row',
  },
  city: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.quaternaryGrey,
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
  image: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  containerDescription: {
    backgroundColor: colors.primaryWhite,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    padding: 20,
  },
  containerUrl: {
    flexDirection: 'row',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  insects: {
    marginTop: 15,
    marginBottom: 115,
  },
});
