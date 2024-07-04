import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Linking, Animated } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { getAllAnnouncements } from '../../services/operations/CommonAPI'
import { useToast } from 'react-native-toast-notifications'
import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'

const Announcements = () => {

    const [announcementData, setAnnouncementData] = useState([]);
    const dispatch = useDispatch();

    const toast = useToast();

    const fetchAnnouncements = async() => {
        const data = await dispatch(getAllAnnouncements(toast));
        setAnnouncementData(data);
    }

    useFocusEffect(
        useCallback(() => {
          fetchAnnouncements();
        }, [toast])
    );

    const convertDate = (date) => {
        const localDate = new Date(date);
        return localDate.toLocaleString('en-US')
    }

    const isNew = (createdAt) => {
        const now = new Date();
        const createdDate = new Date(createdAt);
        const differenceInTime = now - createdDate;
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        return differenceInDays <= 2;
    };

    const [bgColor, setBgColor] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgColor(prevBgColor => !prevBgColor); 
        }, 300);

        return () => clearInterval(interval);
    }, []);


  return (
    <ScrollView style={styles.container}>
        <View style={{display:'flex',paddingVertical:20, paddingHorizontal:20, flexDirection:"column", gap:20, justifyContent:"center", alignItems:"stretch"}}>
            {
                announcementData && announcementData.length == 0 ? (<View style={{width:"100%", marginTop:20}}><Text style={{textAlign:"center", fontSize:16, color:"black", fontWeight:"700"}}>No Announcements Found</Text></View>) : (
                    announcementData.map((announcement) => (
                        <View key={announcement?.id} style={styles.card}>
                            {
                                isNew(announcement?.createdAt) ? <View style={{position:"absolute", right:-5, top:-5, backgroundColor:bgColor?"rgba(128, 15, 47, 0.8)" : "rgba(128, 15, 47, 0.65)", paddingHorizontal:10, paddingVertical:5, borderRadius:15}}><Text style={{color:"white", fontWeight:"800"}}>New</Text></View> : ""
                            }
                            <View>
                                <Text>Created At : <Text>{convertDate(announcement?.createdAt)}</Text></Text>
                                <Text>Created By : <Text style={{color:"black"}}>{announcement?.createdBy?.name} ({announcement?.createdBy?.designation})</Text></Text>
                            </View>
                            <Text style={{fontSize:16, color:"black", fontWeight:"700"}}>{announcement?.title}</Text>
                            <Text style={{fontSize:15, color:"black", fontWeight:"500"}}>{announcement?.textContent}</Text>
                            {
                                announcement?.fileUrl[0] && 
                                    <Text>Attachments : <Text style={{color:"blue"}} onPress={() => Linking.openURL(announcement?.fileUrl[0])}>Click Here to See</Text></Text>
                            }
                        </View>
                    ))
                )
            }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container : {
        width : "100%",
        height :"auto",
        display:"flex",
        flexDirection:"column",
        gap:10,
    },
    card : {
        borderColor :"black",
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:15,
        borderWidth : 1,
        backgroundColor:"white",
        display:'flex',
        flexDirection:'column',
        gap:10,
        elevation:10,
    }
})

export default Announcements