/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { View,Text, Button } from 'react-native'
import { useToast } from "react-native-toast-notifications"

const Home = ({navigation}) => {

  const toast = useToast();
  toast.show("HIIIekk");


  return(
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize: 2,fontWeight:'900',}}>Home</Text>
        <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:15}}>
          <Button onPress={() => navigation.navigate("Login")} title='LOGIN' />
          <Button onPress={() => navigation.navigate("SignUp")} title='SIGNUP' />
          <Button onPress={() => navigation.navigate("CreateAnnouncement")} title='Create Announcement' />
          <Button onPress={() => navigation.navigate("HostelBlocks")} title='Hostel Blocks' />
          <Button onPress={() => navigation.navigate("ContactUs")} title='Contact Us' />
          <Button onPress={() => navigation.navigate("DevelopmentTeam")} title='Development Team' />
          <Button onPress={() => navigation.navigate("ResetPasswordEmailSent")} title='Reset Password Email Sent' />
          <Button onPress={() => navigation.navigate("ResetPassword")} title="Reset Password" />
          <Button onPress={() => navigation.navigate("OtpInput")}  title='Otp Input' />
          <Button onPress={() => navigation.navigate("StudentDashboard")} title="StudentDashboard" />
          <Button onPress={() => navigation.navigate("ResetPasswordSuccess")} title='Reset Password Success' />
          <Button onPress={() => navigation.navigate("StudentTab")} title='StudentTab' />
        </View>
    </View>
  )
}

export default Home