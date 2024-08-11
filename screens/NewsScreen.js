import {APIURL} from '../API/api';
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../components/SingleNews';
import React, {useState, useEffect, useCallback} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {ApolloClient, InMemoryCache, gql, useQuery} from '@apollo/client';

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

const GET_NEWS_QUERY = gql`
  query GetNews {
    news {
      id
      author
      description
      publishedAt
      readMoreContent
      title
      url
      urlToImage
    }
  }
`;

const NewsScreen = () => {
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const {data} = await client.query({
          query: GET_NEWS_QUERY,
        });
        setArticles(data.news);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const handleSnapToItem = useCallback(index => {
    setActiveIndex(index);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading articles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.carousel}>
      {articles.length > 0 ? (
        <Carousel
          firstItem={0}
          layout="default"
          data={articles}
          sliderHeight={windowHeight}
          itemHeight={windowHeight}
          vertical
          renderItem={({item, index}) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={handleSnapToItem}
        />
      ) : (
        <View style={styles.noArticlesContainer}>
          <Text style={styles.noArticlesText}>No articles available</Text>
        </View>
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  loadingText: {
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  noArticlesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  noArticlesText: {
    fontSize: 18,
    color: 'white',
  },
});
