import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

// Static data for categories
const categories = [
  {
    code: '',
    pic: 'https://img.icons8.com/fluent/96/000000/news.png',
    name: 'My Feed',
  },
  {
    code: '',
    pic: 'https://img.icons8.com/fluent/96/000000/hard-working.png',
    name: 'All News',
  },
  {
    code: '',
    pic: 'https://png.pngtree.com/png-vector/20230222/ourmid/pngtree-shiny-yellow-star-icon-clipart-png-image_6613580.png',
    name: 'Top Stories',
  },
  {
    code: '',
    pic: 'https://cdn2.iconfinder.com/data/icons/vivid/48/flame-512.png',
    name: 'Trending',
  },
  {
    code: '',
    pic: 'https://freeiconshop.com/wp-content/uploads/edd/bookmark-flat.png',
    name: 'Bookmarks',
  },
  {
    code: '',
    pic: 'https://cdn-icons-png.flaticon.com/512/9135/9135970.png',
    name: 'Unread',
  },
];

// Static data for sources
const VACCINE_NOTIFICATION =
  'While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.';
const VACCINE_IMAGE_URL =
  'https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg';

const sources = Array(8).fill({
  notification: VACCINE_NOTIFICATION,
  pic: VACCINE_IMAGE_URL,
});

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item.name)}
      style={[
        styles.category,
        selectedCategory === item.name && styles.selectedCategory,
      ]}>
      <Image source={{uri: item.pic}} style={styles.categoryImage} />
      <Text style={styles.notification}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderNotifications = notifications =>
    notifications.map((s, index) => (
      <View key={index} style={styles.notificationContainer}>
        <Text style={styles.notificationText}>
          {s?.notification?.slice(0, 120)}...
        </Text>
        <Image source={{uri: s.pic}} style={styles.notificationLogo} />
      </View>
    ));

  return (
    <ScrollView contentContainerStyle={styles.discover}>
      <Text style={styles.subtitle}>Categories</Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={renderCategoryItem}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Text style={styles.subtitle}>Notifications</Text>
      {renderNotifications(sources)}
      <Text style={[styles.subtitle, {marginTop: 40}]}>More Categories</Text>
      <Carousel
        layout="default"
        data={categories}
        renderItem={renderCategoryItem}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment="start"
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />
      <Text style={styles.subtitle}>More Notifications</Text>
      {renderNotifications(sources)}
    </ScrollView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    paddingBottom: 8,
    borderRadius: 10,
    fontWeight: 'bold',
    marginHorizontal: 5,
    alignSelf: 'flex-start',
  },
  category: {
    margin: 10,
    height: 130,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  selectedCategory: {
    backgroundColor: '#007FFF', // Highlight selected category
    borderRadius: 10,
    padding: 5,
  },
  categoryImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  notification: {
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
  },
  notificationContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  notificationLogo: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  notificationText: {
    fontSize: 14,
    color: 'white',
  },
});
