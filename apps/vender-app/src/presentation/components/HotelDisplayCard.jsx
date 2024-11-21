import React, { useState } from "react";
import { View } from "react-native";
import {
  Card,
  Divider,
  Text,
} from "react-native-paper";
import HotelRating from "./HotelRating";
import HotelTags from "./HotelTags";
import IconText from "./IconText";
import HotelDisplayCardMenu from "./HotelDisplayCardMenu";

const HotelDisplayCard = ({ item }) => {


  return (
    <Card style={{ margin: 5 }}>
      <Card.Content>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, paddingRight: 10 }}>
              <Text variant="titleLarge">{item.hotel_name}</Text>
              <Text variant="bodyMedium">{item.punch_line}</Text>
              <HotelRating ratingValue={item.rating} />
            </View>
            <HotelDisplayCardMenu item={item} />
          </View>

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
            <IconText text={`Floors: ${item.floors}`} icon={"building"} />
            <IconText
              text={`Rooms: ${item.available_rooms}/${item.total_rooms}`}
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
        source={{uri: item.image}}
        style={{ marginTop: "10",height:170 }}
        resizeMode="stretch"
      />
    </Card>
  );
};

export default HotelDisplayCard;
