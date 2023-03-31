import { StyleSheet } from 'react-native';
import { colores, colors } from '../../theme/theme';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colores.black,
    paddingLeft: 30,
    marginBottom: 5,
  },
  containerInput: {
    borderRadius: 28,
    backgroundColor: colors.primaryWhite,
  },
  textArea: {
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    textAlignVertical: 'top',
    paddingVertical: 10,
    paddingHorizontal: 40,
    margin: 10,
    color: colors.secondaryGrey,
  },
  textInput: {
    fontSize: 16,
    paddingLeft: 40,
    height: 50,
    color: colors.secondaryGrey,
  },
  editable: {
    opacity: 0.5,
  },
});
