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
    DELETE_OFFICIAL_ACCOUNT
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to fetch data",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to create Hostel Block",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to delete hostel block",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to fetch Accounts",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to create account",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to delete account",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to make changes",{type:"danger"});
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
            console.log(e);
            toast.hide(id);
            toast.show("Unable to make changes",{type:"danger"});
        }
    }
}
