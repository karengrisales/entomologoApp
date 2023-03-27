import React, { useState } from 'react';
import BarChartComponent from '../../components/BarChart';
import Select from '../../components/Select';
import { Dimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import {
  calculateWidth,
  generateDataPie,
  labelsHabitat,
  labelsName,
  labelsQuantity,
} from '../../utils/utils';
import useInsects from '../../context/insects/useInsects';
import { HABITAT_DATA } from '../Edit';
import PieChartComponent from '../../components/PieChart';

const FILTER_DATA = ['Todos', 'Cantidad', 'Hábitat'];
const TITTLES = ['Todos', 'Cantidad', 'Hábitat'];

const Analysis = () => {
  const { state } = useInsects();
  const [filter, setFilter] = useState('Todos');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.select}>
        <Select placeholder="Todos" data={FILTER_DATA} onSelect={setFilter} />
      </View>
      {filter === 'Todos' ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <BarChartComponent
            height={550}
            title={TITTLES[1]}
            data={labelsQuantity(state)}
            labels={labelsName(state)}
            width={calculateWidth(labelsName(state).length)}
            barColor={(opacity = 1) => `rgba(77, 0, 101, ${opacity})`}
            labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
          />
          <PieChartComponent
            data={generateDataPie(state)}
            width={Dimensions.get('window').width}
            title={TITTLES[1]}
          />
          <BarChartComponent
            height={550}
            title={TITTLES[2]}
            data={labelsHabitat(state)}
            labels={HABITAT_DATA}
            width={calculateWidth(HABITAT_DATA.length)}
            barColor={(opacity = 1) => `rgba(158, 0, 152, ${opacity})`}
            labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
          />
        </ScrollView>
      ) : filter === TITTLES[1] ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <BarChartComponent
            height={550}
            title={TITTLES[1]}
            data={labelsQuantity(state)}
            labels={labelsName(state)}
            width={calculateWidth(labelsName(state).length)}
            barColor={(opacity = 1) => `rgba(77, 0, 101, ${opacity})`}
            labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
          />
          <PieChartComponent
            data={generateDataPie(state)}
            width={Dimensions.get('window').width}
            title={TITTLES[1]}
          />
        </ScrollView>
      ) : (
        <BarChartComponent
          height={550}
          title={TITTLES[2]}
          data={labelsHabitat(state)}
          labels={HABITAT_DATA}
          width={calculateWidth(HABITAT_DATA.length)}
          barColor={(opacity = 1) => `rgba(158, 0, 152, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
      )}
    </SafeAreaView>
  );
};

export default Analysis;
