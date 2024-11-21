import React, { useState } from "react";
import { View,useColorScheme } from "react-native";
import { IconButton, Menu, Divider } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";

const HotelDisplayCardMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchorPosition="bottom"
        style={{width:"30%"}}
        anchor={
          <IconButton
            icon={() => <Feather name="more-vertical" size={18} color={isDarkTheme===true?"white":"black"}/>}
            onPress={() => openMenu()}
            mode="contained-tonal"
            size={10}
          />
        }
      >
        <Menu.Item
          leadingIcon={() => <Feather name="edit-3" size={18} color={isDarkTheme===true?"white":"black"}/>}
          onPress={() => {}}
          title="Edit"
        />
        <Divider />
        <Menu.Item leadingIcon="delete" onPress={() => {}} title="Delete" />
      </Menu>
    </View>
  );
};

export default HotelDisplayCardMenu;
