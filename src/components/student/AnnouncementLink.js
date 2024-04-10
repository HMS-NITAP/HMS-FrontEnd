import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native'
import React from 'react'

const AnnouncementLink = ({ data }) => {
    const handlePress = ()=>{
        Linking.openURL(data.url)
    }
  return (
    <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline', flex:1 }}>{data.title}</Text>
        <View style={styles.line} />
    </TouchableOpacity>
  )
}

export default AnnouncementLink


const styles = StyleSheet.create({
    line: {
      borderBottomColor: 'black', 
      borderBottomWidth: 1,      
      marginVertical: 10,         
    },
  });
  