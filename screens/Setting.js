import { useTheme } from "../API/ThemeContext";
import useDynamicStyles from "../API/UseDynamicStyles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

const Settings = () => {
  const navigation = useNavigation();
  const dynamicStyles = useDynamicStyles();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, dynamicStyles.backgroundColor]}>
      <Text style={[styles.header, dynamicStyles.textColor]}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, dynamicStyles.textColor]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleTheme}
          style={{ padding: 0, margin: 0 }}
        />
      </View>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate("TermsOfService")}
      >
        <Text style={[styles.settingText, dynamicStyles.textColor]}>
          Terms of Service
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate("BookmarkNews")}
      >
        <Text style={[styles.settingText, dynamicStyles.textColor]}>
          Bookmark News
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.settingItem}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <Text style={[styles.settingText, dynamicStyles.textColor]}>
          Contact Us
        </Text>
      </TouchableOpacity>

      <View style={styles.settingItem}>
        <Text style={[styles.settingText, dynamicStyles.textColor]}>
          Language
        </Text>
        <Text style={styles.settingLink}>English</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    marginTop: 24,
    fontWeight: "bold",
  },
  settingItem: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
  },
  settingText: {
    fontSize: 16,
  },
  settingLink: {
    fontSize: 16,
    color: "#007bff",
  },
});

export default Settings;
