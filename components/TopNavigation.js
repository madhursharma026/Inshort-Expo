import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function TopNavigation({index, setIndex, navigation}) {
  const handleLeftPress = () => {
    switch (index) {
      case 0:
        navigation.navigate('ContactUs');
        break;
      case 1:
        setIndex(0);
        break;
      case 2:
        setIndex(1);
        break;
      default:
        break;
    }
  };

  const handleRightPress = () => {
    switch (index) {
      case 0:
        setIndex(1);
        break;
      case 1:
        setIndex(2);
        break;
      case 2:
        navigation.navigate('TermsOfService');
        break;
      default:
        break;
    }
  };

  const leftButton = () => {
    const leftButtonProps = {
      style: styles.left,
      onPress: handleLeftPress,
    };

    switch (index) {
      case 0:
        return (
          <TouchableOpacity {...leftButtonProps}>
            <Text style={styles.textLight}>Contact Us</Text>
          </TouchableOpacity>
        );
      case 1:
        return (
          <TouchableOpacity {...leftButtonProps}>
            <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
            <Text style={styles.textLight}>Discover</Text>
          </TouchableOpacity>
        );
      case 2:
        return (
          <TouchableOpacity {...leftButtonProps}>
            <SimpleLineIcons name="arrow-left" size={15} color="#007FFF" />
            <Text style={styles.textLight}>All News</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  const rightButton = () => {
    const rightButtonProps = {
      style: index === 2 ? styles.right : styles.left,
      onPress: handleRightPress,
    };

    switch (index) {
      case 0:
        return (
          <TouchableOpacity {...rightButtonProps}>
            <Text style={styles.textWhite}>All News</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
          </TouchableOpacity>
        );
      case 1:
        return (
          <TouchableOpacity {...rightButtonProps}>
            <Text style={styles.textWhite}>Bookmark</Text>
            <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
          </TouchableOpacity>
        );
      case 2:
        return (
          <TouchableOpacity {...rightButtonProps}>
            <Text style={styles.textWhite}>T&C</Text>
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {leftButton()}
      <Text style={styles.centerText}>
        {index === 0 ? 'Discover' : index === 1 ? 'All News' : 'Bookmark'}
      </Text>
      {rightButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    backgroundColor: '#282C35',
    borderBottomColor: 'black',
    justifyContent: 'space-between',
  },
  centerText: {
    fontSize: 16,
    color: 'white',
    paddingBottom: 6,
    fontWeight: '700',
    borderBottomWidth: 5,
    borderBottomColor: '#007FFF',
  },
  left: {
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLight: {
    fontSize: 16,
    color: 'lightgrey',
  },
  textWhite: {
    fontSize: 16,
    color: 'white',
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
});
