// import React from "react";
// import ContactUs from "./screens/ContactUs";
// import LinkViewer from "./components/LinkViewer";
// import BookmarkNews from "./screens/BookmarkNews";
// import InshortsTabs from "./components/InshortsTabs";
// import TermsOfService from "./screens/TermsOfService";
// import { BookmarkProvider } from "./API/BookmarkContext";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Platform, StatusBar, View } from "react-native";
// import { ThemeProvider } from "./API/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle";

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <ThemeProvider>
//       <BookmarkProvider>
//         <View
//           style={{
//             flex: 1,
//             paddingTop: StatusBar.currentHeight,
//           }}
//         >
//           <ThemeToggle />
//           <NavigationContainer>
//             <Stack.Navigator initialRouteName="Home">
//               <Stack.Screen
//                 name="Home"
//                 component={InshortsTabs}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="LinkViewer"
//                 component={LinkViewer}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="TermsOfService"
//                 component={TermsOfService}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="BookmarkNews"
//                 component={BookmarkNews}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="ContactUs"
//                 component={ContactUs}
//                 options={{ headerShown: false }}
//               />
//             </Stack.Navigator>
//           </NavigationContainer>
//         </View>
//       </BookmarkProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import Settings from "./screens/Setting";
// import ContactUs from "./screens/ContactUs";
// import NewsScreen from "./screens/NewsScreen";
// import LinkViewer from "./components/LinkViewer";
// import BookmarkNews from "./screens/BookmarkNews";
// import { ThemeProvider } from "./API/ThemeContext";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import DiscoverScreen from "./screens/DiscoverScreen";
// import TermsOfService from "./screens/TermsOfService";
// import { Platform, StatusBar, View } from "react-native";
// import { BookmarkProvider } from "./API/BookmarkContext";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 14,
//           marginTop: -10,
//           fontWeight: "bold",
//         },
//         tabBarStyle: {
//           height: 70,
//           paddingBottom: 10,
//           backgroundColor: "#282C35",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Discover"
//         component={DiscoverScreen}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="magnifier" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Feeds"
//         component={NewsScreen}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="notebook" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={Settings}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="settings" size={16} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <BookmarkProvider>
//         <View
//           style={{
//             flex: 1,
//             paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//           }}
//         >
//           <NavigationContainer>
//             <Stack.Navigator initialRouteName="MainTabs">
//               <Stack.Screen
//                 name="MainTabs"
//                 component={MyTabs}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="LinkViewer"
//                 component={LinkViewer}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="TermsOfService"
//                 component={TermsOfService}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="BookmarkNews"
//                 component={BookmarkNews}
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen
//                 name="ContactUs"
//                 component={ContactUs}
//                 options={{ headerShown: false }}
//               />
//             </Stack.Navigator>
//           </NavigationContainer>
//         </View>
//       </BookmarkProvider>
//     </ThemeProvider>
//   );
// }

// export default App;
// import React from "react";
// import Settings from "./screens/Setting";
// import ContactUs from "./screens/ContactUs";
// import NewsScreen from "./screens/NewsScreen";
// import { StatusBar, View } from "react-native";
// import LinkViewer from "./components/LinkViewer";
// import BookmarkNews from "./screens/BookmarkNews";
// import { ThemeProvider } from "./API/ThemeContext";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import DiscoverScreen from "./screens/DiscoverScreen";
// import TermsOfService from "./screens/TermsOfService";
// import { BookmarkProvider } from "./API/BookmarkContext";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function DiscoverStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DiscoverHome"
//         component={DiscoverScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="TermsOfService"
//         component={TermsOfService}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="LinkViewer"
//         component={LinkViewer}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function FeedsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="NewsHome"
//         component={NewsScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="BookmarkNews"
//         component={BookmarkNews}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SettingsHome"
//         component={Settings}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ContactUs"
//         component={ContactUs}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Discover"
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 14,
//           marginTop: -10,
//           fontWeight: "bold",
//         },
//         tabBarStyle: {
//           height: 70,
//           paddingBottom: 10,
//           backgroundColor: "#282C35",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Discover"
//         component={DiscoverStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="magnifier" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Feeds"
//         component={FeedsStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="notebook" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={SettingsStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="settings" size={16} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <BookmarkProvider>
//         <View
//           style={{
//             flex: 1,
//             paddingTop: StatusBar.currentHeight,
//           }}
//         >
//           <NavigationContainer>
//             <MyTabs />
//           </NavigationContainer>
//         </View>
//       </BookmarkProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

