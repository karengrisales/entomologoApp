import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export type TProps = {
  name: string;
  icon?: string;
  theme?:
    | 'primaryButton'
    | 'secondaryButton'
    | 'tertiaryButton'
    | 'quaternaryButton'
    | 'smallPrimaryButton'
    | 'smallSecondaryButton';
  onPress: () => void;
  color?: string;
  size?: number;
  disabled?: boolean;
};

const stylesButton = {
  primaryButton: styles.primaryButton,
  secondaryButton: styles.secondaryButton,
  tertiaryButton: styles.tertiaryButton,
  quaternaryButton: styles.quaternaryButton,
  smallPrimaryButton: styles.smallPrimaryButton,
  smallSecondaryButton: styles.smallSecondatyButton,
};

const stylesTitle = {
  primaryButton: styles.titlePrimary,
  secondaryButton: styles.titlePrimary,
  tertiaryButton: styles.titlePrimary,
  quaternaryButton: styles.titleSecondary,
  smallPrimaryButton: styles.titleSmallPrimary,
  smallSecondaryButton: styles.titleSmallPrimary,
};

const Button = ({
  name,
  theme = 'primaryButton',
  onPress,
  disabled,
}: TProps) => {
  const button = stylesButton[theme];
  const title = stylesTitle[theme];
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.5}
        disabled={disabled}>
        <View
          style={[
            button,
            theme === 'smallPrimaryButton' || theme === 'smallSecondaryButton'
              ? styles.smallButton
              : styles.button,
          ]}>
          <Text style={[styles.title, title]}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
