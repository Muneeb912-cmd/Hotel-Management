import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import { Card, Divider, Text, Avatar, IconButton } from "react-native-paper";
import IconText from "./IconText";
import BookingDisplayCardMenu from "./BookingdisplaCardMenu";
import Feather from "@expo/vector-icons/Feather";

const BookingDisplayCard = ({ item }) => {
  const { width } = useWindowDimensions();
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  return (
    <Card style={{ margin: 5 }}>
      <Card.Content>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text variant="titleLarge" style={{fontWeight:"bold"}}>Room Booking Request</Text>
            <BookingDisplayCardMenu />
          </View>

          <View>
            <Text>Hotel: {item.hotel_name}</Text>
            <Text>Room ID: {item.hotel_room_id}</Text>
            <Text>Room Category: {item.hotel_room_category}</Text>
            <Text>Room Rent: Rs. {item.hotel_room_rent} / Night</Text>
          </View>

          <Divider style={{ height: 2, marginTop: 5 }} />
          <View
            style={[
              styles.row,
              { flexDirection: width < 300 ? "column" : "row" },
              { marginVertical: 10, marginHorizontal: 2 },
            ]}
          >
            <IconText
              text={`Proposed Rent: Rs. ${item.proposed_rent_by_customer}`}
              icon={"dollar"}
            />
            <IconText
              text={`Your Offer: Rs. ${item.proposed_rent_by_manager}`}
              icon={"dollar"}
            />
          </View>
          <Divider style={{ height: 2 }} />
          <View style={styles.cardContent}>
            <Avatar.Image
              size={80}
              source={require("../../../assets/avatar_male.png")}
            />
            <View style={styles.nameContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems:'center'
                }}
              >
                <Text style={styles.nameText}>{item.user_name}</Text>
                <IconButton
                  icon={() => (
                    <Feather
                      name="user"
                      size={18}
                      color={isDarkTheme === true ? "white" : "black"}
                    />
                  )}
                  onPress={() => console.log("Hello")}
                  mode="contained-tonal"
                  size={10}
                />
              </View>
              <Divider
                style={{ height: 2, marginStart: 15, marginVertical: 5 }}
              />
              <Text style={styles.otherText}>User ID: {item.user_id}</Text>
              <Text style={styles.otherText}>CNIC: {item.user_cnic}</Text>
              <Text style={styles.otherText}>
                Phone: {item.user_phone || "123456789"}
              </Text>
            </View>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default BookingDisplayCard;

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  otherText: {
    fontSize: 16,
    marginLeft: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
