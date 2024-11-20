import React, { useState } from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";
import HotelRating from "./HotelRating";
import HotelTags from "./HotelTags";
import IconText from "./IconText";

const HotelDisplayCard = ({ item }) => {
  const [tags, setTags] = useState(["Spooky", "Haunted", "Pool", "Club"]);
  return (
    <Card style={{ margin: 5 }}>
      <Card.Content>
        <View>
          <Text variant="titleLarge">{item.hotel_name}</Text>
          <Text variant="bodyMedium">{item.punch_line}</Text>
          <HotelRating ratingValue={item.rating} />
          <Text>Tags: </Text>
          <HotelTags tags={item.tags} />
          <Divider style={{ height: 2 }} />
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <IconText text={`Floors ${item.floors}`} icon={"building"} />
            <IconText
              text={`Rooms ${item.available_rooms}/${item.total_rooms}`}
              icon={"bed"}
            />
          </View>
          <View
            style={{
              margin: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <IconText text={item.address} icon={"location-dot"} />
          </View>

          <Divider style={{ height: 2 }} />
        </View>
      </Card.Content>
      <Card.Cover
        source={require("../../../assets/hotel-1.jpg")}
        style={{ marginTop: "10" }}
        resizeMode="stretch"
      />
    </Card>
  );
};

export default HotelDisplayCard;