// import React from "react";
// import { StatusBar, View } from "react-native";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Settings from "./screens/Setting";
// import ContactUs from "./screens/ContactUs";
// import NewsScreen from "./screens/NewsScreen";
// import LinkViewer from "./components/LinkViewer";
// import BookmarkNews from "./screens/BookmarkNews";
// import DiscoverScreen from "./screens/DiscoverScreen";
// import TermsOfService from "./screens/TermsOfService";
// import { ThemeProvider } from "./API/ThemeContext";
// import { BookmarkProvider } from "./API/BookmarkContext";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// // Stack Navigator for Discover Tab (only DiscoverScreen)
// function DiscoverStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="DiscoverHome"
//         component={DiscoverScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// // Stack Navigator for Feeds Tab (only NewsScreen)
// function FeedsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="NewsHome"
//         component={NewsScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// // Stack Navigator for Settings Tab
// function SettingsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SettingsHome"
//         component={Settings}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="TermsOfService"
//         component={TermsOfService}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="LinkViewer"
//         component={LinkViewer}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="BookmarkNews"
//         component={BookmarkNews}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="ContactUs"
//         component={ContactUs}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// // Main Tab Navigator
// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Discover"
//       screenOptions={{
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 14,
//           marginTop: -10,
//           fontWeight: "bold",
//         },
//         tabBarStyle: {
//           height: 70,
//           paddingBottom: 10,
//           backgroundColor: "#282C35",
//         },
//       }}
//     >
//       <Tab.Screen
//         name="Discover"
//         component={DiscoverStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="magnifier" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Feeds"
//         component={FeedsStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="notebook" size={16} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Setting"
//         component={SettingsStack}
//         options={{
//           tabBarIcon: ({ focused, color }) => (
//             <SimpleLineIcons name="settings" size={16} color={color} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// // Main App Component
// function App() {
//   return (
//     <ThemeProvider>
//       <BookmarkProvider>
//         <View
//           style={{
//             flex: 1,
//             paddingTop: StatusBar.currentHeight,
//           }}
//         >
//           <NavigationContainer>
//             <MyTabs />
//           </NavigationContainer>
//         </View>
//       </BookmarkProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

import React, { useEffect } from "react";
import Settings from "./screens/Setting";
import ContactUs from "./screens/ContactUs";
import NewsScreen from "./screens/NewsScreen";
import { LogBox, StatusBar } from "react-native";
import LinkViewer from "./components/LinkViewer";
import BookmarkNews from "./screens/BookmarkNews";
import { SimpleLineIcons } from "@expo/vector-icons";
import DiscoverScreen from "./screens/DiscoverScreen";
import TermsOfService from "./screens/TermsOfService";
import { setupOneSignal } from "./API/SetupOneSignal";
import { LanguageProvider } from "./API/LanguageContext";
import { BookmarkProvider } from "./API/BookmarkContext";
import { useTheme, ThemeProvider } from "./API/ThemeContext";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommonActions, NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

LogBox.ignoreAllLogs();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscoverHome"
        component={DiscoverScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function FeedsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewsHome"
        component={NewsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LinkViewer"
        component={LinkViewer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsHome"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LinkViewer"
        component={LinkViewer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BookmarkNews"
        component={BookmarkNews}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Discover"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 14,
          marginTop: -10,
          fontWeight: "bold",
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          backgroundColor: "#282C35",
        },
      }}
    >
      <Tab.Screen
        name="Discover"
        component={DiscoverStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SimpleLineIcons name="magnifier" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feeds"
        component={FeedsStack}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <SimpleLineIcons name="notebook" size={16} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsStack}
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="settings" size={16} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.dispatch(
              CommonActions.navigate({
                name: "Setting",
                params: {
                  screen: "SettingsHome",
                },
              })
            );
          },
        })}
      />
    </Tab.Navigator>
  );
}

function App() {
  useEffect(() => {
    setupOneSignal();
  }, []);
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BookmarkProvider>
            <ThemedApp />
          </BookmarkProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function ThemedApp() {
  const { isDarkMode } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? "#282C35" : "#f1f1f1"}
      />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
