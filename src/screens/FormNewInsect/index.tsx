import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import { TInsect, TRegister } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormNewInsect = () => {
  const [insect, setInsect] = useState('');
  const [url, setUrl] = useState('');

  const setNewInsect = async (newInsect: TInsect) => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        data.insects.unshift(newInsect);
        const newInsectJson = JSON.stringify(data);
        console.log(newInsectJson);
        await AsyncStorage.setItem('user', newInsectJson);
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent width={120} height={120} theme="imageCircleBorder" />
      </View>
      <View style={styles.inputs}>
        <Input
          label="Nombre especie"
          value={insect}
          onChangeInput={setInsect}
        />
        <Input
          label="Información adicional"
          placeholder="URL"
          value={url}
          onChangeInput={setUrl}
        />
      </View>
      <View style={styles.button}>
        <Button
          name="Guardar"
          onPress={() => {
            setNewInsect({ name: insect, url });
          }}
        />
      </View>
    </View>
  );
};

export default FormNewInsect;
