import { APIconnector } from "../APIconnector";
import { adminEndPoints, commonEndPoints } from "../APIs";

const {
    CREATE_HOSTEL_BLOCK_API,
    DELETE_HOSTEL_BLOCK_API,
    ADD_WARDEN_TO_HOSTEL_BLOCK_API,
    REMOVE_WARDEN_FROM_HOSTEL_BLOCK_API,
    CREATE_MESS_HALL_API,
    DELETE_MESS_HALL_API,
    FETCH_OFFICIAL_ACCOUNTS,
    CREATE_OFFICIAL_ACCOUNT,
    DELETE_OFFICIAL_ACCOUNT,
    FETCH_REGISTRATION_APPLICATIONS_API,
    ACCEPT_REGISTRATION_APPLICATION_API,
    REJECT_REGISTRATION_APPLICATION_API,
    FETCH_FREEZED_REGISTRATION_APPLICATIONS_API,
    FREEZE_REGISTRATION_APPILICATION_API,
    CONFIRM_FREEZED_REGISTRATION_APPLICATION_API,
    DELETE_ANNOUNCEMENT_API,
    FETCH_DASHBOARD_DATA_API,
    FETCH_ROOMS_IN_HOSTEL_BLOCK_API,
    FETCH_COTS_IN_ROOM_API,
    FETCH_STUDENT_BY_ROLL_OR_REG_NO_API,
    DOWNLOAD_STUDENT_DATA_BY_HOSTEL_BLOCK_API,
    SEND_ACKNOWLEDGEMENT_LETTER_API,
    DELETE_STUDENT_ACCOUNT,
    CHANGE_STUDENT_PROFILE_PHOTO_API,
    FETCH_COTS_FOR_COT_CHANGE_API,
    SWAP_OR_EXCHANGE_STUDENT_COT_API,
    FETCH_EVEN_SEM_REGISTRATION_APPLICATIONS_API,
    ACCEPT_EVEN_SEM_REGISTRATION_APPLICATIONS_API,
    REJECT_EVEN_SEM_REGISTRATION_APPLICATIONS_API,
} = adminEndPoints;

const {
    FETCH_ALL_HOSTEL_DATA_API,
} = commonEndPoints

export const fetchAllHostelBlocksData = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_ALL_HOSTEL_DATA_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const createHostelBlock = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",CREATE_HOSTEL_BLOCK_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to create Hostel Block";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const deleteHostelBlock = (hostelBlockId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            console.log("first");
            const response = await APIconnector("DELETE",DELETE_HOSTEL_BLOCK_API,{hostelBlockId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to delete hostel block";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const fetchOfficialAccounts = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_OFFICIAL_ACCOUNTS,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Accounts";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const createOfficialAccount = (formData,token,toast) => {
    return async() =>{
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",CREATE_OFFICIAL_ACCOUNT,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to create account";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const deleteOfficialAccount = (officialId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("DELETE",DELETE_OFFICIAL_ACCOUNT,{officialId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to delete account";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const addWardenToHostelBlock = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",ADD_WARDEN_TO_HOSTEL_BLOCK_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to make changes";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const removeWardenFromHostelBlock = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",REMOVE_WARDEN_FROM_HOSTEL_BLOCK_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to make changes";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
        }
    }
}

export const fetchStudentRegistrationApplications = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_REGISTRATION_APPLICATIONS_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const acceptRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",ACCEPT_REGISTRATION_APPLICATION_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Accept Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const rejectRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",REJECT_REGISTRATION_APPLICATION_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Reject Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const fetchFreezedStudentRegistrationApplications = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_FREEZED_REGISTRATION_APPLICATIONS_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const freezeRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",FREEZE_REGISTRATION_APPILICATION_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }
            console.log("DSFD");
            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Freeze Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const confirmFreezeRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",CONFIRM_FREEZED_REGISTRATION_APPLICATION_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Confirm Freeze Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const deleteAnnouncement = (announcementId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("DELETE",DELETE_ANNOUNCEMENT_API,{announcementId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Delete Announcement";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const fetchDashboardData = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_DASHBOARD_DATA_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Dashboard Data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const fetchRoomsInHostelBlock = (hostelBlockId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",FETCH_ROOMS_IN_HOSTEL_BLOCK_API,{hostelBlockId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const fetchCotsInRooms = (roomId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",FETCH_COTS_IN_ROOM_API,{roomId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const fetchStudentByRollNoAndRegNo = (idNumber,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",FETCH_STUDENT_BY_ROLL_OR_REG_NO_API,{idNumber},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Student Data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const downloadStudentDetailsInHostelBlockXlsxFile = (hostelBlockId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",DOWNLOAD_STUDENT_DATA_BY_HOSTEL_BLOCK_API,{hostelBlockId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to download data";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const sendAcknowledgementLetter = (userId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",SEND_ACKNOWLEDGEMENT_LETTER_API,{userId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to send acknowledgement letter";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const deleteStudentAccount = (userId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("DELETE",DELETE_STUDENT_ACCOUNT,{userId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to delete student account";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const changeStudentProfilePhoto = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",CHANGE_STUDENT_PROFILE_PHOTO_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to change student photo";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const fetchCotsForChangeCotOption = (userId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("POST",FETCH_COTS_FOR_COT_CHANGE_API,{userId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Fetch Cots";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const swapOrExchangeCot = (currentCotId,changeToCotId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",SWAP_OR_EXCHANGE_STUDENT_COT_API,{currentCotId,changeToCotId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Change Cots";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const fetchEvenSemStudentRegistrationApplications = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_EVEN_SEM_REGISTRATION_APPLICATIONS_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to fetch Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return null;
        }
    }
}

export const acceptEvenSemRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",ACCEPT_EVEN_SEM_REGISTRATION_APPLICATIONS_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Accept Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}

export const rejectEvenSemRegistrationApplication = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",REJECT_EVEN_SEM_REGISTRATION_APPLICATIONS_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return true;
        }catch(e){
            const errorMessage = e?.response?.data?.message || "Unable to Reject Application";
            console.log(e);
            toast.hide(id);
            toast.show(errorMessage,{type:"danger"});
            return false;
        }
    }
}