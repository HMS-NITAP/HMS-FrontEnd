import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native'
import MainButton from '../../components/common/MainButton'
import { useForm,Controller } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import { CreateOutingApplication } from '../../services/operations/StudentAPI';
import DatePicker from 'react-native-date-picker'
import { useToast } from 'react-native-toast-notifications';

const OutingApplication = ({}) => {
  
  const [type,setType] = useState("Local");
  const toast = useToast();
  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.Auth);

  const [fromDate, setFromDate] = useState(new Date());
  const [fromOpen, setFromOpen] = useState(false);
  const [toDate, setToDate] = useState(new Date());
  const [toOpen, setToOpen] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm();

  const submitHanlder = async(data) => {
    if(toDate < fromDate || toDate < Date.now() || fromDate < Date.now()){
      toast.show("Invalid Dates Selected",{type:"warning"});
      return;
    }
    let formData = new FormData();
    formData.append('type',type);
    formData.append('from',fromDate.toISOString());
    formData.append('to',toDate.toISOString());
    formData.append('purpose',data.purpose);
    formData.append('placeOfVisit',data.placeOfVisit);
    console.log("FormData",formData);
    await dispatch(CreateOutingApplication(formData,token,toast));
  }

  useEffect(() => {
    console.log("To",toDate);
    console.log("From",fromDate);
  },[toDate,fromDate]);


  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.form}>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Outing Type<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <View style={{width:"100%", marginHorizontal:"auto", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", overflow:'hidden', borderWidth:1, borderColor:"black", borderRadius:10}}>
            <TouchableOpacity style={{width:"50%", textAlign:"center", paddingVertical:8, backgroundColor:type==="Local" ? "#ffb703" : "white",}} onPress={() => setType("Local")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Local</Text></TouchableOpacity>
            <TouchableOpacity style={{width:"50%", textAlign:"center", paddingVertical:8, backgroundColor:type==="NonLocal" ? "#ffb703" : "white",}} onPress={() => setType("NonLocal")}><Text style={{textAlign:'center', width:"100%", color:"black"}}>Non Local</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Place of visit<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Place of Visit"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}
            name="placeOfVisit"
            defaultValue=""
          />
          {errors.placeOfVisit && <Text style={styles.errorText}>Place of Visit is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Purpose<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Purpose"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
            )}
            name="purpose"
            defaultValue=""
          />
          {errors.purpose && <Text style={styles.errorText}>Purpose is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Select From Date<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <View style={{display:"flex", flexDirection:"row", gap:15, justifyContent:"space-between", alignItems:"center"}}>
            <View>
              <MainButton text={"From Date"} backgroundColor={"#b7e4c7"} onPress={() => setFromOpen(true)} />
              <DatePicker 
                modal
                open={fromOpen}
                date={fromDate}
                onConfirm={(date) => {
                  setFromOpen(false);
                  setFromDate(date);
                }}
                onCancel={() => {
                  setFromOpen(false);
                }}
              />
            </View>
            <View>
            {fromDate && <Text>{fromDate.toLocaleString()}</Text>}
            </View>
          </View>
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Select To Date<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <View style={{display:"flex", flexDirection:"row", gap:15, justifyContent:"space-between", alignItems:"center"}}>
            <View>
              <MainButton text={"To Date"} backgroundColor={"#b7e4c7"} onPress={() => setToOpen(true)} />
              <DatePicker 
                modal
                open={toOpen}
                date={toDate}
                onConfirm={(date) => {
                  setToOpen(false);
                  setToDate(date);
                }}
                onCancel={() => {
                  setToOpen(false);
                }}
              />
            </View>
            <View>
              {toDate && <Text>{toDate.toLocaleString()}</Text>}
            </View>
          </View>
        </View>

        <View style={styles.subFormView}>
          <MainButton text={"Apply"} onPress={handleSubmit(submitHanlder)}/>
        </View>
        </View>
    </ScrollView>
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
    width: 250,
    padding:10,
    paddingHorizontal:10,
    borderWidth:1,
    height: 50,
    borderRadius:10,
    borderColor:"#adb5bd",
  },
})


export default OutingApplication