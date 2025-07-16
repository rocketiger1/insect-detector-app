import React from 'react';
import { Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Props = {
  setImage: (uri: string) => void;
};

export default function ImagePickerButton({ setImage }: Props) {
  const launchCamera = async () => {
    const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
    if (!cameraPerm.granted) {
      Alert.alert('Permission denied', 'Camera access is required to take a photo.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets?.[0]?.uri;
      if (uri) setImage(uri);
    }
  };

  const launchGallery = async () => {
    const libraryPerm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!libraryPerm.granted) {
      Alert.alert('Permission denied', 'Photo library access is required.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets?.[0]?.uri;
      if (uri) setImage(uri);
    }
  };

  const handleChooseOption = () => {
    Alert.alert('Upload Image', 'Choose a source', [
      { text: 'Camera', onPress: launchCamera },
      { text: 'Gallery', onPress: launchGallery },
      { text: 'Cancel', style: 'cancel' },
    ]);
  };

  return <Button title="Select or Take Photo" onPress={handleChooseOption} />;
}
