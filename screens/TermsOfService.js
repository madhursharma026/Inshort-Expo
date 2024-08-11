import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const TermsOfService = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Terms of Service</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tincidunt nunc lorem, eget bibendum nisl malesuada a. Nulla facilisi.
          Suspendisse potenti. Ut id enim nec ipsum consequat scelerisque.
          Suspendisse potenti. Phasellus in justo non nisi lacinia efficitur.
          Donec et sapien in elit vulputate fermentum. Fusce in arcu non nisi
          blandit placerat.
        </Text>
        <Text style={styles.paragraph}>
          Curabitur vel ligula euismod, suscipit augue in, accumsan nisi. Nulla
          facilisi. In hac habitasse platea dictumst. Curabitur eget tincidunt
          lorem, id vulputate tortor. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Suspendisse potenti.
          Phasellus in justo non nisi lacinia efficitur.
        </Text>
        <Text style={styles.subheading}>Key Points:</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>• Lorem ipsum dolor sit amet</Text>
          <Text style={styles.listItem}>• Consectetur adipiscing elit</Text>
          <Text style={styles.listItem}>• Proin tincidunt nunc lorem</Text>
          <Text style={styles.listItem}>• Nulla facilisi</Text>
          <Text style={styles.listItem}>• Suspendisse potenti</Text>
        </View>
        <Text style={styles.paragraph}>
          Curabitur vel ligula euismod, suscipit augue in, accumsan nisi. Nulla
          facilisi. In hac habitasse platea dictumst. Curabitur eget tincidunt
          lorem, id vulputate tortor. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Suspendisse potenti.
          Phasellus in justo non nisi lacinia efficitur.
        </Text>
        <Text style={[styles.paragraph, styles.centerText]}>
          ---------------------------------------------------
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    marginBottom: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  listContainer: {
    marginLeft: 16,
    marginBottom: 16,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
  },
  centerText: {
    textAlign: 'center',
  },
});

export default TermsOfService;
