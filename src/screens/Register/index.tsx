import React, { useState } from 'react';
import { View } from 'react-native';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import ShareLocation from '../../components/ShareLocation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigator';
import Button from '../../components/Button';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Register'
>;

const Register = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [name, setName] = useState('');

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent theme="imageCircle" width={120} height={120} />
      </View>
      <Input value={name} onChangeInput={setName} label="Nombre" />
      <View style={styles.location}>
        <ShareLocation />
      </View>
      <View style={styles.buttons}>
        <Button
          name="Omitir"
          theme="secondaryButton"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
        <Button
          name="Guardar"
          onPress={() => navigation.navigate('RegisterInsect')}
        />
      </View>
    </View>
  );
};

export default Register;
