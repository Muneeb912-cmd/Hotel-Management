import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Bookings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>This is the Bookings Screen</Text>
    </View>
  )
}

export default Bookings
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });