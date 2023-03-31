import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import CountComponent from '../../components/Count';
import Input from '../../components/Input';
import { styles } from './styles';

const Count = () => {
  const [observation, setObservation] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <View style={styles.containerCount}>
          <Text style={styles.count}>00</Text>
        </View>
      </View>
      <CountComponent />
      <Input
        placeholder="Agregar comentario"
        value={observation}
        onChangeInput={setObservation}
        multiLine
        numberOfLines={6}
      />
      <View style={styles.containerButton}>
        <Button name="Guardar" onPress={() => console.log('hola')} />
      </View>
    </View>
  );
};

export default Count;
