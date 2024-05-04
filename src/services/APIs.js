SERVER_BASE_URL = "https://backend-lxur.onrender.com/api/v1"
// SERVER_BASE_URL = "http://172.180.11.85:4000/api/v1"
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
