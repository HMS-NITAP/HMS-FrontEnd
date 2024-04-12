/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import OTPTextInput from 'react-native-otp-textinput';
import MainButton from '../../components/common/MainButton';
import {useSelector,useDispatch} from 'react-redux';
import { signUp } from '../../services/operations/AuthAPI';

const OtpInput = ({navigation}) => {

    const [otp, setOTP] = useState('');
    const {signUpData} = useSelector((state) => state.Auth);

    const dispatch = useDispatch();

    useEffect(() => {
      if(!signUpData){
        navigation.navigate("SignUp");
      }
    },[]);

    const handleTextChange = (value) => {
        setOTP(value);
    }

    const submitHandler = () => {
        console.log("OTP SUBMITTED : ",otp);
        dispatch(signUp(signUpData,otp,navigation));
    }

  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Verify OTP</Text></View>
        <View style={styles.subContainer}>
            <Text style={{fontSize:18, fontWeight:"600", color:"#495057"}}>Enter the OTP received in your EmailID, to complete verification of your account.</Text>
            <OTPTextInput
                containerStyle={{ marginTop: 20 }}
                inputCount={6}
                tintColor={"#6c757d"}
                offTintColor={"#ced4da"}
                handleTextChange={handleTextChange}
                textInputStyle={{ color: 'black', borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}
            />
            <View style={{display:"flex",justifyContent:"center",alignItems:"center",marginVertical:50}}><MainButton text={"Submit"} onPress={submitHandler} backgroundColor={"#68d8d6"} /></View>
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
      subContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"start",
        paddingHorizontal:10,
        marginTop:50,
        width:"100%",
        height:"auto",
      }
})

export default OtpInput