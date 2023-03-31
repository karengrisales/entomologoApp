import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { images } from '../../assets';
import { TRegister } from '../../types/types';
import ImageComponent from '../Image';

const HeaderComponent = () => {
  const [photo, setPhoto] = useState<TRegister>();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const result = JSON.parse(value);
        setPhoto(result);
      }
    } catch (e) {
      console.warn('No se encuentra el usuario');
    }
  };

  useEffect(() => {
    getData();
  }, [photo]);

  return (
    <ImageComponent
      width={65}
      height={65}
      uri={photo?.photo || images.avatar}
      character="avatar"
    />
  );
};

export default HeaderComponent;
