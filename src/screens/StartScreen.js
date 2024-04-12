/* eslint-disable prettier/prettier */
import React from 'react'
import { ScrollView, StyleSheet, View, Text, Image,Button,TouchableOpacity } from 'react-native'

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image source={require('../assets/logo/logo_small.png')} 
        style={{width:'70%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto'}} 
        />
        <Text  style={{fontSize:13,fontWeight:'700',color:'#000000'}}>NIT ANDHRA PRADESH - HOSTEL MANAGEMENT SYSTEM</Text>
      </View>
      <Image source={require('../assets/auth/bg1.png')} 
        style={{width:'100%',objectFit:'contain',marginHorizontal:'auto',marginVertical:'auto', flex:1,paddingVertical:100}} 
      />

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Gallery")}>
            <Text style={styles.buttonText}>Gallery-Take a look</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("HostelBlocks")}>
            <Text style={styles.buttonText}>Block Informations</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("ContactUs")}>
            <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("DevelopmentTeam")}>
            <Text style={styles.buttonText}>Developers Team</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
    container:{
        margin:0,
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
    linkContainer:{
        width:"100%",
        gap:20,
        display:'flex',
        justifyContent:'center',
        paddingVertical:30,
        paddingHorizontal:10,
    },
    buttonView:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'start',
        gap : 100
    },
    loginButton: {
        backgroundColor: '#4CAF50', // Green background
        padding: 15,
        borderRadius: 8, // Rounded corners
        margin: 5,
      },
      buttonText: {
        color: 'white', // White text
        textAlign: 'center', // Centered text
        fontSize: 16, // Font size
      },
})