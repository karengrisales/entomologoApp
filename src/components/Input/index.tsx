import React from 'react';
import { TouchableOpacity, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';
import { colores } from '../../theme/theme';

type TProps = {
  placeholder: string;
  onChangeInput: React.Dispatch<React.SetStateAction<string>>;
  icon?: string;
  numberOfLines?: number;
  multiLine?: boolean;
  value: string;
};

const Input = ({
  placeholder,
  onChangeInput,
  icon,
  numberOfLines,
  multiLine = false,
  value,
}: TProps) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder={placeholder}
        numberOfLines={numberOfLines}
        multiline={multiLine}
        onChangeText={onChangeInput}
        style={multiLine ? styles.textArea : styles.textInput}
        value={value}
      />
      {icon && (
        <TouchableOpacity style={styles.containerIcon}>
          <Icon
            name={icon}
            size={25}
            style={styles.icon}
            color={colores.primaryPurple}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
