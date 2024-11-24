import React from "react";
import {
  Card,
  Avatar,
  Text,
  Badge,
  Divider,
  IconButton,
} from "react-native-paper";
import {
  StyleSheet,
  View,
  useWindowDimensions,
  useColorScheme,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

const ProfileCardLayout = ({ userData }) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const { width } = useWindowDimensions();
  return (
    <Card
      style={styles.card}
      onPress={() => {
        console.log("Hello");
      }}
    >
      <Card.Content style={styles.cardContent}>
        <Avatar.Image
          size={100}
          source={
            userData.user_gender == "Male"
              ? require("../../../assets/avatar_male.png")
              : require("../../../assets/avatar_female.png")
          }
        />
        <View style={styles.nameContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.nameText}>{userData.user_name}</Text>
            <IconButton
              icon={() => (
                <Feather
                  name="edit-2"
                  size={15}
                  color={isDarkTheme === true ? "white" : "black"}
                />
              )}
              size={15}
              mode="contained-tonal"
            />
          </View>
          <Divider style={{ height: 2, marginVertical: 5 }} />
          <Text style={styles.otherText}>CNIC: {userData.user_cnic}</Text>
          <Text style={styles.otherText}>
            Phone: {userData.user_phone || "123456789"}
          </Text>
          <Text style={styles.otherText}>Gender: {userData.user_gender}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  otherText: {
    fontSize: 16,
  },
});

export default ProfileCardLayout;
