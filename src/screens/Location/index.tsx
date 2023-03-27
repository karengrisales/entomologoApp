import React, { useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  ImageBackground,
  PermissionsAndroid,
  Platform,
  View,
} from 'react-native';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigatorInitial';
import { TLocation } from '../../types/types';
import { Text } from 'react-native-paper';
import { styles } from './styles';
import useLocation from '../../contexts/location/useLocation';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'Location'
>;

const Location = () => {
  const [location, setLocation] = useState<TLocation>();
  const {
    actions: { setLocation: setLocationContext },
  } = useLocation();
  const firstRender = useRef(false);
  const navigate = useNavigation<ProfileScreenNavigationProp>();
  async function requestLocationPermission() {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    } else if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    }
  }

  async function getCurrentPosition(callback: any) {
    const hasLocationPermission = await requestLocationPermission();

    if (hasLocationPermission === false) {
      callback({
        locationAvailable: false,
        error: 'Can not obtain location permission',
      });
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        callback({
          locationAvailable: true,
          position,
        });
      },
      error => {
        callback({
          locationAvailable: false,
          error: error.message,
          errorCode: error.code,
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 },
    );
  }
  console.log(location);

  useEffect(() => {
    if (firstRender.current) {
      if (location?.locationAvailable) {
        setLocationContext(location);
        navigate.navigate('BottomTabs');
      }
    } else {
      firstRender.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ImageBackground
      source={require('../../assets/insects.png')}
      style={styles.containerImage}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Por favor permítenos acceso a tu ubicación para continuar
        </Text>
        <Button
          onPress={() =>
            getCurrentPosition((position: any) => {
              setLocation(position);
            })
          }
          name={'Permitir ubicación'}
        />
      </View>
    </ImageBackground>
  );
};

export default Location;
