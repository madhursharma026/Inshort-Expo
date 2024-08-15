import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ImageViewer from "../components/ImageViewer";
import { useBookmarks } from "../API/BookmarkContext";
import useDynamicStyles from "../API/UseDynamicStyles";
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");
const imageHeight = windowHeight * 0.3;

const BookmarkSingleNews = ({ item }) => {
  const navigation = useNavigation();
  const { toggleBookmark } = useBookmarks();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState("");

  const dynamicStyles = useDynamicStyles();

  const handleImagePress = (imageURI) => {
    setSelectedImageUri(imageURI);
    setIsModalVisible(true);
  };

  const handleBookmarkPress = () => {
    toggleBookmark(item);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (!item) {
    return null;
  }

  return (
    <View style={[styles.container, dynamicStyles.backgroundColor]}>
      <TouchableOpacity
        onPress={() => handleImagePress(item.urlToImage)}
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: item.urlToImage }}
          style={styles.imageBackground}
        />
      </TouchableOpacity>

      <View style={[styles.description, dynamicStyles.backgroundColor]}>
        <Text style={[styles.title, dynamicStyles.textColor]}>
          {item.title}
        </Text>
        <Text style={[styles.content, dynamicStyles.textColor]}>
          {item.description}
        </Text>

        <View style={styles.footer}>
          <Text style={dynamicStyles.textColor}>
            Short by{" "}
            <Text style={styles.author}>{item.author ?? "unknown"}</Text>
          </Text>

          <TouchableOpacity
            onPress={handleBookmarkPress}
            style={styles.bookmarkButton}
          >
            <Text style={styles.bookmarkText}>Remove Bookmark</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ImageViewer
        visible={isModalVisible}
        imageUri={selectedImageUri}
        onClose={handleCloseModal}
      />

      <View
        style={[styles.readMoreFooter, dynamicStyles.footerBackgroundColor]}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("LinkViewer", { LinkURL: item.url })
          }
        >
          <Text style={[styles.readMoreContent, dynamicStyles.footerTextColor]}>
            {item?.readMoreContent?.slice(0, 80)}...
          </Text>
          <Text style={[styles.readMoreText, dynamicStyles.footerTextColor]}>
            Read More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight - 70,
    paddingBottom: Platform.OS === "ios" ? 70 : 70,
  },
  imageContainer: {
    backgroundColor: "white",
  },
  imageBackground: {
    width: "100%",
    height: imageHeight,
    resizeMode: "cover",
  },
  description: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  content: {
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: "300",
  },
  author: {
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bookmarkButton: {
    padding: 10,
  },
  bookmarkText: {
    fontSize: 18,
    color: "red",
  },
  readMoreFooter: {
    bottom: 0,
    height: 70,
    padding: 15,
    width: "100%",
    justifyContent: "center",
    position: Platform.OS === "ios" ? "relative" : "absolute",
  },
  readMoreContent: {
    fontSize: 15,
  },
  readMoreText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default BookmarkSingleNews;
