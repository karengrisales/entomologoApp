import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Table from '../../components/Table';
import useInsects from '../../contexts/insects/useInsects';
import { RootStackParams } from '../../navigation/StackNavigator';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';
import { TInsect } from '../../types/types';

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const Home = () => {
  const { state } = useInsects();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [search, setSearch] = useState('');
  const names: string[] = ['Nombre', 'Lugar', 'Detalles', 'Editar'];
  const [filter, setFilter] = useState<TInsect[]>([]);
  const [isMatch, setIsMatch] = useState(true);
  const firstRender = useRef(false);

  const filterInsects = () => {
    setFilter([]);
    if (!search) {
      setFilter([]);
      return;
    }
    state.insects.filter(insect => {
      if (insect.name.toUpperCase().includes(search.toUpperCase())) {
        setFilter(prevState => [...prevState, insect]);
      }
    });
  };

  useEffect(() => {
    if (firstRender.current) {
      if (filter.length === 0 && search) {
        setIsMatch(false);
        return;
      }
      setIsMatch(true);
    } else {
      firstRender.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <View style={stylesGlobal.containerGlobal}>
      <View style={styles.input}>
        <Input
          placeholder="Buscar insecto"
          icon={'search'}
          onChangeInput={setSearch}
          value={search}
          onPress={filterInsects}
        />
      </View>
      {!isMatch && filter.length === 0 && (
        <Text style={styles.emptyState}>
          No hubo resultados de tu búsqueda, intenta con otra especie de
          insecto.
        </Text>
      )}
      {isMatch && (state.insects.length > 0 || filter.length > 0) && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerTable}>
            <Table
              insect={filter.length > 0 ? filter : state.insects}
              header={names}
            />
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
