import { APIconnector } from "../APIconnector";
import { officialEndPoints } from "../APIs";

const {CREATE_ANNOUNCEMENT_API,
    DELETE_ANNOUNCEMENT_API,
    GET_PENDING_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,
    GET_ACCEPTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,
    GET_REJECTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,
    APPROVE_PENDING_OUTING_APPLICATION_API,
    REJECT_PENDING_OUTING_APPLICATION_API,
    GET_ALL_UNRESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API,
    GET_ALL_RESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API,
    RESOLVE_HOSTEL_COMPLAINT_API,
    UNRESOLVE_HOSTEL_COMPLAINT_API,
    GET_ALL_STUDENT_FOR_ATTENDENCE_BY_HOSTEL_BLOCK_API,
    MARK_STUDENT_PRESENT_API,
    MARK_STUDENT_ABSENT_API,
    UNMARK_STUDENT_PRESENT_API,
    UNMARK_STUDENT_ABSENT_API,
    FETCH_ROOMS_IN_HOSTEL_BLOCK_API,
    UPDATE_STUDENT_ATTENDENCE_RECORDS_API,
} = officialEndPoints;

export const createAnnouncement = (formData,token,toast) => {
    return async() => {
        let id = toast.show("Creating announcement...",{type: "normal"});
        try{        
            const response = await APIconnector("POST",CREATE_ANNOUNCEMENT_API,formData,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});

            if(!response.data.success){
                toast.hide(id);
                throw new Error(response.data.message);
            }

            toast.hide(id);
            toast.show("Announcement created Successfully",{type: "success"});
        }catch(e){
            toast.hide(id);
            toast.show("Announcement creation failed", {type: "danger"});
            console.log(e);
        }
    }
}

export const getAllPendingApplicationByHostelBlock = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_PENDING_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Fetched Applications Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Applications",{type:"danger"});
            return null;
        }
    }
}

export const getAllAcceptedApplicationByHostelBlock = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_ACCEPTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Fetched Applications Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Applications",{type:"danger"});
            return null;
        }
    }
}

export const getAllRejectedApplicationByHostelBlock = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_REJECTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Fetched Applications Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Applications",{type:"danger"});
            return null;
        }
    }
}

export const approvePendingOutingApplication = (applicationId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",APPROVE_PENDING_OUTING_APPLICATION_API,{applicationId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Approved Application Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            console.log(e);
            toast.hide(id);
            toast.show("Unable to approve Applications",{type:"danger"});
            return null;
        }
    }
}

export const rejectPendingOutingApplication = (applicationId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",REJECT_PENDING_OUTING_APPLICATION_API,{applicationId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Rejected Application Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to reject Applications",{type:"danger"});
            return null;
        }
    }
}

export const getAllUnresolvedHostelComplaints = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_ALL_UNRESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Fetched All Unresolved issues Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Unresolved Issues",{type:"danger"});
            return null;
        }
    }
}

export const getAllResolvedHostelComplaints = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_ALL_RESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Fetched All resolved issues Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch resolved Issues",{type:"danger"});
            return null;
        }
    }
}

export const resolveHostelComplaint = (complaintId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",RESOLVE_HOSTEL_COMPLAINT_API,{complaintId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Resolved Complaint Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            console.log(e);
            toast.hide(id);
            toast.show("Unable to resolve complaint",{type:"danger"});
            return null;
        }
    }
}

export const unResolveHostelComplaint = (complaintId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",UNRESOLVE_HOSTEL_COMPLAINT_API,{complaintId},{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show("Unresolved Complaint Successfully",{type:"success"});
            return response?.data?.data;
        }catch(e){
            console.log(e);
            toast.hide(id);
            toast.show("Unable to unresolve complaint",{type:"danger"});
            return null;
        }
    }
}

export const getAllStudentsByHostelBlockForAttendence = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",GET_ALL_STUDENT_FOR_ATTENDENCE_BY_HOSTEL_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch student Attendence",{type:"danger"});
            return null;
        }
    }
}

export const markStudentPresent = (presentDate,attendenceRecordId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",MARK_STUDENT_PRESENT_API,{presentDate,attendenceRecordId},{Authorization: `Bearer ${token}`});
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
            toast.show("Unable to mark present",{type:"danger"});
            return null;
        }
    }
}

export const markStudentAbsent = (absentDate,attendenceRecordId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",MARK_STUDENT_ABSENT_API,{absentDate,attendenceRecordId},{Authorization: `Bearer ${token}`});
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
            toast.show("Unable to mark absent",{type:"danger"});
            return null;
        }
    }
}

export const unmarkStudentPresent = (presentDate,attendenceRecordId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",UNMARK_STUDENT_PRESENT_API,{presentDate,attendenceRecordId},{Authorization: `Bearer ${token}`});
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
            toast.show("Unable to unmark present",{type:"danger"});
            return null;
        }
    }
}

export const unmarkStudentAbsent = (absentDate,attendenceRecordId,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",UNMARK_STUDENT_ABSENT_API,{absentDate,attendenceRecordId},{Authorization: `Bearer ${token}`});
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
            toast.show("Unable to unmark absent",{type:"danger"});
            return null;
        }
    }
}

export const fetchHostelBlockRoomsForAttendance = (token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("GET",FETCH_ROOMS_IN_HOSTEL_BLOCK_API,null,{Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to fetch Data",{type:"danger"});
            return null;
        }
    }
}

export const updateAttendanceRecords = (formdata,token,toast) => {
    return async() => {
        let id = toast.show("Please Wait...",{type:"normal"});
        try{    
            const response = await APIconnector("PUT",UPDATE_STUDENT_ATTENDENCE_RECORDS_API,formdata,{"Content-Type": "multipart/form-data",Authorization: `Bearer ${token}`});
            if(!response?.data?.success){
                toast.hide(id);
                toast.show(response?.data?.message,{type:"danger"});
                throw new Error(response?.data?.message);
            }

            toast.hide(id);
            toast.show(response?.data?.message,{type:"success"});
            return response?.data?.data;
        }catch(e){
            toast.hide(id);
            toast.show("Unable to Update Attendance",{type:"danger"});
            return null;
        }
    }
}