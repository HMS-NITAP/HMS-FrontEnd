import React, { useEffect, useState } from 'react'
import { ScrollView,Text, View, TouchableOpacity } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { getStudentAllOutingApplication } from '../../services/operations/StudentAPI';
import { useToast } from 'react-native-toast-notifications';

const ApplicationHistory = () => {

    const dispatch = useDispatch();
    
    const {token} = useSelector((state) => state.Auth);
    const toast = useToast();
    const [outingApplication,setOutingApplication] = useState([]);

    const fetchData = async () => {
        const data = await dispatch(getStudentAllOutingApplication(token,toast));
        setOutingApplication(data);
        console.log("Format",data);
    }

    useEffect(() => {
        fetchData();
    },[token]);

    const getDateFormat = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

    return (
        <ScrollView contentContainerStyle={{width:"100%", paddingHorizontal:10,paddingVertical:10,justifyContent:'start',alignItems:"center"}}>
            {
                outingApplication.map((application) => {
                    return (
                        <View key={application?.id} style={{width:"100%",padding: 16,marginVertical: 8,backgroundColor: '#f9f9f9',borderRadius: 8,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.1,shadowRadius: 8,elevation: 2,width: '90%'}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Created On: <Text style={{ fontWeight: 'normal', color: '#666' }}>{getDateFormat(application.createdAt)}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                From: <Text style={{ fontWeight: 'normal', color: '#666' }}>{getDateFormat(application.from)}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                To: <Text style={{ fontWeight: 'normal', color: '#666' }}>{getDateFormat(application.to)}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Purpose: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application.purpose}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Place of Visit: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application.placeOfVisit}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Status: <Text style={{ fontWeight: '800', color: application?.status==="PENDING" ? "orange"  : application?.status==="ACCEPTED" ? "green" : "red"}}>{application.status}</Text>
                            </Text>
                        </View>
                    )
                })
            }
    </ScrollView>
    )
}

export default ApplicationHistory