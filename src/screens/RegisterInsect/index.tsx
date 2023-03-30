import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import Card from '../../components/Card';
import NewCount from '../../components/NewCount';
import useInsects from '../../contexts/insects/useInsects';
import { RootStackParams } from '../../navigation/StackNavigator';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'RegisterInsect'
>;

const RegisterInsect = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const { state } = useInsects();

  return (
    <View style={styles.container}>
      <NewCount />
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
          name="Registros"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
      </View>
    </View>
  );
};

export default RegisterInsect;
