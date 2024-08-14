import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import useDynamicStyles from "../API/UseDynamicStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactUs = () => {
  const { backgroundColor } = useDynamicStyles();
  const zohoFormUrl =
    "https://forms.zohopublic.in/iammadhur05/form/ContactUs/formperma/spVhcB0YKJRlewY7xnpx0WkDFnsMekNKkDT6G9gEhgg";

  return (
    <SafeAreaView style={[styles.container, backgroundColor]}>
      <WebView
        source={{ uri: zohoFormUrl }}
        style={[styles.webview, backgroundColor]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ContactUs;
