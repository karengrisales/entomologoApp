import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { styles } from './styles';

type TProps = {
  theme?: 'imageCircle';
  width: number;
  height: number;
};

const ImageComponent = ({ theme, width, height }: TProps) => {
  return (
    <View
      style={[theme === 'imageCircle' && styles.imageCirle, { width, height }]}>
      <View style={[styles.containerImage]}>
        <Image
          source={require('../../assets/Abeja.png')}
          style={
            theme === 'imageCircle'
              ? {
                  width: width - 10,
                  height: height - 10,
                }
              : { width, height }
          }
        />
      </View>
    </View>
  );
};

export default ImageComponent;
