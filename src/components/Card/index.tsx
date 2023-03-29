import React from 'react';
import { Text, View } from 'react-native';
import { TInsect } from '../../types/types';
import ImageComponent from '../Image';
import { styles } from './styles';

type TProps = {
  insect: TInsect;
};

const Card = ({ insect }: TProps) => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerInformation}>
        <View style={styles.quantity}>
          <Text style={styles.quantityText}>{insect.quantity}</Text>
        </View>
        <View>
          <Text style={styles.specie}>{insect.name}</Text>
          <Text style={styles.city}>
            <Text style={styles.date}>{insect.location}</Text>14/12/1994
          </Text>
        </View>
      </View>
      <View style={styles.image}>
        <ImageComponent width={70} height={70} />
      </View>
    </View>
  );
};

export default Card;
