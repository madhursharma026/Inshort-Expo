// import React from "react";
// import { View, StyleSheet, ActivityIndicator } from "react-native";
// import { WebView } from "react-native-webview";

// const LinkViewer = ({ route }) => {
//   const { LinkURL } = route.params;

//   const handleError = (syntheticEvent) => {
//     const { nativeEvent } = syntheticEvent;
//     console.error("WebView error: ", nativeEvent);
//     // Optionally, show an error message to the user here
//   };

//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: LinkURL }}
//         startInLoadingState
//         renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
//         onError={handleError}
//         onHttpError={handleError}
//         accessibilityLabel="Web content"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default LinkViewer;

// import React from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { WebView } from "react-native-webview";

// const LinkViewer = ({ route, navigation }) => {
//   const { LinkURL } = route.params;

//   const getDomainName = (url) => {
//     try {
//       const { protocol, hostname } = new URL(url);
//       return `${protocol}//${hostname}`;
//     } catch (error) {
//       console.error("Invalid URL:", error);
//       return "Invalid URL";
//     }
//   };

//   const domainName = getDomainName(LinkURL);

//   const handleError = (syntheticEvent) => {
//     const { nativeEvent } = syntheticEvent;
//     console.error("WebView error: ", nativeEvent);
//   };

//   const handleClose = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
//           <Ionicons name="close-outline" size={20} color="white" />
//         </TouchableOpacity>
//         <Text style={styles.urlText}>{domainName}</Text>
//         <TouchableOpacity style={styles.menuButton}>
//           <Ionicons name="ellipsis-vertical-sharp" size={16} color="white" />
//         </TouchableOpacity>
//       </View>

//       <WebView
//         source={{ uri: LinkURL }}
//         startInLoadingState
//         renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
//         onError={handleError}
//         onHttpError={handleError}
//         accessibilityLabel="Web content"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//     backgroundColor: "#282C35",
//   },
//   closeButton: {
//     paddingRight: 15,
//   },
//   urlText: {
//     flex: 1,
//     fontSize: 14,
//     color: "#333",
//     textAlign: "center",
//     color: "white",
//   },
//   menuButton: {
//     paddingLeft: 15,
//   },
// });

// export default LinkViewer;
import React, { useState } from "react";
import {
  View,
  Text,
  Alert,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const LinkViewer = ({ route, navigation }) => {
  const { LinkURL } = route.params;
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Function to extract the domain name from the URL
  const getDomainName = (url) => {
    try {
      const { protocol, hostname } = new URL(url);
      return `${protocol}//${hostname}`;
    } catch {
      return "Invalid URL";
    }
  };

  const domainName = getDomainName(LinkURL);

  const handleError = (syntheticEvent) => {
    console.error("WebView error: ", syntheticEvent.nativeEvent);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const handleCopyLink = async () => {
    await Clipboard.setStringAsync(LinkURL);
    Alert.alert("Link Copied", "The link has been copied successfully!");
    setDropdownVisible(false);
  };

  const handleOpenInBrowser = async () => {
    const supported = await Linking.canOpenURL(LinkURL);
    if (supported) {
      await Linking.openURL(LinkURL);
    } else {
      Alert.alert("Error", "Can't open this URL.");
    }
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Ionicons name="close-outline" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.urlText}>{domainName}</Text>
        <TouchableOpacity onPress={toggleDropdown} style={styles.menuButton}>
          <Ionicons name="ellipsis-vertical-sharp" size={16} color="white" />
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            onPress={handleCopyLink}
            style={styles.dropdownItem}
          >
            <Ionicons name="copy-outline" size={20} color="black" />
            <Text style={styles.dropdownText}>Copy Link</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleOpenInBrowser}
            style={styles.dropdownItem}
          >
            <Ionicons name="open-outline" size={20} color="black" />
            <Text style={styles.dropdownText}>Open in Browser</Text>
          </TouchableOpacity>
        </View>
      )}

      <WebView
        source={{ uri: LinkURL }}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: "#282C35",
  },
  closeButton: {
    paddingRight: 15,
  },
  urlText: {
    flex: 1,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
  menuButton: {
    paddingLeft: 15,
  },
  dropdown: {
    position: "absolute",
    top: 50,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 1000,
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default LinkViewer;
