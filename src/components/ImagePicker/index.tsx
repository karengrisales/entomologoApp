import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets';
import { styles } from './styles';

const ImagePickerComponent = ({ uri, onPress }: any) => {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.avatarImage}
        source={uri ? { uri } : images.insect}
      />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Image style={styles.addButtonIcon} source={images.plus} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
