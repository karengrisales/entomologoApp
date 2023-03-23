import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { RootStackParams } from '../../navigation/StackNavigator';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Edit'>;

const HABITAT_DATA = ['Bosque', 'Océano', 'Desierto', 'Pantano', 'Montaña'];

const Edit = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const [counter, setCounter] = useState(route.params.quantity || 0);
  const [location, setLocation] = useState(route.params.location);
  const [observations, setObservations] = useState(route.params.note || '');
  const [habitat, setHabitat] = useState(route.params.habitat || '');

  return (
    <View style={stylesGlobal.containerGlobal}>
      <View style={styles.counter}>
        <Button
          name="-"
          theme="buttonSecondary"
          onPress={() =>
            setCounter(prevState => (prevState > 0 ? prevState - 1 : 0))
          }
        />
        <Text style={styles.title}>{counter}</Text>
        <Button
          name="+"
          theme="buttonSecondary"
          onPress={() => setCounter(prevState => prevState + 1)}
        />
      </View>
      <Input
        placeholder="Ubicación"
        value={location}
        onChangeInput={setLocation}
      />
      <View style={styles.select}>
        <Select
          placeholder="Hábitat"
          data={HABITAT_DATA}
          onSelect={setHabitat}
        />
      </View>
      <Input
        placeholder="Observaciones (opcionales)"
        value={observations}
        onChangeInput={setObservations}
        multiLine
        numberOfLines={6}
      />
      <View style={styles.save}>
        <Button
          name="Guardar"
          onPress={() => {
            return;
          }}
        />
      </View>
    </View>
  );
};

export default Edit;
