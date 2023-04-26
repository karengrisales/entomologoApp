import React, { useState } from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import { TInsectRegister } from '../../types/types';
import ImageComponent from '../Image';
import { styles } from './styles';
import Button from '../Button';
import { useLocationReverse } from '../../hooks/useLocationReverse';

type TProps = {
  insect: TInsectRegister;
  dropdown?: boolean;
  url?: string;
};

const Card = ({ insect, dropdown, url }: TProps) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const { results } = useLocationReverse(
    insect.location.coords.latitude,
    insect.location.coords.longitude,
  );

  const handleNavigatorPress = () => {
    url && Linking.openURL(url.includes('http') ? url : `http://${url}`);
  };

  return (
    <View>
      <TouchableOpacity
        disabled={!dropdown}
        activeOpacity={0.7}
        onPress={() => setIsDropdown(prevState => !prevState)}>
        <View
          style={[
            styles.containerCard,
            isDropdown && styles.containerCardDropdown,
          ]}>
          <View style={styles.containerInformation}>
            <View style={styles.quantity}>
              <Text style={styles.quantityText}>{insect.quantity}</Text>
            </View>
            <View>
              <Text style={styles.specie}>{insect.name}</Text>
              <Text style={styles.city}>
                <Text style={styles.city}>{results[0]?.city} </Text>
                {insect.date}
              </Text>
            </View>
          </View>
          <View style={styles.image}>
            <ImageComponent width={70} height={70} uri={insect.image} />
          </View>
        </View>
      </TouchableOpacity>
      {dropdown && isDropdown && (
        <View>
          <View style={styles.map} />
          <View style={styles.containerDescription}>
            <Text style={styles.city}>
              {insect.observation}
              {'\n'}
            </Text>
            <View style={styles.containerUrl}>
              <Text>Url: </Text>
              <Button
                name="más"
                onPress={handleNavigatorPress}
                theme="urlButton"
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Card;
