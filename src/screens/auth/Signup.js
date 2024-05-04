import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native'
import MainButton from '../../components/common/MainButton'
import { RadioButton } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form'
import {useDispatch} from 'react-redux';
import { setSignUpData } from '../../reducer/slices/AuthSlice'
import { sendOTP } from '../../services/operations/AuthAPI'
import { AccountType } from '../../static/AccountType'
import { useToast } from "react-native-toast-notifications";


const Signup = ({navigation}) => {

  const toast = useToast();

  const { control,setValue, handleSubmit, formState: { errors } } = useForm();

  const [accountType, setAccountType] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setValue("email","");
    setValue("password","");
    setValue("confirmPassword","");
    setAccountType("");
  }, []);

  const handleRadioPress = (value) => {
    setAccountType(value);
  };

  const handlePress = () => {
    navigation.navigate("Login");
  };

  const onSubmit = async(data) => {
    console.log("Form Data:", data);
    if(data.password != data.confirmPassword){
      toast.show("Both passwords are not Matching", {type: "danger",placement: "top",duration: 3000,offset: 30,animationType: "slide-in",});
    }else{
      const signupData = {
        ...data,accountType
      }
      // console.log("signup data",signupData);
      let id = toast.show("Please Wait...",{type: "normal",placement: "top",animationType: "zoom-in"});
      await dispatch(setSignUpData(signupData));
      await dispatch(sendOTP(data.email,navigation,toast,id));
      // toast.update(id, "OTP Sent Successfully", {type: "success",placement: "top",animationType: "zoom-in"});
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.subFormView}>
            <Text style={styles.label}>Email ID<Text style={styles.required}>*</Text>:</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter your college Email ID"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
              defaultValue=""
            />
            {errors.email && <Text style={styles.errorText}>Email is required.</Text>}
          </View>
          <View style={styles.subFormView}>
            <Text style={styles.label}>Password<Text style={styles.required}>*</Text>:</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              )}
              name="password"
              defaultValue=""
            />
            {errors.password && <Text style={styles.errorText}>Password is required.</Text>}
          </View>
          <View style={styles.subFormView}>
            <Text style={styles.label}>Confirm Password<Text style={styles.required}>*</Text>:</Text>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Re-enter your password"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                />
              )}
              name="confirmPassword"
              defaultValue=""
            />
            {errors.confirmPassword && <Text style={styles.errorText}>Please confirm your password.</Text>}
          </View>
          <View style={styles.subFormView}>
            <Text style={styles.label}>Account Type<Text style={styles.required}>*</Text>:</Text>
            <View style={styles.radioGroup}>
              {
                AccountType.map((account,index) => (
                <View key={index} style={styles.radioButtonContainer}>
                  <RadioButton
                    value={account.value}
                    status={accountType === account.value ? 'checked' : 'unchecked'}
                    onPress={() => handleRadioPress(account.value)}
                  />
                  <Text style={styles.radioLabel}>{account.name}</Text>
                </View>
              ))
              }
            </View>
          </View>
          <View style={styles.subFormView}>
            <MainButton text="Sign Up" onPress={handleSubmit(onSubmit)} />
          </View>
        </View>
        <Text style={styles.createAccount} onPress={handlePress}>Already have an Account? Click Here</Text>
      </View>
    </>
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
  headingText:{
    fontSize:30,
    fontWeight:"700",
    color:"black",
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
    gap:0,
  },
  label:{
    fontSize:15,
    fontWeight:'500',
    color:'#000000',
    marginBottom:10,
  },
  input:{
    padding:10,
    paddingHorizontal:10,
    borderWidth:1,
    borderRadius:10,
    borderColor:"#adb5bd",
    color:"black",
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
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap:"wrap",
  },
  radioButtonContainer: {
    display:"flex",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"flex-start",
    flexWrap:"wrap",
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 5,
    color:"black"
  },
  errorText:{
    fontSize:14,
    color:"red",
  }
})

export default Signup