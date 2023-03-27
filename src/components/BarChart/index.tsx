import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { colores } from '../../theme/theme';
import { styles } from './styles';

type TProps = {
  title: string;
  labels: string[];
  data: number[];
  height: number;
  width: number;
  backgroundGradientFrom?: string;
  backgroundGradientTo?: string;
  barColor:
    | ((opacity: number, index?: number | undefined) => string)
    | undefined;
  labelColor:
    | ((opacity: number, index?: number | undefined) => string)
    | undefined;
};

const BarChartComponent = ({
  title,
  labels,
  data,
  height,
  width,
  backgroundGradientFrom = colores.white,
  backgroundGradientTo = colores.white,
  barColor,
  labelColor,
}: TProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <BarChart
          data={{
            labels,
            datasets: [
              {
                data,
              },
            ],
          }}
          width={width}
          height={height}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundGradientFrom: backgroundGradientFrom,
            backgroundGradientTo: backgroundGradientTo,
            decimalPlaces: 1,
            fillShadowGradientOpacity: 1,
            verticalLabelRotation: 30,
            color: barColor,
            labelColor: labelColor,
            style: {
              borderRadius: 16,
            },
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BarChartComponent;
