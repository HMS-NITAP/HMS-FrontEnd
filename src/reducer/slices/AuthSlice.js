import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null,
    signUpData : null
}


const AuthSlice = createSlice({
    name : "Auth",
    initialState : initialState,
    reducers : {
        setToken(state,value){
            state.token = value.payload
        },
        setSignUpData(state,value){
            state.signUpData = value.payload
        }
    }
})

export const {setToken,setSignUpData} = AuthSlice.actions;
export default AuthSlice.reducer;