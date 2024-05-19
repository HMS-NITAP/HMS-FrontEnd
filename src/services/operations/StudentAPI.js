import { APIconnector } from "../APIconnector";
import { studentEndPoints } from "../APIs";

const { CREATE_OUTING_APPLICATION_API,
    DELETE_PENDING_OUTING_APPLICATION_API,
    GET_STUDENT_ALL_OUTING_APPLICATIONS_API,
    CREATE_HOSTEL_COMPLAINT_API,
    DELETE_HSOTEL_COMPLAINT_API,
    SHOW_ALL_STUDENT_COMPLAINT_API,
    CREATE_MESS_FEEDBACK_API,
    DELETE_MESS_FEEDBACK_API,
    GET_STUDENT_DASHBOARD_DATA_APT,
    EDIT_STUDENT_PROFILE_API,
    GET_STUDENT_ATTENDENCE_API,
} = studentEndPoints;


export const CreateOutingApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Creating Outing Application...",{type: "normal"});
        try{
            console.log("FORMDAdTA",formData);
            const response = await APIconnector("POST",CREATE_OUTING_APPLICATION_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});

            if(!response.data.success){
                toast.hide(id);
                toast.show(response?.data?.message, {type: "danger"});
                throw new Error(response.data.message);
            }

            toast.hide(id);
            toast.show("Outing Application Created Successfully", {type: "success"});

        }catch(e){
            toast.hide(id);
            toast.show("Failed to create Outing Application", {type: "danger"});
            console.log("Eror",e);
        }
    }
}

export const getStudentAllOutingApplication = (token,toast) => {
    return async () => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",GET_STUDENT_ALL_OUTING_APPLICATIONS_API,null,{Authorization: `Bearer ${token}`});
            if(!response.data.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type: "danger"});
                throw new Error(response?.data?.message);

            }
            
            toast.hide(id);
            toast.show("Fetched All Applications",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Application");
            console.log(e)
        }
    }
}

export const getStudentAcceptedApplication = (token) => {
    return async () => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",GET_STUDENT_ACCEPTED_OUTING_APPLICATION_API,null,{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show("Fetched All Pending Applications",{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Pending Application");
            console.log(e)
        }
    }
}

export const getStudentRejectedApplication = (token) => {
    return async () => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",GET_STUDENT_REJECTED_OUTING_APPLICATION_API,null,{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show("Fetched All Pending Applications",{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Pending Application");
            console.log(e)
        }
    }
}

export const createHostelComplaint = (formData,token,toast) => {
    return async () => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("POST",CREATE_HOSTEL_COMPLAINT_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show("Created Hostel Complaint Successfully",{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to create hostel Complaint",{type:"danger"});
            console.log(e)
        }
    }
}

export const getAllStudentHostelComplaint = (token,toast) => {
    return async () => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",SHOW_ALL_STUDENT_COMPLAINT_API,null,{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show("Fetched Complaints Successfully",{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch hostel Complaints",{type:"danger"});
            console.log(e)
        }
    }
}

export const getStudentDashboardData = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",GET_STUDENT_DASHBOARD_DATA_APT,null,{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch student dashboard data",{type:"danger"});
            console.log(e)
        }
    }
}

export const editStudentProfile = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("PUT",EDIT_STUDENT_PROFILE_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to Edit student Profile data",{type:"danger"});
            console.log(e)
        }
    }
}

export const createMessFeedBack = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Creating Mess Feedback...",{type: "normal"});
        try{
            console.log("FORMDAdTA",formData);
            const response = await APIconnector("POST",CREATE_MESS_FEEDBACK_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});

            if(!response.data.success){
                toast.hide(id);
                toast.show(response?.data?.message, {type: "danger"});
                throw new Error(response.data.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message, {type: "success"});

        }catch(e){
            toast.hide(id);
            toast.show("Failed to Mess Feedback", {type: "danger"});
            console.log("Eror",e);
        }
    }
}

export const getStudentAttendance = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{
            const response = await APIconnector("GET",GET_STUDENT_ATTENDENCE_API,null,{Authorization: `Bearer ${token}`});
            
            if(!response.data.success){
                toast.hide(id);
                toast.show(response.data.message, {type: "danger"});
                throw new Error(response.data.message);
            }
            
            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response.data.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch student attendance data",{type:"danger"});
            console.log(e)
        }
    }
}