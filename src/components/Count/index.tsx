import React from 'react';
import { Text, View } from 'react-native';
import Button from '../Button';
import ImageComponent from '../Image';
import { styles } from './styles';

type TProps = {
  name: string;
  image: string;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CountComponent = ({ name, image, setCount }: TProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <ImageComponent width={70} height={70} uri={image} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.information}>
        <Button
          onPress={() =>
            setCount(prevState => (prevState !== 0 ? prevState - 1 : 0))
          }
          name="-"
          theme="smallSecondaryButton"
        />
        <Button
          onPress={() => setCount(prevState => prevState + 1)}
          name="+"
          theme="smallPrimaryButton"
        />
      </View>
    </View>
  );
};

export default CountComponent;
