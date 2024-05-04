import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AnnouncementPage = ({data}) => {
  return (
    <ScrollView style={styles.container}>
        {/* <View style={styles.heading}><Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Announcement</Text></View> */}
        <View style={styles.subContainer}>
            <Text style={{fontSize:40,fontWeight:"700",color:"black"}}>{data.title}</Text>
            <Text style={{fontSize:30,fontWeight:"600",color:"black"}}>{data.textContent}</Text>
            <View>
                <Text style={{fontFamily:25,fontWeight:"500",color:"black"}}>Attachments :</Text>
                <Text style={{fontSize:20,fontWeight:"400",color:"black"}}>{data.fileContent[0]}</Text>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        height:"auto",
        width:"100%",
        display:"flex",
        flexDirection:"column",
    },
    heading:{
        width:'100%',
        backgroundColor:'#ffb703',
        paddingVertical:15,
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    subContainer:{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        gap:40,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:30,
        textAlign:"center",
        paddingHorizontal:20,
    }
})

export default AnnouncementPage