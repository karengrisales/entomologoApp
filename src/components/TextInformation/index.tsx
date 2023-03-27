import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export type TProps = {
  title: string;
  information: string;
  size?: number;
};

export const TextInformation = ({ title, information, size = 25 }: TProps) => {
  return (
    <View>
      <Text style={[styles.text, { fontSize: size }]}>
        {title}{' '}
        <Text style={[styles.information, { fontSize: size }]}>
          {information}
        </Text>
      </Text>
    </View>
  );
};
