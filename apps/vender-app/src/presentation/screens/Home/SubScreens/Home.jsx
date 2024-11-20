import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Divider, Text, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SeachBar";
import HotelDisplayCard from "../../../components/HotelDisplayCard";

const Home = () => {
  const [hotelData, setHotelData] = useState([
    {
      id: 1,
      hotel_name: "Hotel Transylvania",
      punch_line: "Come party with the ghosts HAHA!",
      tags: ["Spooky", "Haunted", "Pool", "Club"],
      rating: 3.5,
      floors: 4,
      available_rooms: 11,
      total_rooms: 15,
      address: "666 Transylvania Lane, Umbre, Romania",
      iamge: "../../../assets/hotel-1.jpg",
    },
  ]);
  const [filteredData, setFilteredData] = useState(hotelData);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query) => {
    const filtered = hotelData.filter((item) =>
      item.hotel_name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilteredData(hotelData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Home</Text>
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
        <SearchBar onSearch={handleSearch} onClear={handleClear} />
      )}
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HotelDisplayCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;

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
