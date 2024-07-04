import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View, TouchableOpacity, Linking } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getAllResolvedHostelComplaints, getAllUnresolvedHostelComplaints, resolveHostelComplaint, unResolveHostelComplaint } from '../../services/operations/OfficialAPI';
import MainButton from '../../components/common/MainButton';
import { useToast } from 'react-native-toast-notifications';

const HostelComplaints = () => {

    const [complaintStatus, setComplaintStatus] = useState("UNRESOLVED");
    const [registeredComplaints,setRegisteredComplaints] = useState([]);
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.Auth);
    const toast = useToast();

    const fetchRegisteredComplaints = async () => {
        let data;
        if(complaintStatus === "UNRESOLVED"){
            data = await dispatch(getAllUnresolvedHostelComplaints(token,toast));
        }else{
            data = await dispatch(getAllResolvedHostelComplaints(token,toast));
        }
        console.log("Data",data);
        setRegisteredComplaints(data);
    }

    useEffect(() => {
        fetchRegisteredComplaints();
    },[complaintStatus]);

    const resolveHandler = async (complaintId) => {
        await dispatch(resolveHostelComplaint(complaintId,token,toast));
        fetchRegisteredComplaints();
    }

    const unresolveHandler = async (complaintId) => {
        await dispatch(unResolveHostelComplaint(complaintId,token,toast));
        fetchRegisteredComplaints();
    }

    const getDateFormat = (date) => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

  return (
    <ScrollView contentContainerStyle={{width:"100%", paddingHorizontal:10,paddingVertical:10,justifyContent:'start',alignItems:"center",gap:15}}>
        <View style={{width:"100%", marginHorizontal:"auto", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", overflow:'hidden', borderWidth:1, borderColor:"black", borderRadius:10}}>
            <TouchableOpacity style={{width:"50%", textAlign:"center", paddingVertical:8, backgroundColor:complaintStatus==="UNRESOLVED" ? "#ffb703" : "white",}} onPress={() => setComplaintStatus("UNRESOLVED")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Unresolved</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"50%", textAlign:"center", paddingVertical:8, backgroundColor:complaintStatus==="RESOLVED" ? "#ffb703" : "white",}} onPress={() => setComplaintStatus("RESOLVED")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Resolved</Text></TouchableOpacity>
        </View>
        {
            registeredComplaints.length===0 ? (<Text>No Complaints Found</Text>) : (
                registeredComplaints.map((complaint) => {
                    return (
                        <View key={complaint?.id} style={{width:"100%",padding: 16,marginVertical: 8,backgroundColor: '#f9f9f9',borderRadius: 8,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.1,shadowRadius: 8,elevation: 2,width: '90%'}}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Created On: <Text style={{ fontWeight: 'normal', color: '#666' }}>{getDateFormat(complaint.createdAt)}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Student Name: <Text style={{ fontWeight: 'normal', color: '#666' }}>{complaint.instituteStudent.name}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Student Details: <Text style={{ fontWeight: 'normal', color: '#666' }}>Floor-{complaint.instituteStudent.floorNo}, room-{complaint.instituteStudent.roomNo}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Category: <Text style={{ fontWeight: 'normal', color: '#666' }}>{complaint.category}</Text>
                            </Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                About: <Text style={{ fontWeight: 'normal', color: '#666' }}>{complaint.about}</Text>
                            </Text>
                            {
                                complaint?.fileUrl[0] && 
                                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>Attachments : <Text style={{ fontWeight: 'normal', color: 'blue' }} onPress={() => Linking.openURL(complaint?.fileUrl[0])}>Click Here to See</Text></Text>
                            }
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4, color: '#333' }}>
                                Status: <Text style={{ fontWeight: '800', color: complaint?.status==="UNRESOLVED" ? "orange"  : "green"}}>{complaint.status}</Text>
                            </Text>
                            {
                                complaint?.status==='UNRESOLVED' ? (
                                    <View style={{display:"flex", marginVertical:10, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                                        <MainButton text="Resolve" backgroundColor={"#99d98c"} onPress={() => resolveHandler(complaint?.id)} />
                                    </View>
                                ) : (
                                    <View style={{display:"flex", marginVertical:10, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                                        <MainButton text="Unresolve" backgroundColor={"#f27059"} onPress={() => unresolveHandler(complaint?.id)} />
                                    </View>
                                )
                            }
                            {complaint!=="PENDING" ? "" : (
                                <View style={{display:"flex", marginVertical:10, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
                                    <MainButton text="Accept" backgroundColor={"#99d98c"} onPress={() => unresolveHandler(complaint?.id)} />
                                    <MainButton text="Reject" backgroundColor={"#f27059"} onPress={() => resolveHandler(complaint?.id)} />
                                </View>
                            )}
                            {

                            }
                        </View>
                    )
                })
            )
        }
    </ScrollView>
  )
}

export default HostelComplaints