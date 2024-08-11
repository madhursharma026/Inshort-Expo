import React, {useCallback, useState} from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import TopNavigation from './TopNavigation';
import NewsScreen from '../screens/NewsScreen';
import BookmarkNews from '../screens/BookmarkNews';
import DiscoverScreen from '../screens/DiscoverScreen';

const InshortsTabs = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const routes = [
    {key: 'discover', title: 'Discover'},
    {key: 'news', title: 'News'},
    {key: 'bookmarks', title: 'Bookmarks'},
  ];

  const renderScene = useCallback(
    SceneMap({
      discover: DiscoverScreen,
      news: NewsScreen,
      bookmarks: BookmarkNews,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width}}
        renderTabBar={() => (
          <TopNavigation
            index={index}
            setIndex={setIndex}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
  },
});

export default InshortsTabs;
