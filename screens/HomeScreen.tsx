import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ImagePickerButton from '../components/ImagePickerButton';
import UploadButton from '../components/UploadButton';
import ImageDisplay from '../components/ImageDisplay';

export default function HomeScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ImagePickerButton setImage={setImage} />
      <UploadButton image={image} setProcessedImage={setProcessedImage} />
      <ImageDisplay image={image} processedImage={processedImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});