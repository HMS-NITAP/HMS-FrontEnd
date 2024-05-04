import React from 'react'
import { Text, View } from 'react-native'
import MainButton from '../../components/common/MainButton'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/operations/AuthAPI'
import { useToast } from 'react-native-toast-notifications'

const LogoutModal = ({navigation}) => {
    
    const dispatch = useDispatch();
    const toast = useToast();

    const logOutHandler = async() => {
        await(dispatch(logout(navigation,toast)));
    }

  return (
    <View style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:20,marginHorizontal:20,marginVertical:40}}>
        <Text style={{fontSize:20,fontWeight:"800",color:"black", textAlign:"center"}}>Do you want to logout from your Account? </Text>
        <View style={{display:"flex", flexDirection:"row", justifyContent:"center",alignItems:"center",gap:20}}>
            <MainButton text="Continue" onPress={logOutHandler} />
            <MainButton text="Go Back" backgroundColor={"#57cc99"} onPress={() => (navigation.navigate("StudentDashboard"))} />
        </View>
    </View>
  )
}

export default LogoutModal