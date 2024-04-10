import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { AnnouncementsData } from '../../static/AnnouncementsData'
import AnnouncementLink from '../../components/student/AnnouncementLink'
const Announcements = () => {
  return (
    <ScrollView>
      <View style={styles.heading}>
            <Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Announcements</Text>
      </View>

      <View style={styles.linkContainer}>
          {
            AnnouncementsData.map((data,index) => (
              <AnnouncementLink key={index} data={data} />
            ))
          }  
      </View>
      </ScrollView>
  )
}

export default Announcements

const styles = StyleSheet.create({
  heading:{
      width:'100%',
      backgroundColor:'#ffb703',
      paddingVertical:15,
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  },
  
  linkContainer:{
      width:"100%",
      gap:20,
      display:'flex',
      justifyContent:'center',
      paddingVertical:30,
      paddingHorizontal:10,
  },
})