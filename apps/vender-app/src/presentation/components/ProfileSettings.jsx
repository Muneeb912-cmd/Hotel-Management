import React from 'react'
import { View,StyleSheet } from 'react-native'
import SwitchSettings from './SwitchSettings';
import { Divider,Text } from 'react-native-paper';

const ProfileSettings = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Profile Settings</Text>
        <Divider style={{ marginVertical: 5, height: 2 }} />
          <SwitchSettings/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    heading:{
        fontSize:20
    }
  });
  

export default ProfileSettings
