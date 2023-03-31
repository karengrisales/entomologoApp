import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { images } from '../../assets';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import { TInsect, TRegister } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'FormInsect'
>;

const FormInsect = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [insects, setInsects] = useState<TInsect[]>([]);
  const [url, setUrl] = useState('');
  const [option, setOption] = useState('');

  const handleSelect = () => {
    if (option === 'Otro') {
      navigation.navigate('FormNewInsect');
    }
    insects.find(insect =>
      insect.name === option ? setUrl(insect.url) : null,
    );
  };

  const getInsects = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        setInsects(data.insects);
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  useEffect(() => {
    handleSelect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option]);

  useEffect(() => {
    getInsects();
  }, []);

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent
          width={120}
          height={120}
          theme="imageCircleBorder"
          uri={images.hormiga}
        />
      </View>
      <View style={styles.inputs}>
        <Select
          label="Nombre especie"
          placeholder="Seleccionar"
          data={insects.map(insect => insect.name)}
          onSelect={setOption}
        />
        <Input
          label="Información adicional"
          placeholder="URL"
          value={url}
          onChangeInput={setUrl}
          editable
        />
      </View>
      {option && (
        <View style={styles.button}>
          <Button
            name="Seleecionar"
            onPress={() => {
              navigation.navigate('Count', { name: option, url });
            }}
          />
        </View>
      )}
    </View>
  );
};

export default FormInsect;
