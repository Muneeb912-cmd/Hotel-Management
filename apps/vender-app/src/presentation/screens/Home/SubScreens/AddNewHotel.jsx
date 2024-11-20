import React from 'react'
import { View , StyleSheet} from 'react-native'
import { Text } from 'react-native-paper'

const AddNewHotel = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>This is the AddNewHotel Screen</Text>
    </View>
  )
}

export default AddNewHotel
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
  });