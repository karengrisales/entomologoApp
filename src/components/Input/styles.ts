import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 2,
    borderRadius: 18,
    borderColor: colores.primaryPurple,
    flexDirection: 'row',
    marginVertical: 10,
  },
  textArea: {
    width: 307,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
  textInput: {
    width: 260,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  containerIcon: {
    width: 50,
    borderRadius: 18,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});
