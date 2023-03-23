import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

const Add = () => {
  const [nameSpecie, setNameSpecie] = useState('');
  const [locationSpecie, setLocationSpecie] = useState('');

  return (
    <View style={stylesGlobal.containerGlobal}>
      <ImageBackground
        source={require('../../assets/insects.png')}
        style={styles.containerImage}>
        <View style={styles.containerInputs}>
          <Input
            placeholder="Nombre de la especie"
            value={nameSpecie}
            onChangeInput={setNameSpecie}
          />
        </View>
        <View style={styles.containerInputs}>
          <Input
            placeholder="Ubicación"
            value={locationSpecie}
            onChangeInput={setLocationSpecie}
          />
        </View>
        <View style={styles.containerButton}>
          <Button onPress={() => {}} name="Agregar" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Add;
