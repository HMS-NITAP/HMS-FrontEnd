import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import MainButton from '../../components/common/MainButton';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../services/operations/AuthAPI';
import { useToast } from "react-native-toast-notifications";
import Icon from 'react-native-vector-icons/FontAwesome6';

const Login = ({ navigation }) => {
  const toast = useToast();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [secureText, setSecureText] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handlePress = () => {
    navigation.navigate("Student Registration");
  };

  const onSubmit = async(data) => {
    setIsButtonDisabled(true);
    await dispatch(login(data.email, data.password, toast));
    setIsButtonDisabled(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.form}>
        <View style={styles.subFormView}>
          <Text style={styles.label}>Email ID<Text style={{ fontSize: 10, color: 'red' }}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your Institute Email ID"
                placeholderTextColor={"#adb5bd"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
            defaultValue=""
          />
          {errors.email && <Text style={styles.errorText}>Email ID is required.</Text>}
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label}>Password<Text style={{ fontSize: 10, color: 'red' }}>*</Text> :</Text>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={"#adb5bd"}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={secureText}
                />
                <TouchableOpacity
                  style={styles.iconContainer}
                  onPress={() => setSecureText(!secureText)}
                >
                  <Icon name={secureText ? 'eye-slash' : 'eye'} size={20} color="#adb5bd" />
                </TouchableOpacity>
              </>
            )}
            name="password"
            defaultValue=""
          />
          {errors.password && <Text style={styles.errorText}>Password is required.</Text>}
        </View>
        <View style={{ display: "flex", justifyContent: "space-between" }}>
          <></>
          <Text style={{ textAlign: 'right', fontSize: 14, fontWeight: "600", color:"#495057" }} onPress={() => navigation.navigate("Forgot Password")}>Forgot Password?</Text>
        </View>
        <View style={{display:"flex", justifyContent:"center", alignContent:"stretch"}}>
          <MainButton text="Log In" onPress={handleSubmit(onSubmit)} isButtonDisabled={isButtonDisabled} />
        </View>
      </View>
      <TouchableOpacity style={styles.createAccount} onPress={handlePress}><Text style={{textAlign:"center",color:"#4a4e69", marginTop:15}}>Are you a student and haven't registered yet? Click here to register!</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  heading: {
    width: '100%',
    backgroundColor: '#ffb703',
    paddingVertical: 15,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 100,
  },
  form: {
    paddingTop: 60,
    paddingBttom: 30,
    width: "90%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column',
    gap: 30,
  },
  subFormView: {
    width:"100%",
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'start',
    gap: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
  },
  input: {
    width:"100%",
    padding: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#adb5bd",
    color: "black",
  },
  button: {
    textAlign: 'center',
    borderRadius: 30,
    fontSize: 15,
    fontWeight: '800',
    color: "black"
  },
  createAccount: {
    maxWidth: "80%",
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: "#4a4e69",
  },
  errorText: {
    fontSize: 14,
    color: "red",
  },
  iconContainer: {
    position: "absolute",
    bottom: Platform.OS === 'ios' ? 10 : 15,
    right: 10,
    zIndex: 10,
    elevation: 100,
  },
});

export default Login;
