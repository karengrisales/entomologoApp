import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navigation/StackNavigator';
import ResumeCard from '../ResumeCard';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TInsect, TInsectRegister, TRegister } from '../../types/types';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Reports'
>;

const Resume = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [records, setRecords] = useState<TInsect[]>([]);
  const [insects, setInsects] = useState<TInsectRegister[]>([]);

  const getTotalCount = (nameInsect: string) => {
    const coincidences = insects.filter(insect => insect.name === nameInsect);
    const iterator = 0;
    const count = coincidences.reduce(
      (accumulator, currentValue) => accumulator + currentValue.quantity,
      iterator,
    );
    return count;
  };

  const getRecords = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        const data: TRegister = JSON.parse(value);
        setRecords(data.insects);
        setInsects(data.records);
      }
    } catch (e) {
      console.warn('No se encontró información');
    }
  };

  useEffect(() => {
    getRecords();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tu resumen</Text>
        {records.map((insect, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Reports')}>
            <ResumeCard
              insect={insect}
              quantity={() => getTotalCount(insect.name)}
              key={index}
              lastItem={records.length - 1 === index}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Resume;
