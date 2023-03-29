import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { TextInformation } from '../../components/TextInformation';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styles';

interface IProps extends StackScreenProps<RootStackParams, 'Details'> {}

const Details = ({ route }: IProps) => {
  const insect = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerText}>
        <TextInformation title="Especie:" information={insect.name} />
        <TextInformation
          title="Cantidad:"
          information={insect.quantity?.toString() || '0'}
        />
        <TextInformation title="Ubicación:" information={insect.location} />
        <TextInformation
          title="Hábitat:"
          information={insect.habitat || 'No se ha registrado hábitat.'}
        />
        <TextInformation
          title="Observación:"
          information={
            insect.observation || 'No se ha registrado ninguna observación.'
          }
        />
      </View>
    </ScrollView>
  );
};

export default Details;
