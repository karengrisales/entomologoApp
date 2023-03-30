import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ImageComponent from '../Image';
import { styles } from './styles';

const HeaderComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <ImageComponent width={65} height={65} />
      </View>
    </SafeAreaView>
  );
};

export default HeaderComponent;
