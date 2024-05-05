import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, DatePickerAndroid } from 'react-native'
import MainButton from '../../components/common/MainButton'
import ModalDropdown from 'react-native-modal-dropdown';
import { useForm,Controller } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux';
import { createOutingApplication } from '../../services/operations/OutingApplicationAPI';

const OutingApplication = ({navigation}) => {
  const dropdownOptions = [
                            'Local', 
                            'Non Local'
                          ];


  const [type,setType] = useState("Local");
  const dispatch = useDispatch();

  const {token} = useSelector((state) => state.Auth);

  const { control, handleSubmit, formState: { errors } } = useForm();

  const submitHanlder = async(data) => {
    console.log("Data",data);
    await dispatch(createOutingApplication(type,data.from,data.to,data.placeOfVisit,data.purpose));
  }


  return (
    <View style={styles.container}>
        <View style={styles.form}>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Type<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <ModalDropdown
            options={dropdownOptions}
            style={styles.input}
            dropdownStyle={styles.dropdownOptions}
            defaultValue="Local"
            onSelect={(_, value) => setType(value)}
          />
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >From<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="From Date"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="from"
            defaultValue=""
          />
          {errors.from && <Text style={styles.errorText}>From Date is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >To <Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter to Date"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="to"
            defaultValue=""
          />
          {errors.to && <Text style={styles.errorText}>To Date is required.</Text>}
        </View>
        
        <View style={styles.subFormView}>
          <Text style={styles.label} >Place of Visit<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter place of Visit"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="placeOfVisit"
            defaultValue=""
          />
          {errors.placeOfVisit && <Text style={styles.errorText}>place of visit is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <Text style={styles.label} >Purpose of Visit<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your purpose of Visit"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="purpose"
            defaultValue=""
          />
          {errors.purpose && <Text style={styles.errorText}>Purpose of Visit is required.</Text>}
        </View>

        <View style={styles.subFormView}>
          <MainButton text={"Apply"} onPress={handleSubmit(submitHanlder)}/>
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