import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { TRegister } from '../../types/types';
import Button from '../Button';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'FormInsect'
>;

const NewCount = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [user, setUser] = useState<TRegister>();

  const getUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        setUser(data);
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.text}>Nuevo conteo</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          disabled={user ? false : true}
          onPress={() => navigation.navigate('FormInsect')}
          name="+"
          theme="smallPrimaryButton"
        />
      </View>
    </View>
  );
};

export default NewCount;
