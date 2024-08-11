import React from 'react';
import {
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const ImageViewer = ({visible, imageUri, onClose}) => {
  const {width, height} = useWindowDimensions();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      hardwareAccelerated>
      <SafeAreaView style={styles.modalBackground}>
        <View style={[styles.modalContainer, {width, height}]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Image
            source={{uri: imageUri}}
            style={styles.image}
            resizeMode="contain"
            accessibilityLabel="View Image"
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#D9DDDC',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 30,
    color: '#000',
  },
  image: {
    width: '100%',
    height: '80%',
  },
});

export default ImageViewer;
