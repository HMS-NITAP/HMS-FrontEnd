SERVER_BASE_URL = "https://backend-lxur.onrender.com/api/v1"
// SERVER_BASE_URL = "http://192.168.188.208:4000/api/v1"
// NOTE : USE YOUR LAPTOP IPv4 host Address - cmd : ipconfig

export const authEndPoints = {
    SENDOTP_API : SERVER_BASE_URL + "/auth/sendOTP",
    SIGNUP_API : SERVER_BASE_URL + "/auth/signup",
    LOGIN_API : SERVER_BASE_URL + "/auth/login",
    RESET_PASSWORD_TOKEN : SERVER_BASE_URL + "/auth/resetPasswordToken",
    RESET_PASSWORD : SERVER_BASE_URL + "/auth/resetPassword",
}

export const announcementEndPoints = {
    CREATE_ANNOUNCEMENT_API : SERVER_BASE_URL + "/announcement/createAnnouncement",
    DELETE_ANNOUNCEMENT_API : SERVER_BASE_URL + "/announcement/deleteAnnouncement",
    GET_ALL_ANNOUNCEMENTS_API : SERVER_BASE_URL + "/announcement/getAllAnnouncements",
}

export const studentEndPoints = {
    CREATE_OUTING_APPLICATION : SERVER_BASE_URL + "/student/createOutingApplication",
    APPROVE_OUTING_APPLICATION : SERVER_BASE_URL + "/student/approveOutingApplication",
    REJECT_OUTING_APPLICATION : SERVER_BASE_URL + "/student/rejectOutingApplication",
    GET_ALL_APPLICATIONS : SERVER_BASE_URL + "/student/getAllApplication",
    GET_STUDENT_APPLICATION : SERVER_BASE_URL + "/student/getStudentAllApplication",
}