import React, { useState } from 'react';
import { View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ImagePickerComponent from '../../components/ImagePicker';
import { styles } from './styles';

const AddInsect = () => {
  const [pickerResponse, setPickerResponse] = useState<any>(null);

  const onImageLibraryPress = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    setPickerResponse(result);

    console.log(result);
  };

  const uri = pickerResponse?.assets && pickerResponse.assets[0].uri;

  return (
    <View style={styles.screen}>
      <ImagePickerComponent uri={uri} onPress={onImageLibraryPress} />
    </View>
  );
};

export default AddInsect;
