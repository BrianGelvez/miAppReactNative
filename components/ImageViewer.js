import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectImage }) {

  const imageSource = selectImage ? {uri: selectImage} : placeholderImageSource

  return (
    <Image source={imageSource} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
