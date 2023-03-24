import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Chart from '../../components/Chart';
import { ScrollView } from 'react-native-gesture-handler';
import Select from '../../components/Select';

const data = [14, 23, 12, 4, 42];
const labels = ['Mariposa', 'Cucarron', 'Cucaracha', 'Lombriz', 'Hormiga'];
const dataLocation = [23, 45, 67, 89, 34];
const labelsLocation = [
  'Medellín',
  'Cali',
  'Cartagena',
  'Popayán',
  'Barranquilla',
];
const dataHabitat = [2, 5, 7, 8, 3];
const labelsHabitat = ['Pantano', 'Desierto', 'Bosque', 'Océano', 'Montaña'];
const FILTER_DATA = ['Cantidad', 'Hábitat', 'Ubicación'];

const Analysis = () => {
  const width = Dimensions.get('window').width;
  const [, setFilter] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.select}>
        <Select placeholder="Filtrar" data={FILTER_DATA} onSelect={setFilter} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Chart
          height={550}
          title={'Cantidad'}
          data={data}
          labels={labels}
          width={data.length > 5 ? width * 1.8 : width * 0.95}
          barColor={(opacity = 1) => `rgba(77, 0, 101, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
        <Chart
          height={550}
          title={'Hábitat'}
          data={dataHabitat}
          labels={labelsHabitat}
          width={dataHabitat.length > 5 ? width * 1.5 : width * 0.95}
          barColor={(opacity = 1) => `rgba(158, 0, 152, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
        <Chart
          height={550}
          title={'Ubicación'}
          data={dataLocation}
          labels={labelsLocation}
          width={dataLocation.length > 5 ? width * 1.5 : width * 0.95}
          barColor={(opacity = 1) => `rgba(0, 0, 185, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analysis;
