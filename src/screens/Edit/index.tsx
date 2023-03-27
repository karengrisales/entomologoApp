import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { TextInformation } from '../../components/TextInformation';
import useInsects from '../../contexts/insects/useInsects';
import useLocation from '../../contexts/location/useLocation';
import { useLocationReverse } from '../../hooks/useLocationReverse';
import { RootStackParams } from '../../navigation/StackNavigator';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Edit'>;
type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Edit'>;

export const HABITAT_DATA = [
  'Bosque',
  'Océano',
  'Desierto',
  'Pantano',
  'Montaña',
];

const Edit = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const route = useRoute<ProfileScreenRouteProp>();
  const {
    actions: { editInsect },
  } = useInsects();
  const { state: stateLocation } = useLocation();
  const [counter, setCounter] = useState(route.params.quantity || 0);
  const [observation, setObservation] = useState(
    route.params.observation || '',
  );
  const [habitat, setHabitat] = useState(route.params.habitat || '');
  const { results } = useLocationReverse(
    stateLocation.position.coords.latitude,
    stateLocation.position.coords.longitude,
  );

  const handleSubmit = () => {
    editInsect({
      name: route.params.name,
      quantity: counter,
      observation,
      habitat,
      location: results[0]?.city,
    });
    navigation.goBack();
  };

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
      <TextInformation
        title="Ubicación:"
        information={results[0]?.city}
        size={20}
      />
      <View style={styles.select}>
        <Select
          defaultValue={habitat}
          placeholder="Hábitat"
          data={HABITAT_DATA}
          onSelect={setHabitat}
        />
      </View>
      <Input
        placeholder="Observaciones (opcionales)"
        value={observation}
        onChangeInput={setObservation}
        multiLine
        numberOfLines={6}
      />
      <View style={styles.save}>
        <Button name="Guardar" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Edit;
