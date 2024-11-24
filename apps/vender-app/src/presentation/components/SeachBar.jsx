import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = ({
  placeholder,
  onSearch,
  onClear,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (text) => {
    setSearchText(text);
    if (text) {
      onSearch(text); // Call search as user types
    } else {
      onClear(); // Clear search results when input is empty
    }
  };

  const handleClear = () => {
    setSearchText("");
    onClear(); // Trigger clear action when clear icon is pressed
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          placeholder={placeholder}
          value={searchText}
          onChangeText={handleChangeText}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchText("");
          }}
          style={styles.clearIcon}
        >
          <Ionicons
            name={searchText != "" ? "close" : null}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginVertical:10
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  clearIcon: {
    position: "absolute",
    right: 15,
  },
});
