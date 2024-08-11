import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

const LinkViewer = ({route}) => {
  const {LinkURL} = route.params;

  const handleError = syntheticEvent => {
    const {nativeEvent} = syntheticEvent;
    console.error('WebView error: ', nativeEvent);
    // Optionally, show an error message to the user here
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: LinkURL}}
        startInLoadingState
        renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
        onError={handleError}
        onHttpError={handleError}
        accessibilityLabel="Web content"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LinkViewer;
