import { APIconnector } from "../APIconnector";
import { commonEndPoints } from "../APIs";

const {
    GET_ALL_ANNOUNCEMENTS_API,
    FETCH_ALL_HOSTEL_DATA_API,
    FETCH_MESS_DATA_AND_FEEDBACK,
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

export const fetchHostelData = (toast) => {
    return async () => {
        let id = toast.show("Fetching Data...", {type:'normal'});
        try {
            const response = await APIconnector("GET", FETCH_ALL_HOSTEL_DATA_API);
    
            if (!response.data.success) {
            toast.hide(id);
            toast.show(response?.data?.message, { type: "danger" });
            throw new Error(response.data.message);
            }
    
            toast.hide(id);
            toast.show(response?.data?.message, { type: "success" });
            return response?.data?.data;
        } catch (e) {
            toast.hide(id);
            toast.show("Failed to Fetch Hostel Data", { type: "danger" });
            console.log("Error", e);
            return null;
        }
    };
  };

  export const fetchMessAndFeedBackData = (toast) => {
    return async() => {
        let id = toast.show("Fetching Data...", {type:'normal'});
        try {
            const response = await APIconnector("GET", FETCH_MESS_DATA_AND_FEEDBACK);
    
            if (!response.data.success) {
                toast.hide(id);
                toast.show(response?.data?.message, { type: "danger" });
                throw new Error(response.data.message);
            }
    
            toast.hide(id);
            toast.show(response?.data?.message, { type: "success" });
            return response?.data?.data;
        } catch (e) {
            toast.hide(id);
            toast.show("Failed to Fetch Mess Feedback Data", { type: "danger" });
            console.log("Error", e);
            return null;
        }
    }
  }