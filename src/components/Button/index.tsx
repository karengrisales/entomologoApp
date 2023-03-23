import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export type TProps = {
  name?: string;
  icon?: string;
  theme?: 'buttonPrimary' | 'buttonSecondary' | 'buttonIcon';
  onPress: () => void;
  color?: string;
  size?: number;
};
const Button = ({
  name,
  theme = 'buttonPrimary',
  onPress,
  icon,
  color = '#000',
  size = 20,
}: TProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
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
            <Text
              style={
                theme === 'buttonPrimary'
                  ? styles.titlePrimary
                  : styles.titleSecondary
              }>
              {name}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
