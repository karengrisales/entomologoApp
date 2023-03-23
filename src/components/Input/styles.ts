import { StyleSheet } from 'react-native';
import { colores } from '../../theme/theme';

export const styles = StyleSheet.create({
  containerInput: {
    borderWidth: 2,
    borderRadius: 18,
    borderColor: colores.primaryPurple,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textArea: {
    width: 307,
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    textAlignVertical: 'top',
    padding: 10,
    margin: 10,
  },
  textInput: {
    width: 260,
    fontSize: 18,
    paddingHorizontal: 10,
    height: 50,
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
