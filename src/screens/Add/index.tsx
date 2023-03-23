import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useInsects from '../../contexts/insects/useInsects';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

const Add = () => {
  const {
    state,
    actions: { setInsect },
  } = useInsects();
  const [nameSpecie, setNameSpecie] = useState('');
  const [locationSpecie, setLocationSpecie] = useState('');
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    const coincidence = state.insects.find(insect => {
      if (insect.name.toUpperCase() === nameSpecie.toUpperCase()) {
        return insect;
      }
    });

    if (coincidence === undefined) {
      setInsect({
        name: nameSpecie,
        location: locationSpecie,
      });
      setSubmit(true);
      setTimeout(() => {
        setSubmit(false);
      }, 3000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    setNameSpecie('');
    setLocationSpecie('');
  };

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
          <Button
            onPress={handleSubmit}
            disabled={nameSpecie && locationSpecie ? false : true}
            name="Agregar"
          />
        </View>
        {submit && (
          <Text style={styles.textSubmit}>Se ha registrado con éxito</Text>
        )}
        {error && (
          <Text style={styles.textError}>
            Esta especie ya se encuentra registrada
          </Text>
        )}
      </ImageBackground>
    </View>
  );
};

export default Add;
