import { colors } from './../../theme/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 110,
    height: 50,
    borderRadius: 30,
    margin: 5,
    paddingHorizontal: 13,
  },
  primaryButton: {
    backgroundColor: colors.primaryWhite,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  secondaryButton: {
    backgroundColor: colors.primaryGreen,
    borderWidth: 2,
    borderColor: colors.primaryGrey,
  },
  tertiaryButton: {
    backgroundColor: colors.primaryWhite,
    borderWidth: 2,
    borderColor: colors.primaryGrey,
  },
  quaternaryButton: {
    backgroundColor: colors.secondaryGreen,
    borderWidth: 2,
    borderColor: colors.primaryGrey,
  },
  smallButton: {
    marginHorizontal: 10,
    width: 53,
    height: 53,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallPrimaryButton: {
    backgroundColor: colors.primaryGreen,
  },
  smallSecondatyButton: {
    backgroundColor: colors.primaryBlue,
  },
  urlButton: {},
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  titlePrimary: {
    color: colors.secondaryGreen,
  },
  titleSecondary: {
    color: colors.primaryWhite,
  },
  titleSmallPrimary: {
    color: colors.primaryBlack,
    fontSize: 25,
  },
  titleUrl: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    color: colors.quaternaryGrey,
  },
  disabled: {
    opacity: 0.4,
  },
});
