import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { ImageBackground, ScrollView } from 'react-native';
import { TextInformation } from '../../components/TextInformation';
import { RootStackParams } from '../../navigation/StackNavigator';
import { colores } from '../../theme/theme';
import { styles } from './styles';

interface IProps extends StackScreenProps<RootStackParams, 'Details'> {}

const Details = ({ route, navigation }: IProps) => {
  const insect = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTintColor: colores.primaryPurple,
      headerTitleStyle: {
        fontSize: 23,
      },
    });
  });

  return (
    <ImageBackground
      source={require('../../assets/insects.png')}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInformation title="Especie:" information={insect.name} />
        <TextInformation
          title="Cantidad:"
          information={insect.quantity?.toString() || '0'}
        />
        <TextInformation title="Ubicación:" information={insect.location} />
        <TextInformation
          title="Hábitat:"
          information={insect.habitat || 'No se ha registrado hábitat'}
        />
        <TextInformation
          title="Nota:"
          information={insect.note || 'No se ha registrado nota'}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default Details;
