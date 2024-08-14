import React, { useCallback, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import TopNavigation from "./TopNavigation";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import BookmarkNews from "../screens/BookmarkNews";
import useDynamicStyles from "../API/UseDynamicStyles";

const InshortsTabs = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const { width } = useWindowDimensions();
  const dynamicStyles = useDynamicStyles();

  const routes = [
    { key: "discover", title: "Discover" },
    { key: "news", title: "News" },
    { key: "bookmarks", title: "Bookmarks" },
  ];

  const renderScene = useCallback(
    SceneMap({
      discover: DiscoverScreen,
      news: NewsScreen,
      bookmarks: BookmarkNews,
    }),
    []
  );

  return (
    <View style={[styles.container, dynamicStyles.backgroundColor]}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
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
  },
});

export default InshortsTabs;
