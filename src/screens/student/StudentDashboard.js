import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Swiper from 'react-native-swiper'
import { useToast } from "react-native-toast-notifications"
import { getStudentDashboardData } from '../../services/operations/StudentAPI'
import MainButton from '../../components/common/MainButton'

const StudentDashboard=({navigation})=> {

  const [dashboardData,setDashboardData] = useState(null);

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);

  const toast = useToast();

  const fetchStudentDashboardData = async() => {
    const response = await dispatch(getStudentDashboardData(token,toast));
    console.log("Dashboard data : ",response);
    setDashboardData(response);
  }

  useEffect(() => {
    fetchStudentDashboardData();
  },[token]);

  const returnDate  = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
        {
          dashboardData ? (
            <ScrollView contentContainerStyle={{width:"90%", marginHorizontal:"auto", borderColor:"black", borderWidth:1, borderRadius:10, paddingHorizontal:10, paddingVertical:10}}>
              <View style={styles.top}>
                <Text style={styles.label}>Hi {dashboardData.instituteStudentData.name}</Text>
                <Text style={styles.label}>Outing Rating: {dashboardData.instituteStudentData.outingRating}</Text>
                <Text style={styles.label}>Discipline Rating: {dashboardData.instituteStudentData.disciplineRating}</Text>
              </View>

              <View style={styles.middle}>
                <Text style={styles.label}>No of days present: {dashboardData.attendenceRecords.presentDays.length}</Text>
                <Text style={styles.label}>No of days absent: {dashboardData.attendenceRecords.absentDays.length}</Text>
                <Text style={styles.label}>No of Complaints Registered: {dashboardData.numberOfComplaintsRegistered}</Text>
              </View>

              <MainButton text={"Edit Profile Data"} onPress={() => navigation.navigate("Edit Profile")} />

              <View style={styles.Details}>
                <Text style={styles.label}>Name: {dashboardData.instituteStudentData.name}</Text>
                <Text style={styles.label}>Institute Email: {dashboardData.userData.email}</Text>
                <Text style={styles.label}>Registration No: {dashboardData.instituteStudentData.regNo}</Text>
                <Text style={styles.label}>Roll No: {dashboardData.instituteStudentData.rollNo}</Text>
                <Text style={styles.label}>Year: {dashboardData.instituteStudentData.year}</Text>
                <Text style={styles.label}>Branch: {dashboardData.instituteStudentData.branch}</Text>
                {/* <Text style={styles.label}>PWD: {dashboardData.instituteStudentData.pwd}</Text> */}
                <Text style={styles.label}>Gender: {dashboardData.instituteStudentData.gender}</Text>
                <Text style={styles.label}>Community: {dashboardData.instituteStudentData.community}</Text>
                <Text style={styles.label}>Aadhaar Number: {dashboardData.instituteStudentData.aadharNumber}</Text>
                <Text style={styles.label}>DOB: {returnDate(dashboardData.instituteStudentData.dob)}</Text>
                <Text style={styles.label}>Blood Group: {dashboardData.instituteStudentData.bloodGroup}</Text>
                <Text style={styles.label}>Father Name: {dashboardData.instituteStudentData.fatherName}</Text>
                <Text style={styles.label}>Mother Name: {dashboardData.instituteStudentData.motherName}</Text>
                <Text style={styles.label}>Phone: {dashboardData.instituteStudentData.phone}</Text>
                <Text style={styles.label}>Parent's Phone: {dashboardData.instituteStudentData.parentsPhone}</Text>
                <Text style={styles.label}>Emergency Phone: {dashboardData.instituteStudentData.emergencyPhone}</Text>
                <Text style={styles.label}>Address: {dashboardData.instituteStudentData.address}</Text>
                <Text style={styles.label}>Cot No: {dashboardData.instituteStudentData.cotNo}</Text>
                <Text style={styles.label}>Room No: {dashboardData.instituteStudentData.roomNo}</Text>
                <Text style={styles.label}>Floor No: {dashboardData.instituteStudentData.floorNo}</Text>
                <Text style={styles.label}>Hostel Block: {dashboardData.hostelBlockData.name}</Text>
                <Text style={styles.label}>Mess Hall: {dashboardData.messHallData.name}</Text>
              </View>
            </ScrollView>
          ) : (
            <View><Text>Fetching Data, please wait...</Text></View>
          )
        }
    </ScrollView>
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
