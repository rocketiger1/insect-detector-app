import { Image, View, StyleSheet } from 'react-native';

type Props = {
  image: string | null;
  processedImage: string | null;
};

export default function ImageDisplay({ image, processedImage }: Props) {
  const imageSource = processedImage || image; // Prioritize showing the processed image
  if (!imageSource) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});