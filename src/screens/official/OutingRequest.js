import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { approveOutingApplication, getAllApplication, rejectOutingApplication } from '../../services/operations/OutingApplicationAPI';
import MainButton from '../../components/common/MainButton';

const OutingRequest = () => {

    const [outingApplication,setOutingApplication] = useState([]);
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.Auth);

    const fetchOutingRequest = async () => {
        const data = await dispatch(getAllApplication());
        console.log("Data",data);
        setOutingApplication(data);
    }

    const approveHandler = async (id) => {
        await dispatch(approveOutingApplication(id,token));
    }

    const rejectHandler = async (id) => {
        await dispatch(rejectOutingApplication(id,token));
    }

    useEffect(() => {
        fetchOutingRequest();
    },[]);

  return (
    <ScrollView style={{paddingHorizontal:10,paddingVertical:10}}>
        {
            outingApplication.map((app) => {
                return (
                    <View style={{borderColor:"black",borderWidth:1,paddingHorizontal:5,paddingVertical:5,borderRadius:5}}>
                        <View>
                            <Text>{app.id}</Text>
                            <Text>From : {app.from}</Text>
                            <Text>To : {app.to}</Text>
                            <Text>Pupose : {app.purpose}</Text>
                            <Text>Place of Visit : {app.placeOfVisit}</Text>
                        </View>
                        <View style={{display:"flex",flexDirection:"row",gap:5,}}>
                            <MainButton text={"Approve"} onPress={() => approveHandler(app.id)} />
                            <MainButton text={"Reject"} onPress={() => rejectHandler(app.id)} />
                        </View>
                        <Text>Status : {app.status}</Text>
                    </View>
                )
            })
        }
    </ScrollView>
  )
}

export default OutingRequest