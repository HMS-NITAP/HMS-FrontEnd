import { setToken } from "../../reducer/slices/AuthSlice";
import { setUser } from "../../reducer/slices/ProfileSlice";
import { APIconnector } from "../APIconnector";
import { authEndPoints } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {SENDOTP_API,SIGNUP_API,LOGIN_API,RESET_PASSWORD_TOKEN,RESET_PASSWORD} = authEndPoints;

export const sendOTP = (email,navigation) => {
    return async() => {
        try{
            const response = await APIconnector("POST",SENDOTP_API,{email});
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            navigation.navigate("OtpInput");
        }catch(e){
            console.log("ERROR");
            console.log(e);
        }
    }
}

export const signUp = (data,otp,navigation) => {
    return async() => {
        try{
            console.log("data",data,otp);
            const {email,password,confirmPassword,accountType} = data;
            const response = await APIconnector("POST",SIGNUP_API,{email,password,confirmPassword,accountType,otp});
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            navigation.navigate("Login");
        }catch(e){
            console.log("ERROR");
            console.log(e);
        }
    }
}

export const login = (email,password,navigation) => {
    return async(dispatch) => {
        try{
            const response = await APIconnector("POST",LOGIN_API,{email,password});

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            dispatch(setToken(response?.data?.token));

            AsyncStorage.setItem("token",JSON.stringify(response.data.token));
            AsyncStorage.setItem("user",JSON.stringify(response?.data?.user));

            dispatch(setUser(response?.data?.user));
            navigation.navigate("Dashboard");
        }catch(e){
            console.log("ERROR");
            console.log(e);
        }
    }
}

export const sendResetPasswordEmail = (email,navigation) => {
    return async() => {
        try{
            const response = await APIconnector("POST",RESET_PASSWORD_TOKEN,{email});

            if(!response?.data?.success){
                throw new Error(response.data.message);
            }

            navigation.navigate("ResetPasswordEmailSent");
        }catch(e){
            console.log("Error");
            console.log(e);
        }
    }
}

export const resetPassword = (token,newPassword,confirmNewPassword,navigation) => {
    return async() => {
        try{
            const response = await APIconnector("POST",RESET_PASSWORD,{token,newPassword,confirmNewPassword});

            if(!response?.data?.success){
                throw new Error(response.data.message);
            }

            navigation.navigate("ResetPasswordSuccess");
        }catch(e){
            console.log("Error");
            console.log(e);
        }
    }
}