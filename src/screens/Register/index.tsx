import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import ShareLocation from '../../components/ShareLocation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import Button from '../../components/Button';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TInsect, TInsectRegister } from '../../types/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Register'
>;

type TRegister = {
  name: string;
  photo?: string;
  location: boolean;
  insects: TInsect[];
  records: TInsectRegister[];
};

const Register = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [name, setName] = useState('');
  const [location, setLocation] = useState(false);

  const storeUser = async (value: TRegister) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user', jsonValue);
    } catch (e) {
      console.warn('No se pudo almacenar la información');
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

  useEffect(() => {
    SplashScreen.hide();
    getUser();
  });

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent theme="imageCircle" width={120} height={120} />
      </View>
      <Input value={name} onChangeInput={setName} label="Nombre" />
      <View style={styles.location}>
        <ShareLocation enabled={location} onToggle={setLocation} />
      </View>
      <View style={styles.buttons}>
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
              insects: [
                {
                  name: 'Abeja',
                  url: 'https://es.wikipedia.org/wiki/Anthophila',
                },
                {
                  name: 'Hormiga',
                  url: 'https://es.wikipedia.org/wiki/Formicidae',
                },
                {
                  name: 'Abejorro',
                  url: 'https://es.wikipedia.org/wiki/Bombus',
                },
                {
                  name: 'Avispa',
                  url: 'https://es.wikipedia.org/wiki/Avispa',
                },
              ],
              records: [],
            });
            navigation.navigate('RegisterInsect');
          }}
        />
      </View>
    </View>
  );
};

export default Register;
