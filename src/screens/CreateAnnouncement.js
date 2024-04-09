import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import MainButton from '../components/common/MainButton'
// import DocumentPicker from 'react-native-document-picker';
// import RNFS from 'react-native-fs';
import { Button } from 'react-native-paper';

const CreateAnnouncement = () => {

  // const [selectedFile, setSelectedFile] = useState(null);
  // const pickDocument = async () => {
  //   try {
  //     const result = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     // Check if the selected file is within the 5 MB limit
  //     const fileSize = await RNFS.stat(result.uri);
  //     const maxSize = 5 * 1024 * 1024; // 5 MB in bytes
  //     if (fileSize.size > maxSize) {
  //       Alert.alert('File Size Limit Exceeded', 'Please select a file up to 5 MB.');
  //     } else {
  //       setSelectedFile(result);
  //     }
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err)) {
  //       // User cancelled the document picker
  //     } else {
  //       throw err;
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
        <View style={styles.heading}><Text style={{fontSize:24,fontWeight:'700',color:'#000000'}}>Create New Announcement</Text></View>
        <View style={styles.form}>
        <View style={styles.subFormView}>
          <Text style={styles.label} >About<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          <TextInput editable multiline numberOfLines={4} style={styles.input} />
        </View>
        <View style={styles.subFormView}>
          <Text style={styles.label} >Upload Related Documents<Text style={{fontSize:10,color:'red'}}>*</Text> :</Text>
          {/* <Button title={"Select Document"} onPress={pickDocument} />
          <Button title="Upload File" onPress={uploadFile} /> */}
        </View>
        <View style={styles.subFormView}>
          <MainButton text={"Create Announcement"} onPress={() => setText("Hello")} />
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