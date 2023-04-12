import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import CountComponent from '../../components/Count';
import Input from '../../components/Input';
import { styles } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigator';
import { TInsectRegister, TRegister } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Count'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Count'>;

const Count = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { params } = useRoute<ProfileScreenRouteProp>();
  const [observation, setObservation] = useState('');
  const [count, setCount] = useState(0);

  const setRecord = async (newRecord: TInsectRegister) => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        data.records.unshift(newRecord);
        const newRecordJson = JSON.stringify(data);
        await AsyncStorage.setItem('user', newRecordJson);
        navigation.navigate('RegisterInsect');
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.containerCount}>
          <Text style={styles.count}>
            {count < 10 ? `0${count}` : `${count}`}
          </Text>
        </View>
      </View>
      <CountComponent
        name={params.name}
        image={params.image}
        setCount={setCount}
      />
      <Input
        placeholder="Agregar comentario"
        value={observation}
        onChangeInput={setObservation}
        multiLine
        numberOfLines={6}
      />
      <View style={styles.containerButton}>
        <Button
          name="Guardar"
          onPress={() =>
            setRecord({
              name: params.name,
              image: params.image,
              observation,
              date: new Date().toLocaleDateString('en-GB'),
              location: 'Bogotá',
              quantity: count,
            })
          }
        />
      </View>
    </View>
  );
};

export default Count;
