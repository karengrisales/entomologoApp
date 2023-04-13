import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Linking } from 'react-native';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ImageComponent from '../../components/Image';
import useInsects from '../../contexts/insects/useInsects';
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
  const { state } = useInsects();
  const handleNavigatorPress = () => {
    Linking.openURL(
      params.insect.url.includes('http')
        ? params.insect.url
        : `http://${params.insect.url}`,
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.cards}>
        <View style={styles.containerCard}>
          <View style={styles.containerInformation}>
            <View style={styles.quantity}>
              <Text style={styles.quantityText}>{params.quantity}</Text>
            </View>
            <View>
              <Text style={styles.specie}>{params.insect.name}</Text>
              <Text style={styles.city}> 2 ciudades</Text>
              <Text style={styles.city}>00/00/0000 al 00/00/0000</Text>
            </View>
          </View>
          <View style={styles.image}>
            <ImageComponent width={70} height={70} uri={params.insect.image} />
          </View>
        </View>
        <View style={styles.map} />
        <View style={styles.containerDescription}>
          <Text style={styles.city}>
            {state.insects[0].observation}
            {'\n'}
          </Text>
          <View style={styles.containerUrl}>
            <Text>Url: </Text>
            <Button
              name="más"
              onPress={handleNavigatorPress}
              theme="urlButton"
            />
          </View>
        </View>
        {params.insectRegister.map((insect, index) => (
          <Card insect={insect} key={index} />
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
