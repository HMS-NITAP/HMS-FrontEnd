import { setToken } from "../../reducer/slices/AuthSlice";
import { setUser } from "../../reducer/slices/ProfileSlice";
import { APIconnector } from "../APIconnector";
import { authEndPoints } from "../APIs";
import AsyncStorage from '@react-native-async-storage/async-storage';

const {SENDOTP_API,SIGNUP_API,LOGIN_API,RESET_PASSWORD_TOKEN,RESET_PASSWORD} = authEndPoints;

export const sendOTP = (email,navigation,toast,id) => {
    return async() => {
        try{ 
            const response = await APIconnector("POST",SENDOTP_API,{email});
            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "zoom-in"});
                throw new Error(response.data.message);
            }
            toast.update(id, "OTP Sent Successfully", {type: "success",placement: "top",animationType: "zoom-in"});
            navigation.navigate("OtpInput");
        }catch(e){
            toast.update(id, "OTP generation Unsuccessful", {type: "danger",placement: "top",animationType: "zoom-in"});
            console.log("ERROR");
            console.log(e);
        }
    }
}

export const signUp = (data,otp,navigation) => {
    return async() => {
        let id = toast.show("Creating your Account...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            const {email,password,confirmPassword,accountType} = data;
            const response = await APIconnector("POST",SIGNUP_API,{email,password,confirmPassword,accountType,otp});
            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            toast.update(id, "Account created Successfully", {type: "success",placement: "top",animationType: "slide-in"});
            navigation.navigate("Login");
        }catch(e){
            toast.update(id, "Account creation failed", {type: "danger",placement: "top",animationType: "slide-in"});
            console.log(e);
        }
    }
}

export const login = (email,password,navigation,toast) => {
    return async(dispatch) => {
        let id = toast.show("Please Wait...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            const response = await APIconnector("POST",LOGIN_API,{email,password});

            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }

            await dispatch(setToken(response?.data?.token));

            await AsyncStorage.setItem("token",JSON.stringify(response.data.token));
            await AsyncStorage.setItem("user",JSON.stringify(response?.data?.user));
            await dispatch(setUser(response?.data?.user));
            toast.update(id, "Login Successful", {type: "success",placement: "top",animationType: "slide-in"});
            navigation.navigate("StudentDashboard");
        }catch(e){
            toast.update(id, "Login Failed", {type: "danger",placement: "top",animationType: "slide-in"});
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

export const logout = (navigation,toast) => {
    return async(dispatch) => {
        try{
            await dispatch(setToken(null));
            await dispatch(setUser(null));
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("user");
            toast.show("Successfully Logged Out from Account", {type: "success",placement: "top",animationType: "zoom-in"});
            navigation.navigate("Login");
        }catch(e){
            toast.show("LogOut Unsuccessful", {type: "danger",placement: "top",animationType: "zoom-in"});
            console.log(e);
        }
    }
}