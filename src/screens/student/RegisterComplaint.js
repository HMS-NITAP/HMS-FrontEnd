import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import MainButton from '../../components/common/MainButton'
import ModalDropdown from 'react-native-modal-dropdown';

const RegisterComplaint = ({navigation}) => {
  const dropdownOptions = [
                            'General', 
                            'Food Issues',
                            'Electrical',
                            'Civil', 
                            'Room Cleaning',
                            'Restroom Cleaning',
                            'Network Issue', 
                            'Indisciplinary', 
                            'Discrimination/Harassment',
                            'Damage to Property'
                          ];
  const [type, setType] = useState('');
  const [summary, setSummary] = useState('');
  const [details, setDetails] = useState('');
  const [complaineeID, setComplaineeID] = useState('');

  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text>Register Complaint</Text></View>
        <View style={styles.form}>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Type<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <ModalDropdown
            options={dropdownOptions}
            style={styles.input}
            dropdownStyle={styles.dropdownOptions}
            defaultValue="General"
            onSelect={(index, value) => setType(value)}
          />
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Complainee ID<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          value={complaineeID}
          onChangeText={setComplaineeID}
          style={styles.input} 
          placeholder='Enter your ID'
          keyboardType='Numeric' 
          />
          <Text style={{fontWeight:"100",fontSize:10}}>Only for Indisciplinary, Discrimination/Harassment or Damage to Property Complaints</Text>
        </View>
        
        <View style={styles.subFormView}>
          <Text style={styles.label} >Summary<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          value={summary}
          onChangeText={setSummary}
          style={styles.input} placeholder='Enter your Summary' 
          />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Detailes<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput
          value={details}
          onChangeText={setDetails} 
          editable multiline numberOfLines={4} style={styles.input} 
          />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Upload Related Documents<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput style={styles.input} placeholder='Enter your password' />
        </View>
        <View style={styles.subFormView}>
          <MainButton text={"Register"}/>
        </View>

        </View>
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
  subFormView:{
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'start',
      gap:2,
  },
  form:{
      paddingTop:60,
      paddingBottom:30,
      width:"80%",
      display:'flex',
      justifyContent:'center',
      alignItems:'start',
      flexDirection:'column',
      gap:20,
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
  dropdownOptions: {
    width: 250, // Set the same width as the dropdown
    padding:10,
    paddingHorizontal:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#adb5bd",
  },
})


export default RegisterComplaint