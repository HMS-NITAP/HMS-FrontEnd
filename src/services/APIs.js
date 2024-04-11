SERVER_BASE_URL = "http://192.168.177.208:4000/api/v1"
// NOTE : USE YOUR LAPTOP IPv4 host Address

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