import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from "react-native-toast-notifications"
import { getStudentDashboardData } from '../../services/operations/StudentAPI'
import MainButton from '../../components/common/MainButton'

const StudentDashboard = ({ navigation }) => {

  const [dashboardData, setDashboardData] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.Auth);
  const toast = useToast();

  const fetchStudentDashboardData = async () => {
    const response = await dispatch(getStudentDashboardData(token, toast));
    console.log("Dashboard data : ", response);
    setDashboardData(response);
  }

  useEffect(() => {
    fetchStudentDashboardData();
  }, []);

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
            <View style={styles.top}>
              <Text style={styles.label}>Hi {dashboardData.instituteStudentData.name}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Outing Rating: {dashboardData.instituteStudentData.outingRating}</Text>
              <Text style={styles.label}>Discipline Rating: {dashboardData.instituteStudentData.disciplineRating}</Text>
            </View>

            <View style={styles.middle}>
              <Text style={styles.label}>No of days present: {dashboardData.attendenceRecords.presentDays.length}</Text>
              <Text style={styles.label}>No of days absent: {dashboardData.attendenceRecords.absentDays.length}</Text>
              <Text style={styles.label}>No of Complaints Registered: {dashboardData.numberOfComplaintsRegistered}</Text>
            </View>

            <MainButton text={"Edit Profile Data"} onPress={() => navigation.navigate("Edit Profile")} />
            <MainButton text={showDetails ? "Hide Details" : "View Details"} onPress={toggleDetails} />

            {
              showDetails && (
                <View style={styles.details}>
                  <Text style={styles.label}>Name: {dashboardData.instituteStudentData.name}</Text>
                  <Text style={styles.label}>Institute Email: {dashboardData.userData.email}</Text>
                  <Text style={styles.label}>Registration No: {dashboardData.instituteStudentData.regNo}</Text>
                  <Text style={styles.label}>Roll No: {dashboardData.instituteStudentData.rollNo}</Text>
                  <Text style={styles.label}>Year: {dashboardData.instituteStudentData.year}</Text>
                  <Text style={styles.label}>Branch: {dashboardData.instituteStudentData.branch}</Text>
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
              )
            }
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
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
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