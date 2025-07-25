import React from 'react'
import { StyleSheet,TouchableOpacity,Text } from 'react-native'

const MainButton = ({text,textColor,backgroundColor,onPress,isButtonDisabled=false}) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:backgroundColor || "#ffb703", opacity:isButtonDisabled?0.5:1}]} onPress={onPress} disabled={isButtonDisabled} >
        <Text style={[styles.buttonText,{color:textColor || "#000000"}]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        paddingHorizontal:20,
        paddingVertical:15,
        borderRadius:20  ,
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',  
    },
    buttonText:{
        fontSize:15,
        fontWeight:'700',
    }
})

export default MainButton