import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Reports'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParams, 'Reports'>;

const Reports = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { params } = useRoute<ProfileScreenRouteProp>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cards}>
        {params.insectRegister.map((insect, index) => (
          <Card insect={insect} key={index} url={params.insect.url} dropdown />
        ))}
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          name="Informes"
          theme="secondaryButton"
          onPress={() => navigation.navigate('Records')}
        />
        <Button
          name="Nuevo conteo"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
      </View>
    </View>
  );
};

export default Reports;
