import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import ImageComponent from '../Image';
import { styles } from './styles';

const CountComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <ImageComponent width={70} height={70} />
        <Text style={styles.text}>Hormiga</Text>
      </View>
      <View style={styles.information}>
        <Button
          onPress={() => console.log('')}
          name="-"
          theme="smallSecondaryButton"
        />
        <Button
          onPress={() => console.log('')}
          name="+"
          theme="smallPrimaryButton"
        />
      </View>
    </View>
  );
};

export default CountComponent;
