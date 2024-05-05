import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import MainButton from '../../components/common/MainButton'
import { useForm,Controller } from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import { createAnnouncement } from '../../services/operations/AnnouncementAPI'

const CreateAnnouncement = () => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const {token} = useSelector((state) => state.Auth);
  const dispatch = useDispatch();


  const onSubmit = async(data) => {
    console.log("data",data);
    await dispatch(createAnnouncement(data.title,data.textContent,data.fileContent,token));
  }

  return (
    <View style={styles.container}>
        <View style={styles.form}>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Title<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter Title"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="title"
            defaultValue=""
          />
          {errors.title && <Text style={styles.errorText}>Title is required.</Text>}
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Text Content<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter Announcement content"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                numberOfLines={3}
              />
            )}
            name="textContent"
            defaultValue=""
          />
          {errors.textContent && <Text style={styles.errorText}>Text Content is required.</Text>}
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >File Links<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter File Link"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="fileContent"
            defaultValue=""
          />
          {errors.fileContent && <Text style={styles.errorText}>Link Content is required.</Text>}
        </View>
        <View style={styles.subFormView}>
        </View>
        <View style={styles.subFormView}>
          <MainButton text="Create Announcement" onPress={handleSubmit(onSubmit)} />
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
  subFormView:{
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
export default CreateAnnouncement;