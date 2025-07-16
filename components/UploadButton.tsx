import React from 'react';
import { Alert, Button } from 'react-native';
import { uploadImageToServer } from '../services/api';

type Props = {
  image: string | null;
  setProcessedImage: (uri: string) => void;
};

export default function UploadButton({ image, setProcessedImage }: Props) {
  const upload = async () => {
    if (!image) return;
    try {
      const processed = await uploadImageToServer(image);
      setProcessedImage(processed);
    } catch (error) {
      console.error('Upload failed:', error);
      Alert.alert('Detection Failed', 'Could not process the image. Please try again.');
    }
  };

  return <Button title="Detect Bugs" onPress={upload} disabled={!image} />;
}
