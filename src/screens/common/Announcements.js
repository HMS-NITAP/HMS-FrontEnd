import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnnouncements } from '../../services/operations/CommonAPI'
import { useToast } from 'react-native-toast-notifications'

const Announcements = () => {

    const [announcementData, setAnnouncementData] = useState([]);
    const dispatch = useDispatch();

    const toast = useToast();

    useEffect(() => {
        const fetchAnnouncements = async() => {
            const data = await dispatch(getAllAnnouncements(toast));
            setAnnouncementData(data);
        }

        fetchAnnouncements();
    },[]);

  return (
    <ScrollView style={styles.container}>
        <View style={{display:'flex', flexDirection:"column", gap:10, justifyContent:"center", alignItems:"stretch"}}>
            {
                announcementData.length === 0 ? (<Text>No Announcements Found</Text>) : (
                    announcementData.map((announcement) => (
                        <View key={announcement?.id} style={styles.card}>
                            <Text style={{fontSize:14, color:"black", fontWeight:"700"}}>{announcement?.title}</Text>
                            <Text style={{fontSize:12, color:"black", fontWeight:"500"}}>{announcement?.textContent}</Text>
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
        paddingVertical :20,
        paddingHorizontal:15,
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
    }
})

export default Announcements