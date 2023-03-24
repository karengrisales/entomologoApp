import React, { useState } from 'react';
import BarChartComponent from '../../components/BarChart';
import Select from '../../components/Select';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {
  calculateWidth,
  labelsHabitat,
  labelsName,
  labelsQuantity,
} from '../../utils/utils';
import useInsects from '../../context/insects/useInsects';
import { HABITAT_DATA } from '../Edit';

const FILTER_DATA = ['Cantidad', 'Hábitat'];
const TITTLES = ['Cantidad', 'Hábitat'];

const Analysis = () => {
  const { state } = useInsects();
  const [, setFilter] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.select}>
        <Select placeholder="Filtrar" data={FILTER_DATA} onSelect={setFilter} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BarChartComponent
          height={550}
          title={TITTLES[0]}
          data={labelsQuantity(state)}
          labels={labelsName(state)}
          width={calculateWidth(labelsName(state).length)}
          barColor={(opacity = 1) => `rgba(77, 0, 101, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
        <BarChartComponent
          height={550}
          title={TITTLES[1]}
          data={labelsHabitat(state)}
          labels={HABITAT_DATA}
          width={calculateWidth(HABITAT_DATA.length)}
          barColor={(opacity = 1) => `rgba(158, 0, 152, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analysis;
