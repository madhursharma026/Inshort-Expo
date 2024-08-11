import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImageViewer from '../components/ImageViewer';
import {useBookmarks} from '../API/BookmarkContext';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const imageHeight = windowHeight * 0.3;

const SingleNews = ({item}) => {
  const navigation = useNavigation();
  const {bookmarkedArticles, toggleBookmark} = useBookmarks();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState('');

  const isBookmarked = bookmarkedArticles.some(a => a.url === item.url);

  const handleImagePress = imageURI => {
    setSelectedImageUri(imageURI);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleBookmarkPress = () => {
    toggleBookmark(item);
  };

  if (!item) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleImagePress(item.urlToImage)}
        style={styles.imageContainer}>
        <Image source={{uri: item.urlToImage}} style={styles.imageBackground} />
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.description}</Text>
        <View style={styles.footer}>
          <Text>
            Short by{' '}
            <Text style={styles.author}>{item.author ?? 'unknown'}</Text>
          </Text>
          <TouchableOpacity
            onPress={handleBookmarkPress}
            style={styles.bookmarkButton}>
            <Text
              style={[styles.bookmarkText, isBookmarked && styles.bookmarked]}>
              {isBookmarked ? '🔖 Bookmarked' : '🔖 Bookmark'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageViewer
        visible={isModalVisible}
        imageUri={selectedImageUri}
        onClose={handleCloseModal}
      />
      <View style={styles.readMoreFooter}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('LinkViewer', {LinkURL: item.url})
          }>
          <Text style={styles.readMoreContent}>
            {item?.readMoreContent?.slice(0, 80)}...
          </Text>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight - 60,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  imageBackground: {
    width: '100%',
    height: imageHeight,
    resizeMode: 'cover',
  },
  description: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  content: {
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: '300',
  },
  author: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookmarkButton: {
    padding: 10,
  },
  bookmarkText: {
    fontSize: 18,
    color: 'black',
  },
  bookmarked: {
    color: 'green',
    fontWeight: 'bold',
  },
  readMoreFooter: {
    bottom: 0,
    height: 80,
    padding: 15,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#4d4a4a',
  },
  readMoreContent: {
    fontSize: 15,
    color: 'white',
  },
  readMoreText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SingleNews;
