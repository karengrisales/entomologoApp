import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export type TProps = {
  title: string;
  information: string;
};

export const TextInformation = ({ title, information }: TProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {title} <Text style={styles.information}>{information}</Text>
      </Text>
    </View>
  );
};
