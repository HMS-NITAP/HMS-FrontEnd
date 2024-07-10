import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import OTPTextInput from 'react-native-otp-textinput';
import MainButton from './MainButton';
import {useSelector,useDispatch} from 'react-redux';
import { verifyOtp } from '../../services/operations/AuthAPI';
import { useToast } from 'react-native-toast-notifications';
import { setRegistrationData, setRegistrationStep } from '../../reducer/slices/AuthSlice';

const OtpVerification = () => {

    const toast = useToast();

    const [otp, setOTP] = useState('');
    const {registrationData} = useSelector((state) => state.Auth);

    const dispatch = useDispatch();
    
    const submitHandler = async() => {
        let formData = new FormData();
        if(!registrationData){
            return;
        }
        formData.append("email",registrationData?.email);
        formData.append("password",registrationData?.password);
        formData.append("confirmPassword",registrationData?.confirmPassword);
        formData.append("otp",otp);
        if(!otp || otp.length!=6){
            toast.show("Enter Correct OTP", {type:"warning"});
            return;
        }
        const response = await dispatch(verifyOtp(formData,toast));
        console.log(response);
        if(response === true){
            dispatch(setRegistrationStep(3));
        }
        return;
    }

  return (
    <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center",gap:25}}>
        <View style={{width:"100%", backgroundColor:"#e9edc9", borderRadius:20, paddingHorizontal:15, paddingVertical:15}}>
            <Text style={{textAlign:"center", fontSize:15, color:"black"}}>Please enter the OTP sent to your institute email ID, <Text style={{fontWeight:"800"}}>{registrationData?.email}</Text>, to complete the verification of your account.</Text>
        </View>
        <View style={{width:"100%", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", gap:40}}>
            <OTPTextInput
                    inputCount={6}
                    tintColor={"#6c757d"}
                    offTintColor={"#ced4da"}
                    handleTextChange={(value) => setOTP(value)}
                    textInputStyle={{ color: 'black', borderWidth: 1, width:"13%", height:"auto", borderColor: 'gray', borderRadius: 10 }}
            />
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}><MainButton text={"Submit"} onPress={submitHandler} backgroundColor={"#eddea4"} /></View>
        </View>
    </View>
  )
}

export default OtpVerification