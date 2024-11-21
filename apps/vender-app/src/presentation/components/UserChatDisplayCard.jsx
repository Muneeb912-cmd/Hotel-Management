import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, Avatar, Badge } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const UserChatDisplayCard = ({ item }) => {
  
  const navigation = useNavigation();
  const navigateToChatScreen = () => {
    navigation.navigate("ChatScreen", {
      user: {
        user_id: item.user_id,
        user_name: item.user_name,
      },
    });
  };

  return (
    <Card style={{ margin: 5 }} onPress={navigateToChatScreen}>
      <Card.Content>
        <View style={styles.cardContent}>
          <Avatar.Image
            size={50}
            source={require("../../../assets/avatar_male.png")}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.nameText}>{item.user_name}</Text>
            {item.unread_msg_count === 0 ? null : (
              <Badge>{item.unread_msg_count}</Badge>
            )}
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default UserChatDisplayCard;

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
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
