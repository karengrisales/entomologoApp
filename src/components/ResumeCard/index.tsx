import React from 'react';
import { Text, View } from 'react-native';
import ImageComponent from '../Image';
import { styles } from './styles';

type TProps = {
  name: string;
  quantity: number;
  lastItem: boolean;
};

const ResumeCard = ({ name, quantity, lastItem }: TProps) => {
  return (
    <View style={[styles.container, lastItem && styles.lastContainer]}>
      <View style={styles.content}>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
      <ImageComponent theme="imageCircle" width={50} height={50} />
    </View>
  );
};

export default ResumeCard;
