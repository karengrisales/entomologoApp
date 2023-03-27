import React from 'react';
import { ScrollView, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Text } from 'react-native-paper';
import { TPieChart } from '../../types/types';
import { styles } from './styles';

type TProps = {
  data: TPieChart[];
  width: number;
  title: string;
};

const PieChartComponent = ({ data, width, title }: TProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <PieChart
          data={data}
          width={width}
          height={270}
          accessor={'quantity'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          chartConfig={{
            color: (opacity = 1) => `rgba(158, 0, 152, ${opacity})`,
          }}
          absolute
        />
      </View>
    </ScrollView>
  );
};

export default PieChartComponent;
