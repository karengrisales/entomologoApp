import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/Card';
import NewCount from '../../components/NewCount';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TInsectRegister, TRegister } from '../../types/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'RegisterInsect'
>;

const RegisterInsect = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [records, setRecords] = useState<TInsectRegister[]>([]);
  const [user, setUser] = useState<TRegister>();

  const getRecords = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        setUser(data);
        setRecords(data.records);
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  useEffect(() => {
    getRecords();
  }, [isFocused]);

  return (
    <View style={styles.containerGlobal}>
      {!user && (
        <Text style={styles.text}>
          Por favor registrate para poder realizar un nuevo conteo
        </Text>
      )}
      <View
        style={
          records.length === 0 && user ? styles.containerZero : styles.container
        }>
        <NewCount />
        <FlatList
          data={records}
          renderItem={({ item }) => <Card insect={item} />}
          showsVerticalScrollIndicator={false}
          style={styles.insects}
        />
        <View style={styles.buttons}>
          <Button
            name="Informes"
            theme="secondaryButton"
            onPress={() => navigation.navigate('Records')}
          />
          <Button
            name="Registros"
            onPress={() => navigation.navigate('RegisterInsect')}
          />
        </View>
      </View>
    </View>
  );
};

export default RegisterInsect;
