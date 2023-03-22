import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export type Props = {
  name?: string;
  icon?: string;
  theme?: 'buttonPrimary' | 'buttonSecondary' | 'buttonIcon';
  onpress?: () => void;
  color?: string;
  size?: number;
};
const Button = ({
  name,
  theme = 'buttonPrimary',
  onpress,
  icon,
  color = '#000',
  size = 18,
}: Props) => {
  return (
    <View>
      <TouchableOpacity onPress={onpress} activeOpacity={0.5}>
        <View
          style={
            theme === 'buttonPrimary'
              ? styles.buttonPrimary
              : theme === 'buttonSecondary'
              ? styles.buttonSecondary
              : styles.buttonIcon
          }>
          {icon ? (
            <Icon name={icon} size={size} color={color} />
          ) : (
            <Text style={styles.title}>{name}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
