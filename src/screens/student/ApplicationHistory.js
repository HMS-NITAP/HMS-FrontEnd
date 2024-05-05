import React, { useEffect, useState } from 'react'
import { ScrollView,Text, View } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { getStudentAllApplication } from '../../services/operations/OutingApplicationAPI';

const ApplicationHistory = () => {

    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.Auth);
    const [outingApplication,setOutingApplication] = useState([]);

    const fetchData = async () => {
        const data = await dispatch(getStudentAllApplication(token));
        setOutingApplication(data);
    }

    useEffect(() => {
        fetchData();
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
                            <Text>Status : {app.status}</Text>
                        </View>
                    )
                })
            }
    </ScrollView>
    )
}

export default ApplicationHistory