import { StyleSheet } from 'react-native';
import { colores, colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colores.black,
    paddingLeft: 30,
    marginBottom: 5,
  },
  container: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 28,
    backgroundColor: colors.primaryWhite,
    flex: 1,
    paddingLeft: 20,
  },
  textButton: {
    color: colors.secondaryGrey,
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 30,
  },
  dropdown: {
    borderRadius: 28,
    marginTop: 10,
  },
  rowText: {
    color: colors.secondaryGrey,
    fontSize: 16,
    paddingLeft: 40,
    textAlign: 'left',
  },
});
