import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>This is the Settings Screen</Text>
    </View>
  );
};

export default Settings;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
