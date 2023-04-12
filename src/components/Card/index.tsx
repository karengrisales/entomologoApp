import React from 'react';
import { Text, View } from 'react-native';
import { TInsectRegister } from '../../types/types';
import ImageComponent from '../Image';
import { styles } from './styles';

type TProps = {
  insect: TInsectRegister;
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
            <Text style={styles.city}>{insect.location} </Text>
            {insect.date}
          </Text>
        </View>
      </View>
      <View style={styles.image}>
        <ImageComponent width={70} height={70} uri={insect.image} />
      </View>
    </View>
  );
};

export default Card;
