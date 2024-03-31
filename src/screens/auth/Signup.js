import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Chec } from 'react-native'
import MainButtton from '../../components/common/MainButtton'
import { RadioButton } from 'react-native-paper'

const Signup = ({navigation}) => {

  const [text,setText] = useState("");

  const [accountType,setAccountType] = useState(null);

  const handleRadioPress = (value) => {
    setAccountType(value);
  }

  const handlePress = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}><Text style={{fontSize:30,fontWeight:'700',color:'#000000'}}>Sign Up</Text></View>
      <View style={styles.form}>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Email ID<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput style={styles.input} placeholder='Enter your college email ID' />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Password<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput style={styles.input} placeholder='Enter your password' />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Confirm Password<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput style={styles.input} placeholder='Re-enter your password' />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Account Type<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <View style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
            <View style={{display:"flex",width:"80%",marginHorizontal:"auto",justifyContent:"space-between",alignItems:"center"}}>
              <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <RadioButton value='student' status={accountType === 'student' ? 'checked' : 'unchecked' } onPress={() => handleRadioPress("student")} />
                  <Text style={{color:"black",fontSize:16}}>Student</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <RadioButton value='student' status={accountType === 'official' ? 'checked' : 'unchecked' } onPress={() => handleRadioPress("official")} />
                  <Text style={{color:"black",fontSize:16}}>Official</Text>
                </View>
              </View>
              <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between",alignItems:"center"}}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <RadioButton value='student' status={accountType === 'staff' ? 'checked' : 'unchecked' } onPress={() => handleRadioPress("staff")} />
                  <Text style={{color:"black",fontSize:16}}>Staff</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                  <RadioButton value='student' status={accountType === 'security' ? 'checked' : 'unchecked' } onPress={() => handleRadioPress("security")} />
                  <Text style={{color:"black",fontSize:16}}>Security</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.subFormView}>
          <MainButtton text={"Sign Up"} onPress={() => setText("Hello")} />
        </View>
      </View>
      <Text style={styles.createAccount} onPress={handlePress}>Already have an Account? Click Here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'start',
    alignItems:'center',
    width:'100%',
    height:'100%',
  },
  heading:{
    width:'100%',
    backgroundColor:'#ffb703',
    paddingVertical:15,
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:100,
  },
  form:{
    width:"100%",
    paddingTop:60,
    paddingBottom:30,
    width:"80%",
    display:'flex',
    justifyContent:'center',
    alignItems:'start',
    flexDirection:'column',
    gap:20,
  },
  subFormView:{
    width:"100%",
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'start',
    gap:10,
  },
  label:{
    fontSize:15,
    fontWeight:'500',
    color:'#000000',
  },
  input:{
    padding:10,
    paddingHorizontal:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#adb5bd",
  },
  button:{
    textAlign:'center',
    borderRadius:30,
    fontSize:15,
    fontWeight:'800',
    color:"black"
  },
  createAccount:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'500',
    color:"#4a4e69",
  }
})

export default Signup