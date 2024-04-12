/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Platform, DatePickerAndroid, TouchableOpacity } from 'react-native'
import MainButton from '../../components/common/MainButton'
import ModalDropdown from 'react-native-modal-dropdown';

const OutingApplication = ({navigation}) => {
  const dropdownOptions = [
                            'Local', 
                            'Non Local'
                          ];

  //states
  const [type, setType] = useState('');
  const [summary, setSummary] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [complaineeID, setComplaineeID] = useState('');
  const [place, setPlace] = useState('');
  const [purpose, setPurpose] = useState('');
                       
  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text>OutingApplication</Text></View>
        <View style={styles.form}>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Type<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <ModalDropdown
            options={dropdownOptions}
            style={styles.input}
            dropdownStyle={styles.dropdownOptions}
            defaultValue="---------"
            onSelect={(index, value) => setType(value)}
          />
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >From date & time<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          value={fromDate}
          onChangeText={setFromDate}
          style={styles.input} placeholder='Enter your ID'
          keyboardType='Numeric' 
          />
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >To date & time<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          value={toDate}
          onChangeText={setToDate}
          style={styles.input} placeholder='Enter your ID'
          keyboardType='Numeric' 
          />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Place of visit<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          value={place}
          onChangeText={setPlace}
          style={styles.input} placeholder='Place of visit' 
          />
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Purpose<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput 
          style={styles.input}
          value={purpose}
          onChangeText={setPurpose} 
          placeholder='Purpose of visit' 
          />
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
      gap:30,
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
    height: 50,
    borderRadius:10,
    borderColor:"#adb5bd",
  },
})


export default OutingApplication