// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const exampleData = [
//     {
//       id: 1,
//       floorName: 'Floor 1',
//       rooms: [
//         { id: 1, name: 'Room 101', students: ['stu1', 'stu2'] },
//         { id: 2, name: 'Room 102', students: ['stu3', 'stu4'] },
//       ],
//     },
//     {
//       id: 2,
//       floorName: 'Floor 2',
//       rooms: [
//         { id: 3, name: 'Room 201', students: ['stu5', 'stu6'] },
//         { id: 4, name: 'Room 202', students: ['stu7', 'stu8'] },
//       ],
//     },
//   ];

// const generateDummyData = () => {
//   const floors = [];
//   for (let i = 1; i <= 4; i++) {
//     const rooms = [];
//     for (let j = 1; j <= 75; j++) {
//       const room = {
//         id: j + (i - 1) * 75,
//         name: `Room ${j + (i - 1) * 75}`,
//         students: Array.from({ length: 2 }, (_, index) => `Student ${j + (i - 1) * 75}.${index + 1}`),
//       };
//       rooms.push(room);
//     }
//     floors.push({ id: i, floorName: `Floor ${i}`, rooms });
//   }
//   return floors;
// };

// const TakeAttendance = () => {
//   const navigation = useNavigation();
//   const [floors, setFloors] = useState([]);
//   const [selectedFloor, setSelectedFloor] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const dummyData = generateDummyData();
//     setFloors(dummyData);
//   }, []);

//   const roomsPerPage = 10;
//   const totalRooms = floors[selectedFloor - 1]?.rooms.length || 0;
//   const totalPages = Math.ceil(totalRooms / roomsPerPage);
//   const visibleRooms = floors[selectedFloor - 1]?.rooms.slice(
//     (currentPage - 1) * roomsPerPage,
//     currentPage * roomsPerPage
//   );

//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity
//         style={styles.roomItem}
//         onPress={() => handleRoomPress(item)}
//       >
//         <Text style={styles.roomName}>{item.name}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const handleRoomPress = (room) => {
//     navigation.navigate('RoomDetails', { room });
//   };

//   const handleFloorChange = (floor) => {
//     setSelectedFloor(floor);
//     setCurrentPage(1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Attendance</Text>
//       <View style={styles.controls}>
//         <Text style={styles.label}>Select Floor:</Text>
//         <FlatList
//           data={floors}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={[styles.floorButton, selectedFloor === item.id && styles.selectedFloor]}
//               onPress={() => handleFloorChange(item.id)}
//             >
//               <Text style={styles.floorButtonText}>{item.floorName}</Text>
//             </TouchableOpacity>
//           )}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       </View>
//       <FlatList
//         data={visibleRooms}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         contentContainerStyle={styles.listContainer}
//       />
//       <View style={styles.pagination}>
//         <TouchableOpacity
//           style={[styles.pageButton, currentPage === 1 && styles.disabledButton]}
//           onPress={handlePrevPage}
//           disabled={currentPage === 1}
//         >
//           <Text style={styles.pageButtonText}>Previous</Text>
//         </TouchableOpacity>
//         <Text style={styles.pageText}>{`Page ${currentPage} of ${totalPages}`}</Text>
//         <TouchableOpacity
//           style={[styles.pageButton, currentPage === totalPages && styles.disabledButton]}
//           onPress={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           <Text style={styles.pageButtonText}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   controls: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     marginRight: 10,
//   },
//   floorButton: {
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginRight: 10,
//   },
//   selectedFloor: {
//     backgroundColor: 'lightblue',
//     borderColor: 'blue',
//   },
//   floorButtonText: {
//     fontSize: 16,
//   },
//   listContainer: {
//     flexGrow: 1,
//   },
//   roomItem: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   roomName: {
//     fontSize: 18,
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   pageButton: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#007bff',
//   },
//   pageButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   pageText: {
//     fontSize: 16,
//   },
//   disabledButton: {
//     backgroundColor: '#ccc',
//   },
// });

// export default TakeAttendance;


import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudentsByHostelBlockForAttendence, markStudentAbsent, markStudentPresent, unmarkStudentAbsent, unmarkStudentPresent } from '../../services/operations/OfficialAPI';
import { useForm,Controller } from 'react-hook-form'
import MainButton from '../../components/common/MainButton';

