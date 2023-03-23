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
    { name: 'Mariposa', location: 'Popayán' },
    { name: 'Mariquita', location: 'Medellín' },
    { name: 'Lombriz', location: 'Bógota' },
    { name: 'Cucarrón', location: 'Cali' },
    { name: 'Grillo', location: 'Cartagena' },
    { name: 'Oruga', location: 'Barranquilla' },
    { name: 'Mariposa', location: 'Popayán' },
    { name: 'Mariquita', location: 'Medellín' },
    { name: 'Lombriz', location: 'Bógota' },
    { name: 'Cucarrón', location: 'Cali' },
    { name: 'Grillo', location: 'Cartagena' },
    { name: 'Oruga', location: 'Barranquilla' },
    { name: 'Mariposa', location: 'Popayán' },
    { name: 'Mariquita', location: 'Medellín' },
    { name: 'Lombriz', location: 'Bógota' },
    { name: 'Cucarrón', location: 'Cali' },
    { name: 'Grillo', location: 'Cartagena' },
    { name: 'Oruga', location: 'Barranquilla' },
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
