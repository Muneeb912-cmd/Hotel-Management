import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Divider, Text, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SeachBar";
import UserChatDisplayCard from "../../../components/UserChatDisplayCard";


const Chats = () => {
  const [chatsData, setChatsData] = useState([
    {
      user_id: 1,
      user_name: "Muneeb",
      unread_msg_count: 4,
      user_phone: "9239491223192",
    },
    {
      user_id: 2,
      user_name: "Ali",
      unread_msg_count: 1,
      user_phone: "9239491223192",
    },
    {
      user_id: 3,
      user_name: "Saleem",
      unread_msg_count: 0,
      user_phone: "9239491223192",
    },
  ]);
  const [filteredData, setFilteredData] = useState(chatsData);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    const filtered = chatsData.filter((item) => {
      return (
        item.user_name.toLowerCase().includes(lowerCaseQuery) ||
        item.phone.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilteredData(chatsData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Chats</Text>
        <IconButton
          icon={isSearchOpen ? "close" : "magnify"}
          size={20}
          onPress={() => {
            setSearchOpen(!isSearchOpen);
            handleClear();
          }}
          mode="contained-tonal"
        />
      </View>

      <Divider style={{ marginVertical: 5, height: 2 }} />
      {isSearchOpen && (
        <SearchBar
          placeholder={"Search User (Name,Phone)"}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      )}
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.user_id}
        renderItem={({ item }) => <UserChatDisplayCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 50,
  },
  listContainer: {
    marginBottom: 40,
  },
});
