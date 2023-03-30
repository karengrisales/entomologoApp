import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { styles } from './styles';

type TProps = {
  theme?: 'imageCircle' | 'imageCircleBorder';
  width: number;
  height: number;
};

const ImageComponent = ({ theme, width, height }: TProps) => {
  return (
    <View
      style={[
        theme === 'imageCircleBorder' && styles.imageCircleBorder,
        { width, height },
      ]}>
      <View style={[styles.containerImage]}>
        <Image
          source={require('../../assets/Abeja.png')}
          style={[
            styles.image,
            theme === 'imageCircleBorder'
              ? {
                  width: width - 10,
                  height: height - 10,
                }
              : { width, height },
          ]}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
