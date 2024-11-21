import React, { useState } from "react";
import { View,useColorScheme } from "react-native";
import { IconButton, Menu, Divider } from "react-native-paper";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const BookingDisplayCardMenu = () => {
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
        style={{width:"40%"}}
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
          leadingIcon={() => <MaterialCommunityIcons name="offer" size={18} color={isDarkTheme===true?"white":"black"}/>}
          onPress={() => {}}
          title="Make an Offer"
        />
        <Divider />
        <Menu.Item leadingIcon="check" onPress={() => {}} title="Approve" />
      </Menu>
    </View>
  );
};

export default BookingDisplayCardMenu;
