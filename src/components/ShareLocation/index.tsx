import React, { useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { colors } from '../../theme/theme';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';

const ShareLocation = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ToggleSwitch
        isOn={isEnabled}
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
