import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../../components/Input';
import ShareLocation from '../../components/ShareLocation';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import Button from '../../components/Button';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TInsect, TRegister } from '../../types/types';
import ImagePickerComponent from '../../components/ImagePicker';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import { images } from '../../assets';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Register'
>;

const initialInsects: TInsect[] = [
  {
    name: 'Abeja',
    url: 'https://es.wikipedia.org/wiki/Anthophila',
    image: images.abeja,
  },
  {
    name: 'Hormiga',
    url: 'https://es.wikipedia.org/wiki/Formicidae',
    image: images.hormiga,
  },
  {
    name: 'Abejorro',
    url: 'https://es.wikipedia.org/wiki/Bombus',
    image: images.abejorro,
  },
  {
    name: 'Avispa',
    url: 'https://es.wikipedia.org/wiki/Avispa',
    image: images.avispa,
  },
  {
    name: 'Otro',
    url: '',
    image: '',
  },
];

const Register = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const isFocused = useIsFocused();
  const [pickerResponse, setPickerResponse] = useState<ImagePickerResponse>();
  const [name, setName] = useState('');
  const [location, setLocation] = useState(false);
  const [message, setMessage] = useState(false);

  const storeUser = async (value: TRegister) => {
    if (location) {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('user', jsonValue);
        location && navigation.navigate('RegisterInsect');
      } catch (e) {
        console.warn('No se pudo almacenar la información');
      }
    } else {
      setMessage(true);
    }
  };

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        navigation.navigate('RegisterInsect');
      }
    } catch (e) {
      console.warn('No se encontró ningun usuario');
    }
  };

  const onImageLibraryPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    setPickerResponse(result);
  };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  useEffect(() => {
    SplashScreen.hide();
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImagePickerComponent
          uri={uri}
          onPress={onImageLibraryPress}
          character="avatar"
        />
      </View>
      <Input value={name} onChangeInput={setName} label="Nombre" />
      <View style={styles.location}>
        <ShareLocation
          enabled={location}
          onToggle={setLocation}
          setMessage={setMessage}
        />
        {message && (
          <Text style={styles.text}>
            Por favor comparte tu ubicación para continuar.
          </Text>
        )}
      </View>
      <View style={[styles.buttons, !message && styles.buttonError]}>
        <Button
          name="Omitir"
          theme="secondaryButton"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
        <Button
          name="Guardar"
          onPress={() => {
            storeUser({
              name,
              location,
              photo: uri || images.avatar,
              insects: initialInsects,
              records: [],
            });
          }}
        />
      </View>
    </View>
  );
};

export default Register;
