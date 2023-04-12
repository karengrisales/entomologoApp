import React from 'react';
import { Text, View } from 'react-native';
import ImageComponent from '../Image';
import { styles } from './styles';
import { TInsect } from '../../types/types';

type TProps = {
  insect: TInsect;
  lastItem: boolean;
  quantity: () => number;
};

const ResumeCard = ({ insect, lastItem, quantity }: TProps) => {
  return (
    <View style={[styles.container, lastItem && styles.lastContainer]}>
      <View style={styles.content}>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{quantity()}</Text>
        </View>
        <Text style={styles.text}>{insect.name}</Text>
      </View>
      <ImageComponent
        theme="imageCircleBorder"
        width={50}
        height={50}
        uri={insect.image}
      />
    </View>
  );
};

export default ResumeCard;
