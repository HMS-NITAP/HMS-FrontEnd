import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import OTPTextInput from 'react-native-otp-textinput';
import MainButton from './MainButton';
import {useSelector,useDispatch} from 'react-redux';
import { signUp } from '../../services/operations/AuthAPI';
import { useToast } from 'react-native-toast-notifications';

const OtpVerification = () => {

    const toast = useToast();

    const [otp, setOTP] = useState('');
    const {signUpData} = useSelector((state) => state.Auth);

    const dispatch = useDispatch();

    // useEffect(() => {
    //   if(!signUpData){
    //     navigation.navigate("SignUp");
    //   }
    // },[]);

    const handleTextChange = (value) => {
        setOTP(value);
    }

    const submitHandler = () => {
        // dispatch(signUp(signUpData,otp,navigation,toast));
    }

  return (
    <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",gap:25}}>
        <View style={{width:"100%", backgroundColor:"#e9edc9", borderRadius:20, paddingHorizontal:15, paddingVertical:15}}>
            <Text style={{textAlign:"center", fontSize:15, color:"black"}}>Please enter the OTP sent to your institute email ID, <Text style={{fontWeight:"800"}}>422250@student.nitandhra.ac.in</Text>, to complete the verification of your account.</Text>
        </View>
        <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", gap:40}}>
            <OTPTextInput
                    inputCount={6}
                    tintColor={"#6c757d"}
                    offTintColor={"#ced4da"}
                    handleTextChange={handleTextChange}
                    textInputStyle={{ color: 'black', borderWidth: 1, width:"13%", height:"auto", borderColor: 'gray', borderRadius: 10 }}
            />
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}><MainButton text={"Submit"} onPress={submitHandler} backgroundColor={"#68d8d6"} /></View>
        </View>
    </View>
  )
}

export default OtpVerification