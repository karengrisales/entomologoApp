import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Table from '../../components/Table';
import useInsects from '../../context/insects/useInsects';
import { RootStackParams } from '../../navigation/StackNavigator';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const Home = () => {
  const { state } = useInsects();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [search, setSearch] = useState('');
  const names: string[] = ['Nombre', 'Lugar', 'Detalles', 'Editar'];

  return (
    <View style={stylesGlobal.containerGlobal}>
      <Input
        placeholder="Buscar insecto"
        icon={'search'}
        onChangeInput={setSearch}
        value={search}
      />
      {state.insects.length > 0 && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerTable}>
            <Table insect={state.insects} header={names} />
          </View>
        </ScrollView>
      )}
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
