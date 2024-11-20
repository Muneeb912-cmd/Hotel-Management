import React from "react";
import { View, StyleSheet } from "react-native";
import { Chip } from "react-native-paper";

const HotelTags = ({ tags }) => {
  return (
    <View style={styles.container}>
      {tags.map((tag, index) => (
        <Chip key={index} mode="outlined" style={styles.chip}>
          {tag}
        </Chip>
      ))}
    </View>
  );
};

export default HotelTags;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "flex-start", 
    alignItems: "flex-start",
    marginVertical:5
  },
  chip: {
    marginEnd:3
  },
});
