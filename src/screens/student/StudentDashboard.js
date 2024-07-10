import { View, Text, StyleSheet, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from "react-native-toast-notifications"
import { getStudentDashboardData } from '../../services/operations/StudentAPI'
import { useFocusEffect } from '@react-navigation/native'
import BirthdayGreetingCard from '../../components/student/BirthdayGreetingCard'

const StudentDashboard = () => {

  const [dashboardData, setDashboardData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isBirthDay, setIsBirthday] = useState(false);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.Auth);
  const toast = useToast();

  const checkIsDob = (dobString) => {

    const [_, birthMonth, birthDay] = dobString.split('-').map(Number);

    const now = Date.now(); 
    const currentDate = new Date(now); 

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 

    if(birthDay===date && birthMonth===month){
      setIsBirthday(true);
    }
  }

  const fetchData = async () => {
    const response = await dispatch(getStudentDashboardData(token, toast));
    checkIsDob(response?.data?.dob);
    setDashboardData(response);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [token,toast])
  );

  const returnDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        dashboardData ? (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {
              isBirthDay && <BirthdayGreetingCard />
            }
            <View style={styles.top}>
                <View style={{ width: 80, height: 80, borderRadius: 40, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', }}>
                    {imageLoading && (
                        <ActivityIndicator size="large" color="#0000ff" style={{ position: 'absolute', zIndex: 1 }} />
                    )}
                    <Image
                        source={{ uri: dashboardData?.data?.image }}
                        style={{ width: 80, height: 80, }}
                        onLoadStart={() => setImageLoading(true)}
                        onLoad={() => setImageLoading(false)}
                    />
                </View>
              <Text style={styles.label}>Hi {dashboardData?.data?.name}!</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Outing Rating: {dashboardData?.outingRating}</Text>
              <Text style={styles.label}>Discipline Rating: {dashboardData?.disciplineRating}</Text>
            </View>

            <View style={styles.middle}>
              <Text style={styles.label}>No of days present: {dashboardData?.data?.attendence?.presentDays.length}</Text>
              <Text style={styles.label}>No of days absent: {dashboardData?.data?.attendence?.absentDays.length}</Text>
            </View>

            <View style={styles.details}>
                  <Text style={styles.label}>Institute Email: {dashboardData.userData.email}</Text>
                  <Text style={styles.label}>Registration No: {dashboardData.data.regNo}</Text>
                  <Text style={styles.label}>Roll No: {dashboardData.data.rollNo}</Text>
                  <Text style={styles.label}>Year: {dashboardData?.data?.year}</Text>
                  <Text style={styles.label}>Branch: {dashboardData?.data?.branch}</Text>
                  <Text style={styles.label}>Gender: {dashboardData?.data?.gender}</Text>
                  <Text style={styles.label}>Community: {dashboardData?.data?.community}</Text>
                  <Text style={styles.label}>Aadhaar Number: {dashboardData?.data?.aadharNumber}</Text>
                  <Text style={styles.label}>DOB: {returnDate(dashboardData?.data?.dob)}</Text>
                  {/* <Text style={styles.label}>Blood Group: {dashboardData?.data?.bloodGroup}</Text>
                  <Text style={styles.label}>Father Name: {dashboardData.data.fatherName}</Text>
                  <Text style={styles.label}>Mother Name: {dashboardData.data.motherName}</Text>
                  <Text style={styles.label}>Phone: {dashboardData.data.phone}</Text>
                  <Text style={styles.label}>Parent's Phone: {dashboardData.data.parentsPhone}</Text>
                  <Text style={styles.label}>Emergency Phone: {dashboardData.data.emergencyPhone}</Text>
                  <Text style={styles.label}>Address: {dashboardData.data.address}</Text>
                  <Text style={styles.label}>Cot No: {dashboardData.data.cotNo}</Text>
                  <Text style={styles.label}>Room No: {dashboardData.instituteStudentData.roomNo}</Text>
                  <Text style={styles.label}>Floor No: {dashboardData.instituteStudentData.floorNo}</Text>
                  <Text style={styles.label}>Hostel Block: {dashboardData.hostelBlockData.name}</Text>
                  <Text style={styles.label}>Mess Hall: {dashboardData.messHallData.name}</Text> */}
                </View>

            {/* <MainButton text={"Edit Profile Data"} onPress={() => navigation.navigate("Edit Profile")} />
            <MainButton text={showDetails ? "Hide Details" : "View Details"} onPress={toggleDetails} /> */}

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
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },
  contentContainer: {
    width: "100%",
    marginHorizontal: "auto",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 20,
  },
  top: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  middle: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
  },
  details: {
    width: "100%",
    display: 'flex',
    alignItems: 'start',
    gap: 10,
    paddingVertical: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
})