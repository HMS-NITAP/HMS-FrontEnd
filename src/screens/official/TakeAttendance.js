import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux'
import { fetchHostelBlockRoomsForAttendance } from '../../services/operations/OfficialAPI';
import { useFocusEffect } from '@react-navigation/native';

const TakeAttendance = () => {

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const toast = useToast();

  const [hostelData, setHostelData] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [floorRooms, setFloorRooms] = useState(null);

  const [floorCount, setFloorCount] = useState(null);
  const floorsArray = Array.from({ length: floorCount + 1 }, (_, index) => ({
    id : index,
  }));

  const fetchData = async() => {
    const response = await dispatch(fetchHostelBlockRoomsForAttendance(token,toast));
    if(response){
      setFloorCount(parseInt(response?.floorCount))
      // console.log("Data", response);
      setHostelData(response);
    }
  }

  useEffect(() => {
    const filterRoomsFloorWise = () => {
      if(!hostelData){
        return;
      }
      const filterRooms = hostelData?.rooms.filter((room) => room?.floorNumber===selectedFloor);
      setFloorRooms(filterRooms);
      console.log("Fileter data",JSON.stringify(filterRooms));
    }
    filterRoomsFloorWise();
  },[selectedFloor,hostelData]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [token,toast])
  );

  return (
    <ScrollView contentContainerStyle={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingHorizontal:15, paddingVertical:20}}>
      {
        !hostelData ? (<Text style={{textAlign:"center", color:"black", fontSize:16, fontWeight:"600"}}>No Hostel Block Assigned</Text>) : 
        (
          <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:20}}>
            <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Text style={{color:"black", textAlign:"center", fontSize:16, fontWeight:"700"}}>Assigned Hostel Block : {hostelData?.name}</Text>
            </View>
            {
              floorCount && (
                <View style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", gap:20}}>
                  <Text style={{color:"black", fontWeight:"600", fontSize:16}}>Select Floor : </Text>
                  <View style={{display:"flex", maxWidth:"70%", gap:10, flexDirection:"row", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>
                    {
                      floorsArray?.map((floor,index) => (
                        <TouchableOpacity onPress={() => setSelectedFloor(floor?.id)} style={{paddingHorizontal:10, paddingVertical:5, borderRadius:1000, backgroundColor: selectedFloor === floor?.id ? '#b5e48c' : 'white', borderWidth:0.5, borderColor:selectedFloor === floor?.id ? 'transparent' : 'black'}} key={index}>
                          <Text style={{color: 'black', fontWeight: '700',}}>{floor?.id}</Text>
                        </TouchableOpacity>
                      )) 
                    }
                  </View>
                </View>
              )
            }
            {
              selectedFloor!==null && floorRooms.map((room,index) => (
                      <View key={index} style={{width:"90%", borderStyle:"dashed", marginHorizontal:"auto", gap:20, borderWidth:1.5, borderColor:"black", borderRadius:10, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingHorizontal:15, paddingVertical:15}}>
                        <Text style={{textAlign:"center", fontWeight:"800", color:"red", fontSize:16, color:"#1b263b"}}>Room {room?.roomNumber}</Text>
                        <View style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:10}}>
                          {
                            room.cots.map((cot,index) => (
                              cot?.status==="BOOKED" && cot?.student!==null && <TouchableOpacity key={index} style={{borderWidth:1, borderStyle:"dotted",borderColor:"black",borderRadius:8, paddingHorizontal:8, paddingVertical:8, backgroundColor:"#ffdd00"}}>
                                <Text style={{color:"black", fontWeight:"600", fontSize:16}}>Cot {cot?.cotNo}</Text>
                              </TouchableOpacity>
                            ))
                          }
                        </View>
                      </View>
              ))
            }
          </View>      
        )
      }
    </ScrollView>
  )
}

export default TakeAttendance