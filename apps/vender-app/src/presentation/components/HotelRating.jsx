import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { Rating } from '@kolking/react-native-rating';

const HotelRating = ({ ratingValue,isdisabled }) => {
  return (
    <View style={styles.container}>
      <Rating size={20} rating={ratingValue} disabled={isdisabled} />
      <Text style={styles.ratingText}>{ratingValue}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    alignItems: "center", 
    marginTop: 5,
    marginBottom: 20,
  },
  rating: {
    marginRight: 5, 
  },
  ratingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal:10
  },
});

export default HotelRating;
