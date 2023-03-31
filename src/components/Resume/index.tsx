import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParams } from '../../navigation/StackNavigator';
import ResumeCard from '../ResumeCard';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Reports'
>;
const DATA = [
  { name: 'Hormiga', quantity: 0 },
  { name: 'Avispa', quantity: 10 },
  { name: 'Abeja', quantity: 20 },
];

const Resume = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tu resumen</Text>
        {DATA.map((insect, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Reports')}>
            <ResumeCard
              name={insect.name}
              quantity={insect.quantity}
              key={index}
              lastItem={DATA.length - 1 === index}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Resume;
