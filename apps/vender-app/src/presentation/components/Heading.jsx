import React from 'react'
import { StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

const Heading = ({title}) => {
  return (
   <Text style={styles.heading} variant='headlineSmall'>
        {title}
   </Text>
  )
}

const styles = StyleSheet.create({
    heading:{
        textAlign:"center",
        marginTop:10,
        fontSize:28,
        fontWeight:"bold"
    }
  });

export default Heading;

