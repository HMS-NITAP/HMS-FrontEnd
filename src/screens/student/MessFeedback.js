import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native'
import MainButton from '../../components/common/MainButton';
import ModalDropdown from 'react-native-modal-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import { createMessFeedBack } from '../../services/operations/StudentAPI';

const MessFeedback = ({navigation}) => {
  
  const dropdownOptions = [
            '1',
            '2',
            '3',
            '4',
            '5'
  ];
  const [displaySession, setDisplaySession] = useState('');
  const [rating, setRating] = useState('');
  const [details, setDetails] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const time = now.toLocaleTimeString();
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();
    
      const currentHour = now.getHours(); 
      const intervals = [
        { start: 7, end: 10, label: 'BreakFast' },
        { start: 12, end: 14, label: 'Lunch' },
        { start: 16, end: 18, label: 'Snacks' },
        { start: 19, end: 22, label: 'Dinner' },
      ];

      let textToShow = '';
      
      intervals.forEach(interval => {
        if (currentHour >= interval.start && currentHour < interval.end) {
          textToShow = interval.label;
        } else {
          textToShow = 'No Session Available!'
        }
      });
      setDisplaySession(textToShow);
      setCurrentDate(`${day} ${month} ${year}`);
      setCurrentTime(time);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.Auth);
  const toast = useToast();

  const onSubmit = async() => {
    let formData = new FormData();
    formData.append("rating",rating);
    formData.append("review",details);
    formData.append("session",displaySession);
    await dispatch(createMessFeedBack(formData,token,toast));
  }



  return (
    <View style={styles.container}>
        <View style={styles.form}>
        <View>
          <Text style={styles.label}>Date: {currentDate}</Text>
          <Text>Time: {currentTime}</Text>
        </View>

        <View>
          <Text style={styles.label}>Session:<Text style={styles.label}> {displaySession}</Text></Text>
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Rating<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <ModalDropdown
            options={dropdownOptions}
            style={styles.input}
            dropdownStyle={styles.dropdownOptions}
            defaultValue="none"
            onSelect={(index, value) => setRating(value)}
          />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Detailes<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput
          value={details}
          onChangeText={setDetails} 
          editable multiline numberOfLines={8} style={styles.input} 
          />
        </View>
        
        {
          displaySession!=="No Session Available!" ? (
            <View style={styles.subFormView}>
              <MainButton text={"Submit"} onPress={onSubmit}/>
            </View>
          ) : ("")
        }

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
})


export default MessFeedback