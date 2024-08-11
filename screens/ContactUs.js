import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context'; // Add this import

const ContactUs = () => {
  const zohoFormUrl =
    'https://forms.zohopublic.in/iammadhur05/form/ContactUs/formperma/spVhcB0YKJRlewY7xnpx0WkDFnsMekNKkDT6G9gEhgg';

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: zohoFormUrl}} style={styles.webview} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1, // Let WebView fill the available space
  },
});

export default ContactUs;
