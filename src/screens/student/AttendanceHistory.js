/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import MainButton from '../../components/common/MainButton'
import ModalDropdown from 'react-native-modal-dropdown';
import { presentDays,absentDays } from '../../static/AttendanceData'; 
// import AttendanceTemp from '../../components/student/AttendanceTemp';

const AttendanceHistory = () => {

  const dropdownOptions = [
    'January', 
    'February',
    'March',
    'April', 
    'May',
    'June',
    'July', 
    'August', 
    'September',
    'November',
    'December'
  ];
  const [month, setMonth] = useState('');
  const [present, setPresent] = useState(true);

  const presentHandler=() => {
    setPresent(true);
  }
  const absentHandler=()=>{
    setPresent(false);
  }

  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text>AttendanceHistory</Text></View>
        <View style={styles.form}>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Select Month<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <ModalDropdown
            options={dropdownOptions}
            style={styles.input}
            dropdownStyle={styles.dropdownOptions}
            defaultValue="none"
            onSelect={(index, value) => setMonth(value)}
          />
        </View>
        
        <View style={styles.buttonView}>
            <View style={styles.subFormView}>
              <MainButton text={"Present Days"} onPress={presentHandler}/>
            </View>
            <View style={styles.subFormView}>
              <MainButton text={"Absent Days"} onPress={absentHandler}/>
            </View>
        </View>
        
        <View >
          {present && 
          <View  style={styles.linkContainer}>
            {
              presentDays.map((item, index) => (
                <View>
                  <Text  key={index}>{item}</Text>
                  <View style={styles.line} />
                </View>
                
              ))
            } 
          </View>
          }

          {!present && 
          <View style={styles.linkContainer}>
            {
              absentDays.map((item, index) => (
                <View>
                  <Text  key={index}>{item}</Text>
                  <View style={styles.line} />
                </View>
              ))
            }
          </View>
          }
        </View>

        <View style={styles.subFormView}>
          <MainButton text={"Submit"}/>
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
      gap:10,
  },
  buttonView:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'start',
    gap:10,
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
    borderRadius:10,
    borderColor:"#adb5bd",
  },
  linkContainer:{
    width:"100%",
    gap:20,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    paddingVertical:30,
    paddingHorizontal:10,
  },
  line: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1,      
    marginVertical: 10,         
  },
})

export default  AttendanceHistory

