import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../theme/theme';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';

type TProps = {
  enabled: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
};

const ShareLocation = ({ enabled, onToggle, setMessage, disabled }: TProps) => {
  const toggleSwitch = () => {
    onToggle(previousState => !previousState);
    setMessage(false);
  };

  return (
    <View style={styles.container}>
      <ToggleSwitch
        disabled={disabled}
        isOn={enabled}
        onToggle={toggleSwitch}
        size="medium"
        thumbOffStyle={styles.circle}
        offColor={colors.secondaryWhite}
        onColor={colors.secondaryGreen}
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>Compartenos tu ubicación</Text>
        <Text style={styles.text}>
          Deja que Entomology conozca tu ubicación para gestionar tus registros
          de una mejor manera
        </Text>
      </View>
    </View>
  );
};

export default ShareLocation;
