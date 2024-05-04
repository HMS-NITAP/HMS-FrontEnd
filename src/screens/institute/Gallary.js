import React from 'react'
import { ScrollView, StyleSheet, View, Text,Image } from 'react-native'

const Gallery = () => {

  return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={{fontSize:18,fontWeight:'700',color:'#000000', textAlign:'center'}}>NIT Andhra Pradesh Hostel Galley</Text>
                {/* <Image source={require('../../assets/gallary/img1.jpg')} 
                style={{width:'70%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto'}} 
                />
                <Image source={require('../../assets/gallary/img2.jpg')} 
                style={{width:'70%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto'}} 
                />
                <Image source={require('../../assets/gallary/img6.jpg')} 
                style={{width:'70%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto'}} 
                /> */}
            </View>
        </View>
    </ScrollView>
  )
}

export default Gallery;

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