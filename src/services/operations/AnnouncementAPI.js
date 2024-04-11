import { APIconnector } from "../APIconnector";
import { announcementEndPoints } from "../APIs";
import { useToast } from "react-native-toast-notifications"

const {CREATE_ANNOUNCEMENT_API,DELETE_ANNOUNCEMENT_API,GET_ALL_ANNOUNCEMENTS_API} = announcementEndPoints;

export const createAnnouncement = (title,textContent,file,token) => {
    return async() => {
        try{
            const response = await APIconnector("POST",CREATE_ANNOUNCEMENT_API,{title,textContent,file},{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});

            if(!response.data.success){
                throw new Error(response.data.message);
            }

        }catch(e){
            console.log("Error");
            console.log(e);
        }
    }
}

export const deleteAnnouncement = (id,token) => {
    return async() => {
        try{
            const response = await APIconnector("DELETE",DELETE_ANNOUNCEMENT_API,{id,token},{Authorization: `Bearer ${token}`});

            if(!response.data.success){
                throw new Error(response.data.message);
            }
        }catch(e){
            console.log("Error");
            console.log(e);
        }
    }
}

export const getAllAnnouncements = (token,toast) => {
    return async() => {
        try{
            console.log("first");
            // const toast = useToast();
            toast.show("HIIIfdgfgfgtgekk");
            console.log("OKKKK");
            const response = await APIconnector("GET",GET_ALL_ANNOUNCEMENTS_API,null,{Authorization : `Bearer ${token}`});
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return response?.data?.announcements
        }catch(e){
            console.log(e);
            return null;
        }
    }
}