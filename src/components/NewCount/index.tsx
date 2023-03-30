import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import { styles } from './styles';

const NewCount = () => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.text}>Nuevo conteo</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          onPress={() => console.log('')}
          name="+"
          theme="smallPrimaryButton"
        />
      </View>
    </View>
  );
};

export default NewCount;
