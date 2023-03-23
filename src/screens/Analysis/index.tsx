import React from 'react';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Chart from '../../components/Chart';
import { ScrollView } from 'react-native-gesture-handler';

const data = [23, 45, 67, 89, 34];
const labels = ['Mariposa', 'Cucarron', 'Cucaracha', 'Lombriz', 'Hormiga'];

const Analysis = () => {
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Chart
          height={450}
          title={'Cantidad'}
          data={data}
          labels={labels}
          width={width * 0.95}
          barColor={(opacity = 1) => `rgba(77, 0, 101, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
        <Chart
          height={450}
          title={'Hábitat'}
          data={data}
          labels={labels}
          width={width * 0.95}
          barColor={(opacity = 1) => `rgba(158, 0, 152, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
        <Chart
          height={450}
          title={'Ubicación'}
          data={data}
          labels={labels}
          width={width * 0.95}
          barColor={(opacity = 1) => `rgba(0, 0, 185, ${opacity})`}
          labelColor={(opacity = 1) => `rgba(0, 0, 0, ${opacity})`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Analysis;
