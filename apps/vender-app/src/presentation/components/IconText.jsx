import React from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Text } from "react-native-paper";

const IconText = (props) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <View style={style.container}>
      <FontAwesome6 name={props.icon} size={20} color={isDarkTheme===true?"white":"black"}/>
      <Text style={{ alignSelf: "center", marginStart: 5 ,fontSize:15}}>{props.text}</Text>
    </View>
  );
};

export default IconText;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
