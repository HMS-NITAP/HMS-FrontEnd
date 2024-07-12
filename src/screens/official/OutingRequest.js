import React, { useCallback, useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getAllPendingApplicationByHostelBlock,getAllAcceptedApplicationByHostelBlock, getAllRejectedApplicationByHostelBlock, rejectPendingOutingApplication, approvePendingOutingApplication } from '../../services/operations/OfficialAPI';
import MainButton from '../../components/common/MainButton';
import { useToast } from 'react-native-toast-notifications';
import { useFocusEffect } from '@react-navigation/native';

const OutingRequest = () => {

    const [applicationType, setApplicationType] = useState("PENDING");
    const [outingApplication,setOutingApplication] = useState([]);
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.Auth);
    const toast = useToast();

    const fetchOutingRequest = async () => {
        let data;
        if(applicationType === "PENDING"){
            data = await dispatch(getAllPendingApplicationByHostelBlock(token,toast));
        }else if(applicationType === "ACCEPTED"){
            data = await dispatch(getAllAcceptedApplicationByHostelBlock(token,toast));
        }else{
            data = await dispatch(getAllRejectedApplicationByHostelBlock(token,toast));
        }
        setOutingApplication(data);
    }

    useFocusEffect(
        useCallback(() => {
          fetchOutingRequest();
        }, [token, toast, applicationType])
    );

    const approveHandler = async (applicationId) => {
        await dispatch(approvePendingOutingApplication(applicationId,token,toast));
        fetchOutingRequest();
    }

    const rejectHandler = async (applicationId) => {
        await dispatch(rejectPendingOutingApplication(applicationId,token,toast));
        fetchOutingRequest();
    }

    const getDateFormat = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

  return (
    <ScrollView contentContainerStyle={{width:"100%", paddingHorizontal:10,paddingVertical:10,justifyContent:'start',alignItems:"center",gap:15}}>
        <View style={{width:"100%", marginHorizontal:"auto", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", overflow:'hidden', borderWidth:1, borderColor:"black", borderRadius:10}}>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:applicationType==="PENDING" ? "#ffb703" : "white",}} onPress={() => setApplicationType("PENDING")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Pending</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:applicationType==="ACCEPTED" ? "#ffb703" : "white",}} onPress={() => setApplicationType("ACCEPTED")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Accepted</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"33%", textAlign:"center", paddingVertical:8, backgroundColor:applicationType==="REJECTED" ? "#ffb703" : "white",}} onPress={() => setApplicationType("REJECTED")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Rejected</Text></TouchableOpacity>
        </View>
        {
            outingApplication.length===0 ? (<Text>No Applications Found</Text>) : (
                outingApplication.map((application) => {
                    return (
                        <View style={{width:"100%",padding: 16,marginVertical: 8,backgroundColor: '#f9f9f9',borderRadius: 8,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.1,shadowRadius: 8,elevation: 2,width: '90%'}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Created On: <Text style={{ fontWeight: 'normal', color: '#666' }}>{getDateFormat(application.createdAt)}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Name: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application?.instituteStudent?.name}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Room No: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application?.instituteStudent?.roomNo}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Reg No: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application?.instituteStudent?.regNo}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Roll No: <Text style={{ fontWeight: 'normal', color: '#666' }}>{application?.instituteStudent?.rollNo}</Text>
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
                            {applicationType!=="PENDING" ? "" : (
                                <View style={{display:"flex", marginVertical:10, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                                    <MainButton text="Accept" backgroundColor={"#99d98c"} onPress={() => approveHandler(application?.id)} />
                                    <MainButton text="Reject" backgroundColor={"#f27059"} onPress={() => rejectHandler(application?.id)} />
                                </View>
                            )}
                        </View>
                    )
                })
            )
        }
    </ScrollView>
  )
}

export default OutingRequest