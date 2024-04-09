SERVER_BASE_URL = "http://192.168.185.208:4000/api/v1"
// NOTE : USE YOUR LAPTOP IPv4 host Address

export const authEndPoints = {
    SENDOTP_API : SERVER_BASE_URL + "/auth/sendOTP",
    SIGNUP_API : SERVER_BASE_URL + "/auth/signup",
    LOGIN_API : SERVER_BASE_URL + "/auth/login",
    RESET_PASSWORD_TOKEN : SERVER_BASE_URL + "/auth/resetPasswordToken",
    RESET_PASSWORD : SERVER_BASE_URL + "/auth/resetPassword",
}
