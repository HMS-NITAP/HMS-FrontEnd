import React, { useEffect } from 'react'
import { View,Image,Text } from 'react-native'

const LaunchScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => (
      navigation.navigate("Home")
    ),10);
  });

  return (
    <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center",gap:10}}>
      <Image source={require('../assets/logo/collegeLogo.png')} style={{width:'70%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto'}} />
      <Text style={{textAlign:'center',fontFamily:'sans-serif-condensed',fontWeight:'800',color:'#212529',fontSize:24}}>NIT ANDHRA PRADESH</Text>
      <Text style={{textAlign:'center',fontFamily:'sans-serif-condensed',fontWeight:'600',color:'#343a40',fontSize:18}}>HOSTEL MANAGEMENT SYSTEM</Text>
    </View>
  )
}

export default LaunchScreen