const TakeAttendance = () => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const toast = useToast();

  const [AttendenceData,setAttendenceData] = useState(null);
  const [searchDate, setSearchDate] = useState(null);
  const [tab,setTab] = useState("NOTGIVEN");

  const fetchAttendenceRecords = async() => {
    if(searchDate){
      const response = await dispatch(getAllStudentsByHostelBlockForAttendence(token,toast));
      console.log("Response",response);
      setAttendenceData(response);
    }
  }

  useEffect(() => {
    fetchAttendenceRecords();
  },[searchDate]);

  const onSubmit = async(data) => {
    setSearchDate(data.attendenceDate);
  }

  const markPresent = async(attendenceRecordId) => {
    await dispatch(markStudentPresent(searchDate,attendenceRecordId,token,toast));
    fetchAttendenceRecords();
  }

  // const unmarkPresent = async(attendenceRecordId) => {
  //   await dispatch(unmarkStudentPresent(searchDate,attendenceRecordId,token,toast));
  //   fetchAttendenceRecords();
  // }

  const markAbsent = async(attendenceRecordId) => {
    await dispatch(markStudentAbsent(searchDate,attendenceRecordId,token,toast));
    fetchAttendenceRecords();
  }

  // const unmarkAbsent = async(attendenceRecordId) => {
  //   await dispatch(unmarkStudentAbsent(searchDate,attendenceRecordId,token,toast));
  //   fetchAttendenceRecords();
  // }

  return (
    <ScrollView contentContainerStyle={{width:"100%", paddingHorizontal:10,paddingVertical:10,justifyContent:'start',alignItems:"center",gap:15}}>
      <View style={styles.form}>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Attendence Date<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="attendenceDate"
            defaultValue=""
          />
          {errors.attendenceDate && <Text style={styles.errorText}>Date is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <MainButton text="Continue" onPress={handleSubmit(onSubmit)} />
        </View>
      </View>
      {
         !searchDate ? (<View style={{marginHorizontal:"auto"}}><Text style={{textAlign:"center", color:"black", fontWeight:"700", fontSize:16}}>Please Enter a Date To Proceed</Text></View>) : (
          <View style={{width:"100%", marginHorizontal:"auto", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", overflow:'hidden', borderWidth:1, borderColor:"black", borderRadius:10}}>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:tab==="NOTGIVEN" ? "#ffb703" : "white",}} onPress={() => setTab("NOTGIVEN")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Not Given</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:tab==="PRESENT" ? "#ffb703" : "white",}} onPress={() => setTab("PRESENT")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Present</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:tab==="ABSENT" ? "#ffb703" : "white",}} onPress={() => setTab("ABSENT")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Absent</Text></TouchableOpacity>
          </View>
        )
      }

      {
        AttendenceData && tab==="NOTGIVEN" &&
          AttendenceData.map((data) => (
            !data?.presentDays.includes(searchDate) && !data?.absentDays.includes(searchDate) &&
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center",width:"95%",marginHorizontal:"auto",paddingHorizontal:10,paddingVertical:10,borderRadius:10,borderColor:"black",borderWidth:1}}>
                <View>
                  <Text>Name : {data?.student?.name}</Text>
                  <Text>Year : {data?.student?.year}</Text>
                  <Text>Cot No : {data?.student?.cotNo}</Text>
                  <Text>Room No : {data?.student?.roomNo}</Text>
                  <Text>Floor No : {data?.student?.floorNo}</Text>
                </View>
                <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:15}}>
                  <TouchableOpacity onPress={() => markPresent(data?.id)} style={{paddingHorizontal:15, paddingVertical:10, backgroundColor:"green", borderRadius:100}}><Text style={{fontWeight:"900",color:"white"}}>P</Text></TouchableOpacity>
                  <TouchableOpacity onPress={() => markAbsent(data?.id)} style={{paddingHorizontal:15, paddingVertical:10, backgroundColor:"red", borderRadius:100}}><Text style={{fontWeight:"900",color:"white"}}>A</Text></TouchableOpacity>
                </View>
              </View>
          ))  
      }
      {
        AttendenceData && tab==="PRESENT" &&
          AttendenceData.map((data) => (
            data?.presentDays.includes(searchDate) &&
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center",width:"100%",marginHorizontal:"auto",paddingHorizontal:10,paddingVertical:10,borderRadius:10,borderColor:"black",borderWidth:1}}>
                <View>
                  <Text>Name : {data?.student?.name}</Text>
                  <Text>Year : {data?.student?.year}</Text>
                  <Text>Cot No : {data?.student?.cotNo}</Text>
                  <Text>Room No : {data?.student?.roomNo}</Text>
                  <Text>Floor No : {data?.student?.floorNo}</Text>
                </View>
                <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:15}}>
                  <TouchableOpacity style={{paddingHorizontal:15, paddingVertical:10, backgroundColor:"green", borderRadius:100}}><Text style={{fontWeight:"900",color:"white"}}>P</Text></TouchableOpacity>
                </View>
              </View>
          ))  
      }
      {
        AttendenceData && tab==="ABSENT" &&
          AttendenceData.map((data) => (
            data?.absentDays.includes(searchDate) &&
              <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between", alignItems:"center",width:"95%",marginHorizontal:"auto",paddingHorizontal:10,paddingVertical:10,borderRadius:10,borderColor:"black",borderWidth:1}}>
                <View>
                  <Text>Name : {data?.student?.name}</Text>
                  <Text>Year : {data?.student?.year}</Text>
                  <Text>Cot No : {data?.student?.cotNo}</Text>
                  <Text>Room No : {data?.student?.roomNo}</Text>
                  <Text>Floor No : {data?.student?.floorNo}</Text>
                </View>
                <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:15}}>
                  <TouchableOpacity style={{paddingHorizontal:15, paddingVertical:10, backgroundColor:"red", borderRadius:100}}><Text style={{fontWeight:"900",color:"white"}}>A</Text></TouchableOpacity>
                </View>
              </View>
          ))  
      }
    </ScrollView>
  )
}

export default TakeAttendance

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center',
    width:'100%',
    height:'100%',
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
  form:{
    paddingTop:60,
    paddingBottom:30,
    width:"80%",
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    gap:10,
  },
  subFormView:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'start',
    gap:10,
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
    color:"black",
  },
  button:{
    textAlign:'center',
    borderRadius:30,
    fontSize:15,
    fontWeight:'800',
    color:"black"
  },
  createAccount:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'500',
    color:"#4a4e69",
  },
  errorText:{
    fontSize:14,
    color:"red",
  }
})