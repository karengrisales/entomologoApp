import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import { TInsect, TRegister } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePickerComponent from '../../components/ImagePicker';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import { images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'FormNewInsect'
>;

const FormNewInsect = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [insect, setInsect] = useState('');
  const [url, setUrl] = useState('');
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();

  const onImageLibraryPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    setPickerResponse(result);
  };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  const setNewInsect = async (newInsect: TInsect) => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        data.insects.unshift(newInsect);
        const newInsectJson = JSON.stringify(data);
        await AsyncStorage.setItem('user', newInsectJson);
        navigation.goBack();
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImagePickerComponent onPress={onImageLibraryPress} uri={uri} />
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
            setNewInsect({ name: insect, url, image: uri || images.insect });
          }}
        />
      </View>
    </View>
  );
};

export default FormNewInsect;
