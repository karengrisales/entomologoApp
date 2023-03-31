import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../navigation/StackNavigator';
import Button from '../Button';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'FormInsect'
>;

const NewCount = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.text}>Nuevo conteo</Text>
      </View>
      <View style={styles.containerButton}>
        <Button
          onPress={() => navigation.navigate('FormInsect')}
          name="+"
          theme="smallPrimaryButton"
        />
      </View>
    </View>
  );
};

export default NewCount;
