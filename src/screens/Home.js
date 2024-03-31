import React from 'react'
import { View,Text, Button } from 'react-native'

const Home = ({navigation}) => {
  return(
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:2,fontWeight:'900',}}>Home</Text>
        <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:15}}>
          <Button onPress={() => navigation.navigate("Login")} title='LOGIN' />
          <Button onPress={() => navigation.navigate("SignUp")} title='SIGNUP' />
          <Button onPress={() => navigation.navigate("CreateAnnouncement")} title='Create Announcement' />
          <Button onPress={() => navigation.navigate("HostelBlocks")} title='Hostel Blocks' />
          <Button onPress={() => navigation.navigate("ContactUs")} title='Contact Us' />
          <Button onPress={() => navigation.navigate("DevelopmentTeam")} title='DevelopmentTeam' />
          <Button onPress={() => navigation.navigate("ResetPasswordEmailSent")} title='ResetPasswordEmailSent' />
        </View>
    </View>
  )
}

export default Home