import { View, Text, StyleSheet, Button, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainButton from '../../components/common/MainButton'
import { getAllAnnouncements } from '../../services/operations/AnnouncementAPI'
import {useDispatch,useSelector} from 'react-redux'
import Swiper from 'react-native-swiper'
import { useToast } from "react-native-toast-notifications"

const StudentDashboard=()=> {

  const StudentData = [
    {
        name : "T Abhiram",
        RegistrationNo : 422259,
        RollNo : "none",
        Year : 2,
        Branch : "CSE",
        Room : "F-104",
        Block : "Nagavalli Hall Of Residancy",
        Contact : 7478327120,
        emailId : "422259@student.nitandhra.ac.in",
        Address : "Chittore",
        OutingRating : 5,
        DisciplineRating : 5,
        DaysPresent : 10,
        DaysAbsent : 3 
    },
  ]

  const [details,setDetails] = useState(true);
  const [announcementData,setAnnouncementData] = useState([]);
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);

  const toast = useToast();

  useEffect(() => {
    console.log("Token : ",token);
    const fetchAllAnnouncementData = () => {
      const response = dispatch(getAllAnnouncements(token,toast));
      setAnnouncementData(response);
    };

    fetchAllAnnouncementData();
  },[token]);

  const detailsHandler=() => {
    setDetails(true);
  }
  const ComplaintsHandler=()=>{
    setDetails(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.label}>Hi {StudentData[0].name}</Text>
        <Text style={styles.label}>Outing Rating: {StudentData[0].OutingRating}</Text>
        <Text style={styles.label}>Discipline Rating: {StudentData[0].DisciplineRating}</Text>
      </View>

      <ScrollView style={styles.announcement}>
        <Swiper style={{height:200,backgroundColor:"red",color:"white"}}>
          <Text style={styles.slides}>1</Text>
          <Text style={styles.slides}>2</Text>
          <Text style={styles.slides}>3</Text>
          <Text style={styles.slides}>4</Text>
        </Swiper>
      </ScrollView>

      <View style={styles.middle}>
        <Text style={styles.label}>No of days present: {StudentData[0].DaysPresent}</Text>
        <Text style={styles.label}>No of days absent: {StudentData[0].DaysAbsent}</Text>
        <Text style={styles.label}>No of Complaints Registered: 0</Text>
      </View>
      <View style={styles.buttonView}>
            <View style={styles.subFormView}>
              <MainButton text={"Your Details"} onPress={detailsHandler}/>
            </View>
            <View style={styles.subFormView}>
              <MainButton text={"Complaints Registered"} onPress={ComplaintsHandler}/>
            </View>
        </View>
        <View >
          {details && 
          <View style={styles.Details}>
            <Text style={styles.label}>Name: {StudentData[0].name}</Text>
            <Text style={styles.label}>Registration No: {StudentData[0].RegistrationNo}</Text>
            <Text style={styles.label}>Roll No: {StudentData[0].RollNo}</Text>
            <Text style={styles.label}>Year: {StudentData[0].Year}</Text>
            <Text style={styles.label}>Branch: {StudentData[0].Branch}</Text>
            <Text style={styles.label}>Room: {StudentData[0].Room}</Text>
            <Text style={styles.label}>Block: {StudentData[0].Block}</Text>
            <Text style={styles.label}>Contact Number: {StudentData[0].Contact}</Text>
            <Text style={styles.label}>e-mail ID: {StudentData[0].emailId}</Text>
            <Text style={styles.label}>Address: {StudentData[0].Address}</Text>
          </View>
          }

          {!details && 
          <View style={styles.middle}>
            <Text>No Complaints Registered</Text>
          </View>
          }
        </View>
    </View>
  )
}

export default StudentDashboard

const styles = StyleSheet.create({
  container:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'start',
      alignItems:'center',
      width:'100%',
      height:'100%',
      gap : 20
  },
  heading:{
      width:'100%',
      backgroundColor:'#ffb703',
      paddingVertical:15,
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize:100,
  },
  subFormView:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'start',
      gap:10,
  },
  buttonView:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'start',
    gap:10,
  },
  form:{
      paddingTop:60,
      paddingBottom:30,
      width:"80%",
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      flexDirection:'column',
      gap:30,
  },
  label:{
      fontSize:15,
      fontWeight:'500',
      color:'#000000',
  },
  input:{
      padding:10,
      paddingHorizontal:10,
      borderWidth:1,
      borderRadius:10,
      borderColor:"#adb5bd",
  },
  button:{
      textAlign:'center',
      borderRadius:30,
      fontSize:15,
      fontWeight:'800',
      color:"black"
  },
  dropdownOptions: {
    width: 250, // Set the same width as the dropdown
    padding:10,
    paddingHorizontal:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#adb5bd",
  },
  linkContainer:{
    width:"100%",
    gap:20,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    paddingVertical:30,
    paddingHorizontal:10,
  },
  line: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,      
    marginVertical: 10,         
  },
  top: {
    width:"100%",
    display : 'flex',
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'space-between'
  },
  middle: {
    width:"100%",
    display : 'flex',
    alignItems : 'center',
    gap : 10
  },
  Details :{
    width:"100%",
    display : 'flex',
    alignItems:'start',
    gap : 10,

  },
  slides:{
    width:"100%",
    height:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }
})
