import React, { useState } from 'react';
import { View } from 'react-native';
import { images } from '../../assets';
import ImageComponent from '../../components/Image';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { stylesGlobal } from '../../theme/theme';
import { styles } from './styles';

const DATA = ['Hormiga', 'Abeja', 'Abejorro', 'Otro'];

const FormInsect = () => {
  const [insect, setInsect] = useState('');

  return (
    <View style={[stylesGlobal.containerGlobal, styles.container]}>
      <View style={styles.image}>
        <ImageComponent
          width={120}
          height={120}
          theme="imageCircleBorder"
          uri={images.hormiga}
        />
      </View>
      <View style={styles.inputs}>
        <Select
          label="Nombre especie"
          placeholder="Seleccionar"
          data={DATA}
          onSelect={() => {}}
        />
        <Input
          label="Información adicional"
          placeholder="URL"
          value={insect}
          onChangeInput={setInsect}
        />
      </View>
    </View>
  );
};

export default FormInsect;
