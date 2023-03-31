import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { images } from '../../assets';
import { styles } from './styles';

type TProps = {
  uri?: string;
  onPress: () => void;
  character?: 'insect' | 'avatar';
};

const ImagePickerComponent = ({
  uri,
  onPress,
  character = 'insect',
}: TProps) => {
  return (
    <View style={styles.avatar}>
      <Image
        style={styles.avatarImage}
        source={
          uri ? { uri } : character === 'insect' ? images.insect : images.avatar
        }
      />
      <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <Image style={styles.addButtonIcon} source={images.plus} />
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
