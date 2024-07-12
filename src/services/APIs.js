// OLD SERVER (Backend)
// SERVER_BASE_URL = "https://backend-lxur.onrender.com/api/v1"

// NEW SERVER (Backend1)
SERVER_BASE_URL = "https://backend1-itzt.onrender.com/api/v1"

// SERVER_BASE_URL = "http://192.168.226.208:4000/api/v1"
// NOTE : USE YOUR LAPTOP IPv4 host Address - cmd : ipconfig

export const authEndPoints = {
    SENDOTP_API : SERVER_BASE_URL + "/auth/sendOTP",
    SIGNUP_API : SERVER_BASE_URL + "/auth/signup",
    LOGIN_API : SERVER_BASE_URL + "/auth/login",
    RESET_PASSWORD_TOKEN : SERVER_BASE_URL + "/auth/resetPasswordToken",
    RESET_PASSWORD : SERVER_BASE_URL + "/auth/resetPassword",
    VERIFY_OTP : SERVER_BASE_URL + "/auth/verifyOTP",
    CREATE_STUDENT_ACCOUNT_API : SERVER_BASE_URL + "/auth/createStudentAccount",
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

    // DASHBOARD APIs
    FETCH_DASHBOARD_DATA_API : SERVER_BASE_URL + '/official/getDashboardData',

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
    FETCH_ATTENDANCE_DATA_IN_HOSTEL_BLOCK : SERVER_BASE_URL + '/official/fetchAttendanceDataInHostelBlock',
    MARK_STUDENT_PRESENT_API : SERVER_BASE_URL + '/official/markStudentPresent',
    MARK_STUDENT_ABSENT_API : SERVER_BASE_URL + '/official/markStudentAbsent',
    UNMARK_STUDENT_PRESENT_API : SERVER_BASE_URL + '/official/unMarkStudentPresent',
    UNMARK_STUDENT_ABSENT_API : SERVER_BASE_URL + '/official/unMarkStudentAbsent',

    // NEW ATTENDENCE APIs
    
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

    // ACCOUNT HANDLING APIs
    FETCH_OFFICIAL_ACCOUNTS : SERVER_BASE_URL + '/admin/fetchOfficialAccounts',
    CREATE_OFFICIAL_ACCOUNT : SERVER_BASE_URL + '/admin/createOfficialAccount',
    DELETE_OFFICIAL_ACCOUNT : SERVER_BASE_URL + '/admin/deleteOfficialAccount',

    // REGISTRATION APPLICATION APIs
    FETCH_REGISTRATION_APPLICATIONS_API : SERVER_BASE_URL + '/admin/fetchRegistrationApplications',
    ACCEPT_REGISTRATION_APPLICATION_API : SERVER_BASE_URL + '/admin/acceptRegistrationApplication',
    REJECT_REGISTRATION_APPLICATION_API : SERVER_BASE_URL + '/admin/rejectRegistrationApplication',
}

export const commonEndPoints = {
    GET_ALL_ANNOUNCEMENTS_API : SERVER_BASE_URL + '/common/getAllAnnouncements',
    FETCH_ALL_HOSTEL_DATA_API : SERVER_BASE_URL + '/common/fetchAllHostelData',
    FETCH_MESS_DATA_AND_FEEDBACK : SERVER_BASE_URL + '/common/fetchMessDataAndFeedback',
    FETCH_HOSTEL_BLOCKS_NAME : SERVER_BASE_URL + '/common/fetchHostelBlockNames',
    FETCH_HOSTEL_BLOCKS_ROOMS : SERVER_BASE_URL + '/common/fetchHostelBlockRooms',
}