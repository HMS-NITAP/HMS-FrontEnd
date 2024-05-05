import { APIconnector } from "../APIconnector";
import { studentEndPoints } from "../APIs";

const {CREATE_OUTING_APPLICATION,GET_STUDENT_APPLICATION,APPROVE_OUTING_APPLICATION,REJECT_OUTING_APPLICATION,GET_ALL_APPLICATIONS} = studentEndPoints;


export const getAllApplication = () => {
    return async () => {
        try{
            const response = await APIconnector("GET",GET_ALL_APPLICATIONS);
            
            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(e){
            console.log(e)
        }
    }
}

export const getStudentAllApplication = (token) => {
    return async () => {
        try{
            const response = await APIconnector("POST",GET_STUDENT_APPLICATION,{},{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            return response.data.data;
        }catch(e){
            console.log(e)
        }
    }
}

export const createOutingApplication = (type,from,to,placeOfVisit,purpose,token) => {
    return async() => {
        let id = toast.show("Please wait...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            const response = await APIconnector("POST",CREATE_OUTING_APPLICATION,{type,from,to,placeOfVisit,purpose},{Authorization: `Bearer ${token}`});
            if(!response.data.success){
                toast.update(id, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            toast.update(id, "Application created Successfully", {type: "success",placement: "top",animationType: "slide-in"});
            // navigation.navigate("Login");
        }catch(e){
            toast.update(id, "Application creation failed", {type: "danger",placement: "top",animationType: "slide-in"});
            console.log(e);
        }
    }
}

export const approveOutingApplication = (id,token) => {
    return async() => {
        let id1 = toast.show("Please wait...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            const response = await APIconnector("PUT",APPROVE_OUTING_APPLICATION,{id},{Authorization: `Bearer ${token}`});
            if(!response.data.success){
                toast.update(id1, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            toast.update(id1, "Application Approved Successfully", {type: "success",placement: "top",animationType: "slide-in"});
            // navigation.navigate("Login");
        }catch(e){
            toast.update(id1, "Application Approval failed", {type: "danger",placement: "top",animationType: "slide-in"});
            console.log(e);
        }
    }
}

export const rejectOutingApplication = (id,token) => {
    return async() => {
        let id1 = toast.show("Please wait...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            const response = await APIconnector("PUT",REJECT_OUTING_APPLICATION,{id},{Authorization: `Bearer ${token}`});
            if(!response.data.success){
                toast.update(id1, response.data.message, {type: "danger",placement: "top",animationType: "slide-in"});
                throw new Error(response.data.message);
            }
            toast.update(id1, "Application Rejection Successfully", {type: "success",placement: "top",animationType: "slide-in"});
            // navigation.navigate("Login");
        }catch(e){
            toast.update(id1, "Application Rejection failed", {type: "danger",placement: "top",animationType: "slide-in"});
            console.log(e);
        }
    }
}
