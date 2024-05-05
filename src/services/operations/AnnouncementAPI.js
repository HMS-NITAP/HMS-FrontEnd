import { APIconnector } from "../APIconnector";
import { announcementEndPoints } from "../APIs";

const {CREATE_ANNOUNCEMENT_API,DELETE_ANNOUNCEMENT_API,GET_ALL_ANNOUNCEMENTS_API} = announcementEndPoints;

export const createAnnouncement = (title,textContent,fileContent,token) => {
    return async() => {
        let id = toast.show("Creating announcement...",{type: "normal",placement: "top",animationType: "slide-in"});
        try{
            // const response = await APIconnector("POST",CREATE_ANNOUNCEMENT_API,{title,textContent,file},{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            const response = await APIconnector("POST",CREATE_ANNOUNCEMENT_API,{title,textContent,fileContent},{Authorization: `Bearer ${token}`});

            if(!response.data.success){
                throw new Error(response.data.message);
            }

            toast.update(id, "Announcement created Successfully", {type: "success",placement: "top",animationType: "slide-in"});


        }catch(e){
            toast.update(id, "Announcement creation failed", {type: "danger",placement: "top",animationType: "slide-in"});
            console.log("Error");
            console.log(e);
        }
    }
}

export const deleteAnnouncement = (tokenId,token) => {
    return async() => {
        try{
            const response = await APIconnector("DELETE",DELETE_ANNOUNCEMENT_API,{tokenId},{Authorization: `Bearer ${token}`});

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
            const response = await APIconnector("GET",GET_ALL_ANNOUNCEMENTS_API,null,{Authorization : `Bearer ${token}`});
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            return (response?.data?.announcements);            
        }catch(e){
            console.log(e);
            return null;
        }
    }
}