import { setToken } from "../../reducer/slices/AuthSlice";
import { setUser } from "../../reducer/slices/ProfileSlice";
import { APIconnector } from "../APIconnector";
import { authEndPoints } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {SENDOTP_API,SIGNUP_API,LOGIN_API,RESET_PASSWORD_TOKEN,RESET_PASSWORD} = authEndPoints;

export const sendOTP = (email,navigation,toast) => {
    return async() => {
        try{ 
            const response = await APIconnector("POST",SENDOTP_API,{email});
            if(!response.data.success){
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            toast.show("OTP Sent Successfully", {type: "success"});
            navigation.navigate("OtpInput");
        }catch(e){
            toast.show("OTP generation Unsuccessful", {type: "danger"});
            console.log("ERROR");
            console.log(e);
        }
    }
}

export const signUp = (data,otp,navigation,toast) => {
    return async() => {
        let id = toast.show("Creating your Account...",{type: "normal"});
        try{
            let id = toast.show("Creating your Account...",{type: "normal",placement: "top",animationType: "slide-in"});
            const {email,password,confirmPassword,accountType} = data;
            const response = await APIconnector("POST",SIGNUP_API,{email,password,confirmPassword,accountType,otp});
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            toast.hide(id);
            toast.show("Account created Successfully", {type: "success"});
            navigation.navigate("Login");
        }catch(e){
            toast.hide(id);
            toast.show("Account creation failed", {type: "danger"});
            console.log(e);
        }
    }
}

export const login = (email,password,navigation,toast) => {
    return async(dispatch) => {
        let id = toast.show("Please Wait...", {type:"normal"});
        try{
            const response = await APIconnector("POST",LOGIN_API,{email,password});

            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }

            await dispatch(setToken(response?.data?.token));
            await AsyncStorage.setItem("token",JSON.stringify(response.data.token));
            await AsyncStorage.setItem("user",JSON.stringify(response?.data?.user));
            await dispatch(setUser(response?.data?.user));

            toast.hide(id);
            toast.show("Login Successful", {type: "success"});
        }catch(e){
            toast.hide(id);
            toast.show("Login Failed", {type: "danger"});
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

export const logout = (toast) => {
    return async(dispatch) => {
        try{
            await dispatch(setToken(null));
            await dispatch(setUser(null));
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            toast.show("Successfully Logged Out from Account", {type: "success"});
        }catch(e){
            toast.show("Logout Unsuccessful", {type: "danger"});
            console.log("Logout modal Error",e);
        }
    }
}