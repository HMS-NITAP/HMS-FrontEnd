import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useSelector } from 'react-redux';

import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import CreateAnnouncement from './src/screens/official/CreateAnnouncement';
import HostelsBlocks from './src/screens/institute/HostelsBlocks';
import ContactUs from './src/screens/institute/ContactUs';
import DevelopmentTeam from './src/screens/institute/DevelopmentTeam';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPasswordMailSent from './src/screens/auth/ResetPasswordMailSent';
import ResetPassword from './src/screens/auth/ResetPassword';
import ResetPasswordSuccess from './src/screens/auth/ResetPasswordSuccess';
import StudentDashboard from './src/screens/student/StudentDashboard';
// import Announcements from './src/screens/student/Announcements';
import AttendanceHistory from './src/screens/student/AttendanceHistory';
import MedicalIssue from './src/screens/student/MedicalIssue';
import MessFeedback from './src/screens/student/MessFeedback';
import OutingApplication from './src/screens/student/OutingApplication';
import OutingHistory from './src/screens/student/OutingHistory';
import RegisterComplaint from './src/screens/student/RegisterComplaint';
import VacationHistory from './src/screens/student/VacationHistory';
import OtpInput from './src/screens/auth/OtpInput';
import Gallery from './src/screens/institute/Gallary';
import LogoutModal from './src/screens/common/LogoutModal';
import Announcements from './src/screens/common/Announcements';
import OutingRequest from './src/screens/official/OutingRequest';
import ApplicationHistory from './src/screens/student/ApplicationHistory';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {

  const {token} = useSelector((state) => state.Auth);
  const {user} = useSelector((state) => state.Profile);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {
        !token && (
          <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Login' screenOptions={{ drawerActiveTintColor: "#80ed99" }}>
              {/* Visible Home Screens */}
              <Drawer.Screen name="Login" component={Login} options={{drawerLabel:"Login", drawerIcon: ({ size }) => (<Icon name='right-to-bracket' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="SignUp" component={Signup} options={{drawerLabel:"Sign Up", drawerIcon: ({ size }) => (<Icon name='user-plus' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="HostelBlocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks", drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="ContactUs" component={ContactUs} options={{drawerLabel:"Contact Us", drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="DevelopmentTeam" component={DevelopmentTeam} options={{drawerLabel:"Development Team", drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Gallary" component={Gallery} options={{drawerLabel:"Gallary", drawerIcon: ({ size }) => (<Icon name='image' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Show Announcements", drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }}  />

              {/* Non Visible Home Screens */}
              <Drawer.Screen name="ResetPasswordEmailSent" component={ResetPasswordMailSent} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="ResetPassword" component={ResetPassword} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="OtpInput" component={OtpInput} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name='ResetPasswordSuccess' component={ResetPasswordSuccess} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{drawerItemStyle:{display:'none'}}} />
            </Drawer.Navigator>
          </NavigationContainer>    
        )
      }
      {
        token && user && user.accountType==='STUDENT' && (
          <NavigationContainer independent={true} initialRouteName='StudentDashboard'>
            <Drawer.Navigator>
                <Drawer.Screen name="StudentDashboard" component={StudentDashboard} options={{drawerLabel:"Dashboard", drawerIcon: ({ size }) => (<Icon name='id-badge' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Show Announcements", drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }}  />
                <Drawer.Screen name="AttendanceHistory" component={AttendanceHistory} options={{drawerLabel:"Attendence History", drawerIcon: ({ size }) => (<Icon name='table-list' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="MedicalIssue" component={MedicalIssue} options={{drawerLabel:"Medical Issue", drawerIcon: ({ size }) => (<Icon name='file-medical' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="MessFeedback" component={MessFeedback} options={{drawerLabel:"Mess Feedback", drawerIcon: ({ size }) => (<Icon name='bowl-food' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="OutingApplication" component={OutingApplication} options={{drawerLabel:"Outing Application", drawerIcon: ({ size }) => (<Icon name='wpforms' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="ApplicationHistory" component={ApplicationHistory} options={{drawerLabel:"Application History", drawerIcon: ({ size }) => (<Icon name='clock-rotate-left' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="RegisterComplaint" component={RegisterComplaint} options={{drawerLabel:"Register Complaint", drawerIcon: ({ size }) => (<Icon name='right-to-bracket' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="VacationHistory" component={VacationHistory} options={{drawerLabel:"Vacation History", drawerIcon: ({ size }) => (<Icon name='timeline' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="HostelBlocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks", drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="ContactUs" component={ContactUs} options={{drawerLabel:"Contact Us", drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="DevelopmentTeam" component={DevelopmentTeam} options={{drawerLabel:"Development Team", drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Logout" component={LogoutModal} options={{drawerLabel:"Log Out", drawerIcon: ({ size }) => (<Icon name='circle-left' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
            </Drawer.Navigator>
          </NavigationContainer>
        )
      }
      {
        token && user && user.accountType==="OFFICIAL" && (
          <NavigationContainer independent={true} initialRouteName='CreateAnnouncement'>
            <Drawer.Navigator>
              <Drawer.Screen name="CreateAnnouncement" component={CreateAnnouncement} />
              <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Show Announcements", drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }}  />
              <Drawer.Screen name="HostelBlocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks", drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="ContactUs" component={ContactUs} options={{drawerLabel:"Contact Us", drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="DevelopmentTeam" component={DevelopmentTeam} options={{drawerLabel:"Development Team", drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Logout" component={LogoutModal} options={{drawerLabel:"Log Out", drawerIcon: ({ size }) => (<Icon name='circle-left' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="OutingRequest" component={OutingRequest} options={{drawerLabel:"Outing Request", drawerIcon: ({ size }) => (<Icon name='circle-left' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />)}} />
            </Drawer.Navigator> 
          </NavigationContainer>
        )
      }
    </>
  );
};

export default App;
