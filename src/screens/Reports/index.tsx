import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Linking } from 'react-native';
import { Image, Text, View } from 'react-native';
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

const Reports = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { state } = useInsects();
  const handleNavigatorPress = () => {
    Linking.openURL('https://www.google.com/');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.containerInformation}>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>509</Text>
          </View>
          <View>
            <Text style={styles.specie}>Hormiga</Text>
            <Text style={styles.city}> 2 ciudades</Text>
            <Text style={styles.city}>00/00/0000 al 00/00/0000</Text>
          </View>
        </View>
        <View style={styles.image}>
          <ImageComponent width={70} height={70} />
        </View>
      </View>
      <Image
        source={require('../../assets/insects.png')}
        style={{ height: 188, width: 376 }}
      />
      <View style={styles.containerDescription}>
        <Text style={styles.city}>
          Las hormigas, conocidas a nivel científico como Messor capitatus, son
          unos de los insectos más comunes. Concretamente pertenecen a una
          familia de insectos eusociales que, como las avispas y las abejas,
          forman parte del orden de los himenópteros. {'\n'}
        </Text>
        <View style={styles.containerUrl}>
          <Text>Url: </Text>
          <Button name="más" onPress={handleNavigatorPress} theme="urlButton" />
        </View>
      </View>
      <FlatList
        data={state.insects}
        renderItem={({ item }: any) => <Card insect={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.insects}
      />
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
