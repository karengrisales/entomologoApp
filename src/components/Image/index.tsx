import React from 'react';
import { Image } from 'react-native';
import { View } from 'react-native';
import { styles } from './styles';
import { images } from '../../assets';

type TProps = {
  theme?: 'imageCircle' | 'imageCircleBorder';
  width: number;
  height: number;
  uri?: string;
  character?: 'insect' | 'avatar';
};

const ImageComponent = ({
  theme,
  width,
  height,
  uri,
  character = 'insect',
}: TProps) => {
  return (
    <View
      style={[
        theme === 'imageCircleBorder' && styles.imageCircleBorder,
        { width, height },
      ]}>
      {typeof uri === 'string' ? (
        <Image
          source={
            uri
              ? { uri }
              : character === 'insect'
              ? images.insect
              : images.avatar
          }
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
      ) : (
        <Image
          source={
            uri ? uri : character === 'insect' ? images.insect : images.avatar
          }
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
      )}
    </View>
  );
};

export default ImageComponent;
