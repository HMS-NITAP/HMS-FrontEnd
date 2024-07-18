import React, { useCallback, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux'
import { fetchDashboardData } from '../../services/operations/AdminAPI';
import { useFocusEffect } from '@react-navigation/native';

const AdminDashboard = () => {

    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.Auth);
    const toast = useToast();

    const [dashboardData, setDashboardData] = useState(null);

    const fetchData = async() => {
        const response = await dispatch(fetchDashboardData(token,toast));
        setDashboardData(response);
    }

    useFocusEffect(
        useCallback(() => {
          fetchData();
        }, [token,toast])
    );

  return (
    <ScrollView contentContainerStyle={{width:"100%", display:"flex", flexDirection:"column", padding:15, justifyContent:"center", alignItems:"center", gap:20}}>
        {
            dashboardData && dashboardData?.map((data,index) => (
                <View key={index} style={{width:"100%", display:"flex", flexDirection:"column", padding:10, borderColor:"black", borderRadius:15, borderWidth:1}}>
                    <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:20}}>{data?.blockName}</Text>
                    <View style={{display:"flex", flexDirection:"column", justifyContent:"flex-start", gap:5, marginTop:10}}>
                        <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:15}}>Total Rooms: {data?.totalRooms}</Text>
                        <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:15}}>Total Cots: {data?.totalCots}</Text>
                        <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:15}}>Available Cots: {data?.availableCots}</Text>
                        <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:15}}>Blocked Cots: {data?.blockedCots}</Text>
                        <Text style={{textAlign:"center", fontWeight:"700", color:"black", fontSize:15}}>Booked Cots: {data?.bookedCots}</Text>
                    </View>
                </View>
            ))
        }
    </ScrollView>
  )
}

export default AdminDashboard