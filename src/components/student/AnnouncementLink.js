import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const AnnouncementLink = ({ data }) => {

    const handlePress = ()=>{
        Linking.openURL(data.url);
    }

  return (
    <View style={{display:"flex",height:300,justifyContent: 'center', alignItems: 'center',backgroundColor: '#9DD6EB'}} onPress={handlePress}>
        <TouchableOpacity><Text style={{color: 'black',fontSize: 20,fontWeight: '600'}}>{data.title}</Text></TouchableOpacity>
    </View>
  )
}

export default AnnouncementLink
