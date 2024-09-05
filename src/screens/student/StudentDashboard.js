import React, { useCallback, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal, Pressable, ActivityIndicator } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentDashboardData } from '../../services/operations/StudentAPI';
import { useFocusEffect } from '@react-navigation/native';


const quotes = [
  "Wishing you a day filled with immense love, joy, and countless beautiful moments! May all your dreams come true on this special day! 🎉",
  "May your birthday be as extraordinary and wonderful as you are! Here's to celebrating you and the incredible person you are. Happy Birthday! 🎂",
  "Happy Birthday! May you enjoy every single moment of this special day, surrounded by love, laughter, and the people who matter most to you! 🎈",
  "Here's to a fantastic year ahead, filled with new adventures, growth, and endless possibilities! Cheers to your bright future and all the happiness it holds! 🍰",
  "Celebrate your special day in a special way, making memories that will last a lifetime! May your birthday be filled with all the joy and love your heart can hold! 🎁"
];

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const StudentDashboardScreen = () => {

  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getRatingLabel = (rating) => {
    rating = parseFloat(rating);
  
    if(rating>4 && rating<=5){
      return "Excellent";
    }else if(rating>3 && rating <= 4){
      return "Good";
    }else if(rating>2 && rating<=3){
      return "Average";
    }else if(rating>1 && rating<=2){
      return "Poor";
    }else if(rating>0 && rating<=1){
      return "Bad";
    }else{
      return "Not Rated";
    }
  };
  
  const [showBirthdayModal, setShowBirthdayModal] = useState(false);

  const checkIsDob = (dobString) => {
    const [_, birthMonth, birthDay] = dobString.split('-').map(Number);

    const now = Date.now(); 
    const currentDate = new Date(now); 

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1; 

    if(birthDay===date && birthMonth===month){
      setShowBirthdayModal(true);
    }
  }

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const toast = useToast();

  const fetchData = async() => {
    const response = await dispatch(getStudentDashboardData(token,toast));
    if(response){
      setDashboardData(response);
      if(response?.data?.dob){
        checkIsDob(response?.data?.dob);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [token,toast])
  );

  const closeBirthdayModal = () => {
    setShowBirthdayModal(false);
  };

  return (
    
    <ScrollView contentContainerStyle={{display:"flex", flexDirection:"column"}}>
      {
        !dashboardData ? (<View><Text style={{textAlign:"center", color:"black", fontSize:18, fontWeight:"700"}}>Please Wait...</Text></View>) : (
          <View style={styles.container}>
            <View style={styles.ratingContainer}>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingLabel}>Discipline Rating</Text>
                <AirbnbRating
                  defaultRating={Math.round(parseFloat(dashboardData?.data?.disciplineRating, 10))}
                  isDisabled
                  showRating={false}
                  size={20}
                />
                <Text style={styles.ratingText}>{getRatingLabel(dashboardData?.data?.disciplineRating)}</Text>
                <Text>{dashboardData?.data?.disciplineRating}</Text>
              </View>
              <View style={styles.ratingBox}>
                <Text style={styles.ratingLabel}>Outing Rating</Text>
                <AirbnbRating
                  defaultRating={Math.round(parseFloat(dashboardData?.data?.outingRating, 10))}
                  isDisabled
                  showRating={false}
                  size={20}
                />
                <Text style={styles.ratingText}>{getRatingLabel(dashboardData?.data?.outingRating)}</Text>
                <Text>{dashboardData?.data?.outingRating}</Text>
              </View>
            </View>
            <View style={styles.imageContainer}>
                {isLoading && (
                    <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
                )}
                <Image 
                    source={{ uri: dashboardData?.data?.image }} 
                    style={styles.image} 
                    onLoadStart={() => setIsLoading(true)}
                    onLoad={() => setIsLoading(false)}
                />
                <Text style={styles.name}>{dashboardData?.data?.name}</Text>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>Reg No: {dashboardData?.data?.regNo}</Text>
              <Text style={styles.detailsText}>Roll No: {dashboardData?.data?.rollNo}</Text>
              <Text style={styles.detailsText}>Email: {dashboardData?.userData?.email}</Text>
              <Text style={styles.detailsText}>Gender: {dashboardData?.data?.gender==="M" ? "Male" : "Female"}</Text>
              <Text style={styles.detailsText}>DOB: {new Date(dashboardData?.data?.dob).toLocaleDateString()}</Text>
              <Text style={styles.detailsText}>Year: {dashboardData?.data?.year}</Text>
              <Text style={styles.detailsText}>Branch: {dashboardData?.data?.branch}</Text>
              <Text style={styles.detailsText}>Blood Group: {dashboardData?.data?.bloodGroup}</Text>
              <Text style={styles.detailsText}>Aadhaar Number: {dashboardData?.data?.aadhaarNumber}</Text>
              <Text style={styles.detailsText}>Contact No: {dashboardData?.data?.phone}</Text>
              <Text style={styles.detailsText}>Father's Name: {dashboardData?.data?.fatherName}</Text>
              <Text style={styles.detailsText}>Mother's Name: {dashboardData?.data?.motherName}</Text>
              <Text style={styles.detailsText}>Parents' Contact: {dashboardData?.data?.parentsPhone}</Text>
              <Text style={styles.detailsText}>Emergency Contact: {dashboardData?.data?.emergencyPhone}</Text>
              <Text style={styles.detailsText}>Address: {dashboardData?.data?.address}</Text>
            </View>
            <View style={styles.sectionContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                <View style={styles.column}>
                  <Text style={styles.columnTitle}>Hostel Details</Text>
                  <Text style={styles.detailsText}>Hostel Name: {dashboardData?.data?.hostelBlock?.name}</Text>
                  <Text style={styles.detailsText}>Capacity: {dashboardData?.data?.hostelBlock?.capacity}</Text>
                  <Text style={styles.detailsText}>Gender: {dashboardData?.data?.hostelBlock?.gender==="M" ? "Boys Hostel" : "Girls Hostel"}</Text>
                  <Image source={{ uri: dashboardData?.data?.hostelBlock?.image }} style={styles.hostelImage} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnTitle}>Room Details</Text>
                  <Text style={styles.detailsText}>Room Type: {dashboardData?.data?.hostelBlock?.roomType}</Text>
                  <Text style={styles.detailsText}>Room Number: {dashboardData?.data?.cot?.room?.roomNumber}</Text>
                  <Text style={styles.detailsText}>Floor Number: {dashboardData?.data?.cot.room.floorNumber}</Text>
                  <Text style={styles.detailsText}>Cot Number: {dashboardData?.data?.cot?.cotNo}</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnTitle}>Mess Details</Text>
                  {dashboardData?.data?.messHall ? (
                    <View>
                      <Text style={styles.detailsText}>Mess Name: {dashboardData?.data?.messHall?.hallName}</Text>
                      <Text style={styles.detailsText}>Capacity: {dashboardData?.data?.messHall?.capacity}</Text>
                    </View>
                  ) : (
                    <Text style={styles.detailsTextRed}>Mess Hall not assigned</Text>
                  )}
                </View>
                <View style={styles.column}>
                  <Text style={styles.columnTitle}>Payment Details</Text>
                  <TouchableOpacity>
                    <Text style={styles.link}>Hostel Fee Receipt</Text>
                  </TouchableOpacity>
                  {
                    dashboardData?.data?.instituteFeeReceipt && <TouchableOpacity>
                                    <Text style={styles.link}>Institute Fee Receipt</Text>
                                  </TouchableOpacity>
                  }
                </View>
              </ScrollView>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={showBirthdayModal}
              onRequestClose={() => {
                  setShowBirthdayModal(!showBirthdayModal);
              }}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Happy Birthday, {dashboardData?.data?.name}!</Text>
                  <Text style={styles.quote}>{getRandomQuote()}</Text>
                  <Pressable
                    style={styles.closeButton}
                    onPress={closeBirthdayModal}
                  >
                    <Text style={styles.closeButtonText}>Thank you !</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ratingBox: {
    alignItems: 'center',
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#dcedc8',
    marginHorizontal: 5,
    elevation:10,
    color:"#495057",
  },
  ratingLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color:"#495057",
  },
  ratingText: {
    marginTop: 5,
    fontSize: 14
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: 'black'
  },
  detailsContainer: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation:10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight:"600",
    color:"black",
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#388e3c'
  },
  horizontalScroll: {
    padding: 10
  },
  column: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cfd8dc',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation:10,
  },
  columnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#388e3c',
    textAlign: 'center'
  },
  hostelImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 10
  },
  detailsTextRed: {
    fontSize: 16,
    marginBottom: 5,
    color: 'red'
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    marginBottom: 5
  },
  attendanceContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  attendanceText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width:"90%",
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    gap:10,
    alignItems: 'center'
  },
  quote:{
    color:"black",
    fontSize:16,
    fontWeight:"500",
    textAlign:"center"
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#388e3c'
  },
  closeButton: {
    backgroundColor: '#388e3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default StudentDashboardScreen;