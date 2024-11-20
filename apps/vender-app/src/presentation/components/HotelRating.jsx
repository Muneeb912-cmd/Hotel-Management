import React, { useState } from "react";
import { View, StyleSheet,useColorScheme } from "react-native";
import { Text } from "react-native-paper";
import { Rating } from "react-native-ratings";

const HotelRating = ({ ratingValue }) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <View style={styles.container}>
      <Rating
        type="custom"
        ratingCount={5}
        tintColor={isDarkTheme===true?"#242329":"#F8F3F9"}
        imageSize={24}
        style={styles.rating}
        readonly={true}
        startingValue={ratingValue} // Display the initial rating value
      />
      <Text style={styles.ratingText}>{ratingValue}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Vertically center align
    marginTop: 5,
    marginBottom: 20,
  },
  rating: {
    marginRight: 5, // Space between stars and text
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default HotelRating;
