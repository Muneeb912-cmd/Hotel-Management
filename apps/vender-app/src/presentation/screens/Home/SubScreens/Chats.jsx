import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'

const Chats = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>This is the Chats Screen</Text>
    </View>
  )
}

export default Chats
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });