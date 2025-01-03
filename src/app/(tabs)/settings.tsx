import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Menu, Button, Provider as PaperProvider } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "../../hooks/useTheme";

const Settings = () => {
  const { toggleTheme } = useTheme();

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const languages = ["English", "Bangla", "Sinhala"];

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    closeMenu();
  };

  return (
    <PaperProvider>
      <View>
        <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
          Toggle Theme
        </Button>

        <View style={styles.languageContainer}>
          <Menu
            visible={menuVisible}
            onDismiss={closeMenu}
            anchor={
              <Button icon={() => <Icon name="language" color="rgb(242, 170, 250)" size={24} />} mode="outlined" onPress={openMenu}>
                {selectedLanguage}
              </Button>
            }
          >
            {languages.map((language) => (
              <Menu.Item
                key={language}
                onPress={() => handleSelect(language)}
                title={language}
              />
            ))}
          </Menu>
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
 
  languageContainer: {
    marginTop: 20,
  },
});

export default Settings;
