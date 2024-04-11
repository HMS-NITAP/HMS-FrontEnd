import { View, Text, Button } from 'react-native'
import React from 'react'

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

export default function StudentTab({navigation}) {
  return (
    <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:2,fontWeight:'900',}}>Home</Text>
        <View style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:15}}>
          <Button onPress={() => navigation.navigate("StudentDashboard")} title='StudentDashboard' />
          <Button onPress={() => navigation.navigate("Announcements")} title='Announcements' />
          <Button onPress={() => navigation.navigate("OutingApplication")} title='OutingApplication' />
          <Button onPress={() => navigation.navigate("AttendanceHistory")} title='AttendanceHistory' />
          <Button onPress={() => navigation.navigate("OutingHistory")} title='OutingHistory' />
          <Button onPress={() => navigation.navigate("MessFeedback")} title='MessFeedback' />
          <Button onPress={() => navigation.navigate("VacationHistory")} title='VacationHistory' />
          <Button onPress={() => navigation.navigate("MedicalIssue")} title='MedicalIssue' />
          <Button onPress={() => navigation.navigate("RegisterComplaint")} title='RegisterComplaint' />
          <Button onPress={() => navigation.navigate("Login")} title='Logout' />
        </View>
    </View>
  )
}