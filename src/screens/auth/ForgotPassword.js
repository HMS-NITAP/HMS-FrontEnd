import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import MainButtton from '../../components/common/MainButtton'

const ForgotPassword = () => {

    const handlePress = () => {

    }

  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Sign Up</Text></View>
        <View style={styles.form}>
        <View style={styles.subFormView}>
            <Text style={styles.label} >Email ID<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
            <TextInput style={styles.input} placeholder='Enter your college email ID' />
        </View>
        <View style={styles.subFormView}>
            <MainButtton text={"Send Reset Password Email"} onPress={() => setText("")} />
        </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'start',
      alignItems:'center',
      width:'100%',
      height:'100%',
    },
    heading:{
      width:'100%',
      backgroundColor:'#ffb703',
      paddingVertical:15,
      textAlign:'center',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontSize:100,
    },
    form:{
      paddingTop:100,
      paddingBottom:30,
      width:"80%",
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      flexDirection:'column',
      gap:40,
    },
    subFormView:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'start',
      gap:10,
    },
    label:{
      fontSize:15,
      fontWeight:'500',
      color:'#000000',
    },
    input:{
      padding:10,
      paddingHorizontal:10,
      borderWidth:1,
      borderRadius:10,
      borderColor:"#adb5bd",
    },
    button:{
      textAlign:'center',
      borderRadius:30,
      fontSize:15,
      fontWeight:'800',
      color:"black"
    },

});
  

export default ForgotPassword