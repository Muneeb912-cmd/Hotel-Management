import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, IconButton, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../../components/SeachBar";
import BookingDisplayCard from "../../../components/BookingDisplayCard";



const Bookings = () => {

  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleSearch = (query) => {
    const filtered = bookingData.filter((item) =>
      item.user_cnic.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilteredData(bookingData);
  };

  //booking request with proposed rent if approved then user have to make an advance payment of 25% to complete the booking
  //if user cancels the booking 15% will be refunded
  const [bookingData, setBookingData] = useState([
    {
      id: 1,
      user_id:"User 123",
      user_name: "Muneeb",
      user_cnic: "123456789",
      user_phone:"12345678",
      user_image: "",
      booking_dates: "21/11/24 - 23/11/24",
      hotel_id: "199",
      hotel_name: "Hotel Hunza",
      hotel_room_id: "2",
      hotel_room_category: "Normal",
      hotel_room_features: ["Balcony", "2 Double Bed"],
      hotel_room_images: ["Image 1", "Image 2", "Image 3", "Image 4"],
      hotel_room_rent: "8500",
      proposed_rent_by_customer: "6000",
      proposed_rent_by_manager: "7000",
      booking_status: "pending_approval",
      advance_payment_required: 1750, // 25% of proposed_rent_by_manager
      advance_payment_made: false,
      cancellation_refund: 1050, // 15% of advance payment
      payment_method: "Bank Transfer",
      payment_proof: null, // Empty until proof is uploaded
      payment_status: "pending",
      payment_date: null,
      booking_created_at: "2024-11-20T10:00:00Z",
      booking_approved_at: null,
      booking_canceled_at: null,
      notifications: {
        approval_sent: false,
        payment_reminder_sent: false,
        cancellation_confirmation_sent: false,
      },
      user_comments: "",
      manager_comments: "",
      booking_canceled: false,
      room_released: false,
    },
  ]);

  const [filteredData, setFilteredData] = useState(bookingData);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Bookings</Text>
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
        <SearchBar placeholder={"Search User (CNIC)"} onSearch={handleSearch} onClear={handleClear} />
      )}
      <FlatList
        style={styles.listContainer}
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookingDisplayCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default Bookings;
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
