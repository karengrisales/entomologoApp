import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Table from '../../components/Table';
import { RootStackParams } from '../../navigation/StackNavigator';
import { stylesGlobal } from '../../theme/theme';
import { TInsect } from '../../types/types';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const Home = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [search, setSearch] = useState('');
  const names: string[] = ['Nombre', 'Lugar', 'Detalles', 'Editar'];
  const data: TInsect[] = [
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Las mariposas son un tipo de insecto muy popular por los llamativos colores que tiñen sus alas y por su vuelo vacilante cuando se acerca el buen tiempo. Se han descrito unas 24.000 especies diferentes. Como todos los insectos cuentan con seis patas, dos alas y un cuerpo dividido en tres partes: cabeza, tórax y abdomen.Su boca tiene forma de tubo pues es la herramienta con la que succionan los nutrientes de las plantas para alimentarse a través de una larga lengua enrollada sobre si misma que recibe el nombre de espiritrompa.  El único lugar en el mundo donde no se encuentran mariposas es en la Antártida.',
      quantity: 23,
    },
    {
      name: 'Gusano',
      location: 'Medellín',
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
    {
      name: 'Mariposa',
      location: 'Popayán',
      habitat: 'Aire',
      note: 'Insecto hermoso, precioso, mi amor',
      quantity: 23,
    },
  ];

  return (
    <View style={stylesGlobal.containerGlobal}>
      <Input
        placeholder="Buscar insecto"
        icon={'search'}
        onChangeInput={setSearch}
        value={search}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTable}>
          <Table insect={data} header={names} />
        </View>
      </ScrollView>
      <View style={styles.containerButton}>
        <Button
          theme="buttonSecondary"
          name={'+'}
          onPress={() => navigation.navigate('Add')}
        />
      </View>
    </View>
  );
};

export default Home;
