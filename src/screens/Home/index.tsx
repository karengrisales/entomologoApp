import React from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Table from '../../components/Table';
import { styles } from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Table />
      <View style={styles.containerButton}>
        <Button theme="buttonSecondary" name={'+'} />
      </View>
    </View>
  );
};

export default Home;
