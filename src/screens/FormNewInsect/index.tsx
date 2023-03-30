import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

const FormNewInsect = () => {
  const [insect, setInsect] = useState('');

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent width={120} height={120} theme="imageCircleBorder" />
      </View>
      <View style={styles.inputs}>
        <Input
          label="Nombre especie"
          value={insect}
          onChangeInput={setInsect}
        />
        <Input
          label="Información adicional"
          placeholder="URL"
          value={insect}
          onChangeInput={setInsect}
        />
      </View>
      <View style={styles.button}>
        <Button name="Guardar" onPress={() => {}} />
      </View>
    </View>
  );
};

export default FormNewInsect;
