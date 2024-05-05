import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAnnouncements } from '../../services/operations/AnnouncementAPI'

const Announcements = () => {

    const [announcementData, setAnnouncementData] = useState([]);

    const dispatch = useDispatch();

    const fetchAnnouncements = async() => {
        const data = await dispatch(getAllAnnouncements());
        setAnnouncementData(data);
    }

    useEffect(() => {
        fetchAnnouncements();
    },[announcementData]);

  return (
    <ScrollView style={styles.container}>
        {
            announcementData.map((ann) => {
                return (
                    <ScrollView style={styles.card}>
                        <View><Text style={{fontWeight:"800"}}>{ann.title}</Text></View>
                        <View><Text>{ann.textContent}</Text></View>
                        <View><Text onPress={() => Linking.openURL(ann.url)}>{ann.fileContent}</Text></View>
                    </ScrollView>
                )
            })
        }
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
    },
    card : {
        borderColor :"black",
        borderRadius:5,
        paddingHorizontal:5,
        paddingVertical:5,
        borderWidth : 2,
        backgroundColor:"#caf0f8",
        marginBottom:10,
    }
})

export default Announcements