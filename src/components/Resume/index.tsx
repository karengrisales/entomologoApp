import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ResumeCard from '../ResumeCard';
import { styles } from './styles';

const DATA = [
  { name: 'Hormiga', quantity: 0 },
  { name: 'Avispa', quantity: 10 },
  { name: 'Abeja', quantity: 20 },
];

const Resume = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Tu resumen</Text>
        {DATA.map((insect, index) => (
          <ResumeCard
            name={insect.name}
            quantity={insect.quantity}
            key={index}
            lastItem={DATA.length - 1 === index}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Resume;
