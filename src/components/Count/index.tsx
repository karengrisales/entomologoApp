import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import ImageComponent from '../Image';
import { styles } from './styles';

type TProps = {
  name: string;
  image: string;
};

const CountComponent = ({ name, image }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <ImageComponent width={70} height={70} uri={image} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.information}>
        <Button onPress={() => {}} name="-" theme="smallSecondaryButton" />
        <Button onPress={() => {}} name="+" theme="smallPrimaryButton" />
      </View>
    </View>
  );
};

export default CountComponent;
