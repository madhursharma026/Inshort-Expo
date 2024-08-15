import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../API/ThemeContext";
import useDynamicStyles from "../API/UseDynamicStyles";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";

const Settings = () => {
  const navigation = useNavigation();
  const dynamicStyles = useDynamicStyles();
  const { isDarkMode, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("English");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownVisible(false);
  };

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
        <TouchableOpacity
          onPress={toggleDropdown}
          style={styles.languageButton}
        >
          <Text style={[styles.languageText, dynamicStyles.textColor]}>
            {language}
          </Text>
          <Ionicons
            name={dropdownVisible ? "chevron-up" : "chevron-down"}
            size={16}
            color={dynamicStyles.textColor.color}
          />
        </TouchableOpacity>
      </View>

      {dropdownVisible && (
        <View style={[styles.dropdown, dynamicStyles.footerBackgroundColor]}>
          <TouchableOpacity
            onPress={() => handleLanguageChange("English")}
            style={styles.dropdownItem}
          >
            <Text style={[styles.dropdownText, dynamicStyles.footerTextColor]}>
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleLanguageChange("Hindi")}
            style={styles.dropdownItem}
          >
            <Text style={[styles.dropdownText, dynamicStyles.footerTextColor]}>
              Hindi
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#ccc",
    justifyContent: "space-between",
  },
  settingText: {
    fontSize: 16,
  },
  languageButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    fontSize: 16,
    marginRight: 8,
  },
  dropdown: {
    top: 180,
    right: 20,
    zIndex: 1000,
    elevation: 5,
    shadowRadius: 2,
    borderRadius: 5,
    shadowOpacity: 0.8,
    shadowColor: "#000",
    position: "absolute",
    shadowOffset: { width: 0, height: 2 },
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: {
    fontSize: 16,
  },
});

export default Settings;
