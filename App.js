import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import Home from './src/screens/Home';
import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import CreateAnnouncement from './src/screens/CreateAnnouncement';
import HostelsBlocks from './src/screens/institute/HostelsBlocks';
import ContactUs from './src/screens/institute/ContactUs';
import DevelopmentTeam from './src/screens/institute/DevelopmentTeam';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPasswordMailSent from './src/screens/auth/ResetPasswordMailSent';
import ResetPassword from './src/screens/auth/ResetPassword';
import OtpInput from './src/screens/auth/OtpInput';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './src/reducer';
// import Dashboard from './src/screens/student/Dashboard';
import ResetPasswordSuccess from './src/screens/auth/ResetPasswordSuccess';

// student screens import
import Dashboard from './src/screens/student/Dashboard';
import Announcements from './src/screens/student/Announcements';
import AttendanceHistory from './src/screens/student/AttendanceHistory';
import MedicalIssue from './src/screens/student/MedicalIssue';
import MessFeedback from './src/screens/student/MessFeedback';
import OutingApplication from './src/screens/student/OutingApplication';
import OutingHistory from './src/screens/student/OutingHistory';
import RegisterComplaint from './src/screens/student/RegisterComplaint';
import VacationHistory from './src/screens/student/VacationHistory';
import StudentTab from './src/screens/StudentTab';

const Stack = createNativeStackNavigator();

const store = configureStore({
  reducer : rootReducer
});

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* Home Screens  */}
          <Stack.Screen name="LaunchScreen" component={LaunchScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name="CreateAnnouncement" component={CreateAnnouncement} options={{ headerShown:false }} />
          <Stack.Screen name="HostelBlocks" component={HostelsBlocks} options={{headerShown:false}} />
          <Stack.Screen name="ContactUs" component={ContactUs} options={{headerShown:false}} />
          <Stack.Screen name="DevelopmentTeam" component={DevelopmentTeam} options={{headerShown:false}} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}} />
          <Stack.Screen name="ResetPasswordEmailSent" component={ResetPasswordMailSent} options={{headerShown:false}} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}} />
          <Stack.Screen name="OtpInput" component={OtpInput} options={{headerShown:false}} />
          {/* <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}} /> */}
          <Stack.Screen name='ResetPasswordSuccess' component={ResetPasswordSuccess} options={{headerShown:false}} />
          <Stack.Screen name="StudentTab" component={StudentTab} options={{headerShown:false}} />

          {/* Student Screens  */}
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="Announcements" component={Announcements} options={{ headerShown: false }} />
          <Stack.Screen name="AttendanceHistory" component={AttendanceHistory} options={{ headerShown:false }} />
          <Stack.Screen name="MedicalIssue" component={MedicalIssue} options={{headerShown:false}} />
          <Stack.Screen name="MessFeedback" component={MessFeedback} options={{headerShown:false}} />
          <Stack.Screen name="OutingApplication" component={OutingApplication} options={{headerShown:false}} />
          <Stack.Screen name="OutingHistory" component={OutingHistory} options={{headerShown:false}} />
          <Stack.Screen name="RegisterComplaint" component={RegisterComplaint} options={{headerShown:false}} />
          <Stack.Screen name="VacationHistory" component={VacationHistory} options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;