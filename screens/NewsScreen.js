import { APIURL } from "../API/api";
import Carousel from "react-native-snap-carousel";
import SingleNews from "../components/SingleNews";
import React, { useState, useEffect } from "react";
import useDynamicStyles from "../API/UseDynamicStyles";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

const GET_NEWS_QUERY = gql`
  query GetNews {
    news {
      id
      url
      title
      author
      urlToImage
      description
      publishedAt
      readMoreContent
    }
  }
`;

const NewsScreen = () => {
  const dynamicStyles = useDynamicStyles();
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data } = await client.query({ query: GET_NEWS_QUERY });
        setArticles(data.news);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const renderCarouselItem = ({ item, index }) => (
    <SingleNews item={item} index={index} />
  );

  const renderContent = () => {
    if (loading) {
      return (
        <Text style={[styles.messageText, dynamicStyles.textColor]}>
          Loading articles...
        </Text>
      );
    }
    if (error) {
      return (
        <Text style={[styles.messageText, dynamicStyles.textColor]}>
          Error: {error}
        </Text>
      );
    }
    if (articles.length === 0) {
      return (
        <Text style={[styles.messageText, dynamicStyles.textColor]}>
          No articles available
        </Text>
      );
    }
    return (
      <Carousel
        layout="default"
        data={articles}
        sliderHeight={windowHeight}
        itemHeight={windowHeight}
        vertical
        renderItem={renderCarouselItem}
      />
    );
  };

  return (
    <View style={[styles.container, dynamicStyles.backgroundColor]}>
      {renderContent()}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  messageText: {
    fontSize: 18,
  },
});
