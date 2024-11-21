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
      punch_line: "Come party with the ghosts HAHA! ",
      tags: ["Spooky", "Haunted", "Pool", "Club"],
      rating: 3.2,
      floors: 4,
      available_rooms: 11,
      total_rooms: 15,
      address: "666 Transylvania Lane, Umbre, Romania",
      image: "https://i.pinimg.com/originals/88/a9/8c/88a98ce61ce7f5e6b750c263453c78ec.jpg",
    },
    {
      id: 2,
      hotel_name: "Hotel Hunza",
      punch_line: "Come Have a stay with beautiful view! ",
      tags: ["Pool", "Blacony", "Open Sitting", "Bone-Fire"],
      rating: 4.2,
      floors: 1,
      available_rooms: 13,
      total_rooms: 25,
      address: "Hunza Road KKH",
      image: "https://www.apricottours.pk/wp-content/uploads/2017/03/hunza-serena-hotel.jpg",
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
        <SearchBar placeholder={"Search Hotel (Hotel Name)"} onSearch={handleSearch} onClear={handleClear} />
      )}
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.id}
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
