import { APIconnector } from "../APIconnector";
import { commonEndPoints } from "../APIs";

const {
    GET_ALL_ANNOUNCEMENTS_API,
    FETCH_ALL_HOSTEL_DATA_API,
} = commonEndPoints;

export const getAllAnnouncements = (toast) => {
    return async() => {
        let id = toast.show("Please Wait...", {type:'normal'});
        try{
            const response = await APIconnector("GET",GET_ALL_ANNOUNCEMENTS_API,null);
            if(!response.data.success){
                toast.hide(id);
                throw new Error(response.data.message);
            }
            toast.hide(id);
            toast.show("Fetched all Announcements Successfully",{type:"success"});
            console.log("fdsf",response?.data?.data);
            return (response?.data?.data);            
        }catch(e){
            toast.hide(id);
            toast.show("Fetched all Announcements Successfully",{type:"danger"});
            console.log(e);
            return [];
        }
    }
}