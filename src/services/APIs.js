SERVER_BASE_URL = "https://backend-lxur.onrender.com/api/v1"
// SERVER_BASE_URL = "http://192.168.160.208:4000/api/v1"
// NOTE : USE YOUR LAPTOP IPv4 host Address - cmd : ipconfig

export const authEndPoints = {
    SENDOTP_API : SERVER_BASE_URL + "/auth/sendOTP",
    SIGNUP_API : SERVER_BASE_URL + "/auth/signup",
    LOGIN_API : SERVER_BASE_URL + "/auth/login",
    RESET_PASSWORD_TOKEN : SERVER_BASE_URL + "/auth/resetPasswordToken",
    RESET_PASSWORD : SERVER_BASE_URL + "/auth/resetPassword",
}

export const announcementEndPoints = {
    CREATE_ANNOUNCEMENT_API : SERVER_BASE_URL + "/official/createAnnouncement",
    DELETE_ANNOUNCEMENT_API : SERVER_BASE_URL + "/official/deleteAnnouncement",
    GET_ALL_ANNOUNCEMENTS_API : SERVER_BASE_URL + "/announcement/getAllAnnouncements",
}

export const studentEndPoints = {
    // OUTING APPILICATION APIs
    CREATE_OUTING_APPLICATION_API : SERVER_BASE_URL + '/student/createOutingApplication',
    GET_STUDENT_ALL_OUTING_APPLICATIONS_API : SERVER_BASE_URL + '/student/getStudentAllOutingApplications',

    // HOSTEL COMPLAINTS APIs
    CREATE_HOSTEL_COMPLAINT_API : SERVER_BASE_URL + '/student/createHostelComplaint',
    DELETE_HSOTEL_COMPLAINT_API : SERVER_BASE_URL + '/student/deleteHostelComplaint',
    SHOW_ALL_STUDENT_COMPLAINT_API : SERVER_BASE_URL + '/student/showAllStudentComplaints',

    // MESS FEEDBACK APIs
    CREATE_MESS_FEEDBACK_API : SERVER_BASE_URL + '/student/createMessFeedBack',
    DELETE_MESS_FEEDBACK_API : SERVER_BASE_URL + '/student/deleteMessFeedBack',

    // ATTENDENCE APIs
    GET_STUDENT_ATTENDENCE_API : SERVER_BASE_URL + '/student/getStudentAttendance',

    //DASHBOARD APIs
    GET_STUDENT_DASHBOARD_DATA_APT : SERVER_BASE_URL + '/student/getStudentDashboardData',

    // PROFILE APIs
    EDIT_STUDENT_PROFILE_API : SERVER_BASE_URL + '/student//editProfile',
}

export const officialEndPoints = {
    // ANNOUNCEMENTS APIs
    CREATE_ANNOUNCEMENT_API : SERVER_BASE_URL + '/official/createAnnouncement',
    DELETE_ANNOUNCEMENT_API : SERVER_BASE_URL + '/official/deleteAnnouncement',

    // OUTING APPLICATION APIs
    GET_PENDING_OUTING_APPLICATION_BY_WARDEN_BLOCK_API : SERVER_BASE_URL + '/official/getPendingOutingApplicationsByWardenBlock',
    GET_ACCEPTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API : SERVER_BASE_URL + '/official/getAcceptedOutingApplicationsByWardenBlock',
    GET_REJECTED_OUTING_APPLICATION_BY_WARDEN_BLOCK_API : SERVER_BASE_URL + '/official/getRejectedOutingApplicationsByWardenBlock',
    APPROVE_PENDING_OUTING_APPLICATION_API : SERVER_BASE_URL + '/official/approvePendingOutingApplication',
    REJECT_PENDING_OUTING_APPLICATION_API : SERVER_BASE_URL + '/official/rejectPendingOutingApplication',

    // HOSTEL COMPLAINT APIs
    GET_ALL_UNRESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/official/getAllUnresolvedComplaintsByHostelBlock',
    GET_ALL_RESOLVED_COMPLAINTS_BY_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/official/getAllResolvedComplaintsByHostelBlock',
    RESOLVE_HOSTEL_COMPLAINT_API : SERVER_BASE_URL + '/official/resolveHostelComplaint',
    UNRESOLVE_HOSTEL_COMPLAINT_API : SERVER_BASE_URL + '/official/unresolveHostelComplaint',

    // ATTENDENCE APIs
    GET_ALL_STUDENT_FOR_ATTENDENCE_BY_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/official/getAllStudentsByHostelBlockForAttendence',
    MARK_STUDENT_PRESENT_API : SERVER_BASE_URL + '/official/markStudentPresent',
    MARK_STUDENT_ABSENT_API : SERVER_BASE_URL + '/official/markStudentAbsent',
    UNMARK_STUDENT_PRESENT_API : SERVER_BASE_URL + '/official/unMarkStudentPresent',
    UNMARK_STUDENT_ABSENT_API : SERVER_BASE_URL + '/official/unMarkStudentAbsent',
}

export const adminEndPoints = {
    // HOSTEL BLOCK APIs
    CREATE_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/admin/createHostelBlock',
    DELETE_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/admin/deleteHostelBlock',
    ADD_WARDEN_TO_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/admin/addWardenToHostelBlock',
    REMOVE_WARDEN_FROM_HOSTEL_BLOCK_API : SERVER_BASE_URL + '/admin/removeWardenFromHostelBlock',

    // MESS HALL APIs
    CREATE_MESS_HALL_API : SERVER_BASE_URL + '/admin/createMessHall',
    DELETE_MESS_HALL_API : SERVER_BASE_URL + '/admin/deleteMessHall',
}

export const commonEndPoints = {
    GET_ALL_ANNOUNCEMENTS_API : SERVER_BASE_URL + '/common/getAllAnnouncements',
    FETCH_ALL_HOSTEL_DATA_API : SERVER_BASE_URL + '/common/fetchAllHostelData',
}