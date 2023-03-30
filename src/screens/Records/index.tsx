import React from 'react';
import { View } from 'react-native';
import Resume from '../../components/Resume';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import Button from '../../components/Button';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Records'
>;

const Records = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <Resume />
      <View style={styles.buttons}>
        <Button
          name="Informes"
          onPress={() => navigation.navigate('Records')}
        />
        <Button
          name="Registros"
          theme="secondaryButton"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
      </View>
    </View>
  );
};

export default Records;
