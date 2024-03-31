import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import {hostelCommiteeData,medicalAndSecurityOfficerData,securitySepervisorsData} from '../../static/ContactUsData'
import SlidingCard from '../../components/institute/SlidingCard'

const ContactUs = () => {

  return (
    <ScrollView>
        <View style={styles.heading}>
            <Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Contact Us</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={{fontSize:18,fontWeight:'700',color:'#000000', textAlign:'center'}}>NIT Andhra Pradesh Hostel Committee</Text>
                <View style={styles.cardContainer}>
                    {
                        hostelCommiteeData.map((data,index) => (
                            <SlidingCard key={index} data={data} />
                        ))
                    }  
                </View>
            </View>
            <View style={styles.hr} />
            <View style={styles.subContainer}>
                <Text style={{fontSize:18,fontWeight:'700',color:'#000000', textAlign:'center'}}>Medical and Security Officer</Text>
                <View style={styles.cardContainer}>
                    {
                        medicalAndSecurityOfficerData.map((data,index) => (
                            <SlidingCard key={index} data={data} />
                        ))
                    }  
                </View>
            </View>
            <View style={styles.hr} />
            <View style={styles.subContainer}>
                <Text style={{fontSize:18,fontWeight:'700',color:'#000000', textAlign:'center'}}>Security Supervisors</Text>
                <View style={styles.cardContainer}>
                    {
                        securitySepervisorsData.map((data,index) => (
                            <SlidingCard key={index} data={data} />
                        ))
                    }  
                </View>
            </View>
        </View>
    </ScrollView>
  )
}

export default ContactUs

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
    container:{
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        paddingVertical:15,
        paddingHorizontal:10,
        gap:30,
    },
    subContainer:{
        width:'100%',
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
    },
    cardContainer:{
        width:"75%",
        gap:20,
        paddingVertical:30,
        paddingHorizontal:10,
    },
    hr:{
        width : "100%",
        height : 2,
        backgroundColor : "#495057",
        borderRadius : 100,
    }
})