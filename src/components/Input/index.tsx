import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { styles } from './styles';
import { colores } from '../../theme/theme';

type TProps = {
  placeholder?: string;
  label?: string;
  onChangeInput: React.Dispatch<React.SetStateAction<string>>;
  icon?: string;
  numberOfLines?: number;
  multiLine?: boolean;
  value: string;
  onPress?: () => void;
};

const Input = ({
  placeholder,
  label,
  onChangeInput,
  numberOfLines,
  multiLine = false,
  value,
}: TProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder={placeholder}
          numberOfLines={numberOfLines}
          multiline={multiLine}
          onChangeText={onChangeInput}
          style={multiLine ? styles.textArea : styles.textInput}
          value={value}
          cursorColor={colores.primaryPurple}
        />
      </View>
    </View>
  );
};

export default Input;
