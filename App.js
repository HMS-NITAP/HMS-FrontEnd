import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';

import Login from './src/screens/auth/Login';
import Signup from './src/screens/auth/Signup';
import LogoutModal from './src/components/common/LogoutModal';
import CreateAnnouncement from './src/screens/official/CreateAnnouncement';
import HostelsBlocks from './src/screens/institute/HostelsBlocks';
import ContactUs from './src/screens/institute/ContactUs';
import DevelopmentTeam from './src/screens/institute/DevelopmentTeam';
import ForgotPassword from './src/screens/auth/ForgotPassword';
import ResetPasswordMailSent from './src/screens/auth/ResetPasswordMailSent';
import ResetPassword from './src/screens/auth/ResetPassword';
import ResetPasswordSuccess from './src/screens/auth/ResetPasswordSuccess';
import StudentDashboard from './src/screens/student/StudentDashboard';
import AttendanceHistory from './src/screens/student/AttendanceHistory';
import OutingApplication from './src/screens/student/OutingApplication';
import RegisterComplaint from './src/screens/student/RegisterComplaint';
import OtpInput from './src/screens/auth/OtpInput';
import Gallery from './src/screens/institute/Gallary';
// import LogoutModal from './src/screens/common/LogoutModal';
import Announcements from './src/screens/common/Announcements';
import OutingRequest from './src/screens/official/OutingRequest';
import ApplicationHistory from './src/screens/student/ApplicationHistory';
import RegisterComplaints from './src/screens/student/RegisteredComplaints';
import HostelComplaints from './src/screens/official/HostelComplaints';
import EditProfile from './src/screens/student/EditProfile';
import TakeAttendance from './src/screens/official/TakeAttendance';
import { setToken } from './src/reducer/slices/AuthSlice';
import { setUser } from './src/reducer/slices/ProfileSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ManageHostels from './src/screens/admin/ManageHostels';
import MessMenu from './src/screens/common/MessMenu';
import DetailedMessMenu from './src/screens/common/DetailedMessMenu';
import ViewMessFeedBack from './src/screens/common/ViewMessFeedBack';
import ManageOfficialAccounts from './src/screens/admin/ManageOfficialAccounts';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CreateHostelBlock from './src/screens/admin/CreateHostelBlock';
import CreateOfficialAccount from './src/screens/admin/CreateOfficialAccount';
import StudentRegistration from './src/screens/auth/StudentRegistration';
import StudentRegistrationApplications from './src/screens/admin/StudentRegistrationApplications';
import OfficialDashboard from './src/screens/official/OfficialDashboard';
import PieChartTesting from './src/screens/common/PieChartTesting';
import GiveMessFeedback from './src/screens/student/GiveMessFeedback';
import GenerateMessReceipt from './src/screens/student/GenerateMessReceipt';

const Drawer = createDrawerNavigator();

const App = () => {

  const {token} = useSelector((state) => state.Auth);
  const {user} = useSelector((state) => state.Profile);
  const dispatch = useDispatch();

  const fetchAsyncStorageData = async () => {
    const localToken = await AsyncStorage.getItem('token');
    const localUser = await AsyncStorage.getItem('user');
    if (localToken) {
      const parsedToken = JSON.parse(localToken);
      dispatch(setToken(parsedToken));
    }
    if (localUser) {
      const parsedUser = JSON.parse(localUser);
      dispatch(setUser(parsedUser));
    }
  };

  useEffect(() => {
    fetchAsyncStorageData();
    setTimeout(() => {
      SplashScreen.hide();
    },100);
  }, []);

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);


  return (
    <>
      {
        !token && (
          <NavigationContainer independent={true} initialRouteName={"HostelsBlocks"}>
            <Drawer.Navigator>
              {/* Visible Home Screens */}
              {/* <Drawer.Screen name="Pie Chart" component={PieChartTesting} options={{drawerLabel:"Login", drawerIcon: ({ size }) => (<Icon name='Pie Chart' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} /> */}
              <Drawer.Screen name="Login" component={Login} options={{drawerLabel:"Login", drawerIcon: ({ size }) => (<Icon name='right-to-bracket' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Student Registration" component={StudentRegistration} options={{drawerLabel:"Student Registration", drawerIcon: ({ size }) => (<Icon name='address-card' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Announcements", drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Hostel Blocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks", drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Mess Menu" component={MessMenu} options={{drawerLabel:"Mess Menu", drawerIcon: ({ size }) => (<Icon name='bowl-food' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Contact Us" component={ContactUs} options={{drawerLabel:"Contact Us", drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="DevelopmentTeam" component={DevelopmentTeam} options={{drawerLabel:"Development Team", drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Gallary" component={Gallery} options={{drawerLabel:"Gallary", drawerIcon: ({ size }) => (<Icon name='image' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="View Mess Feedback" component={ViewMessFeedBack} options={{drawerLabel:"View Mess Feedback", drawerIcon: ({ size }) => (<Icon name='star' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              {/* <Drawer.Screen name="Mess Feedback" component={MessFeedback} options={{drawerLabel:"Mess Feedback", drawerIcon: ({ size }) => (<Icon name='star' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} /> */}

              {/* Non Visible Home Screens */}
              <Drawer.Screen name="ResetPasswordEmailSent" component={ResetPasswordMailSent} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="ResetPassword" component={ResetPassword} options={{drawerItemStyle:{display:'none'}}} />
              {/* <Drawer.Screen name="OtpInput" component={OtpInput} options={{drawerItemStyle:{display:'none'}}} /> */}
              <Drawer.Screen name='ResetPasswordSuccess' component={ResetPasswordSuccess} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="ForgotPassword" component={ForgotPassword} options={{drawerItemStyle:{display:'none'}}} />
              <Drawer.Screen name="Detailed Mess Menu" component={DetailedMessMenu} options={{drawerItemStyle:{display:'none'}}} />
            </Drawer.Navigator>
          </NavigationContainer>    
        )
      }
      {
        token && user && user.accountType==='ADMIN' && (
          <NavigationContainer independent={true} initialRouteName='Manage Official Accounts'>
            <Drawer.Navigator>
                <Drawer.Screen name="Registation Applications" component={StudentRegistrationApplications} options={{drawerLabel:"Registation Applications", headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='address-card' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Manage Official Accounts" component={ManageOfficialAccounts} options={{drawerLabel:"Manage Official Accounts", headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='users-rays' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Create Official Accounts" component={CreateOfficialAccount} options={{drawerItemStyle:{display:'none'},headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>)}} />
                <Drawer.Screen name="Manage Hostel Blocks" component={ManageHostels} options={{drawerLabel:"Manage Hostel Blocks",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='building-shield' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Create Hostel Block" component={CreateHostelBlock} options={{drawerItemStyle:{display:'none'},headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>)}} />
                <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Announcements",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Hostel Blocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Mess Menu" component={MessMenu} options={{drawerLabel:"Mess Menu",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bowl-food' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Contact Us" component={ContactUs} options={{drawerLabel:"Contact Us",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Development Team" component={DevelopmentTeam} options={{drawerLabel:"Development Team",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Gallary" component={Gallery} options={{drawerLabel:"Gallary",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='image' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="View Mess Feedback" component={ViewMessFeedBack} options={{drawerLabel:"View Mess Feedback",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='star' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Detailed Mess Menu" component={DetailedMessMenu} options={{drawerItemStyle:{display:'none', headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>)}}} />
            </Drawer.Navigator>
            <LogoutModal logoutModalVisible={logoutModalVisible} setLogoutModalVisible={setLogoutModalVisible} animationType={"fade"} transparent={true} />
          </NavigationContainer>
        )
      }
      {
        token && user && user.accountType==='STUDENT' && (
          <NavigationContainer independent={true} initialRouteName='Dashboard'>
            <Drawer.Navigator>
                <Drawer.Screen name="Generate Mess Receipt" component={GenerateMessReceipt} options={{drawerLabel:"Generate Mess Receipt",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='id-badge' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Dashboard" component={StudentDashboard} options={{drawerLabel:"Dashboard",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='id-badge' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Show Announcements" component={Announcements} options={{drawerLabel:"Show Announcements",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />  
                <Drawer.Screen name="Attendance History" component={AttendanceHistory} options={{drawerLabel:"Attendence History",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='table-list' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Outing Application" component={OutingApplication} options={{drawerLabel:"Outing Application",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='wpforms' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Application History" component={ApplicationHistory} options={{drawerLabel:"Application History",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='clock-rotate-left' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Register Complaint" component={RegisterComplaint} options={{drawerLabel:"Register Complaint",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='book-bookmark' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Complaints Registered" component={RegisterComplaints} options={{drawerLabel:"Complaints Registered",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='person-circle-exclamation' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Mess Menu" component={MessMenu} options={{drawerLabel:"Mess Menu",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bowl-food' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Give Mess Feedback" component={GiveMessFeedback} options={{drawerLabel:"Give Mess Feedback",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='comment-dots' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="View Mess Feedback" component={ViewMessFeedBack} options={{drawerLabel:"View Mess Feedback",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='star' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Gallary" component={Gallery} options={{drawerLabel:"Gallary",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='image' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Hostel Blocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Contact Us" component={ContactUs} options={{drawerLabel:"Contact Us",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Development Team" component={DevelopmentTeam} options={{drawerLabel:"Development Team",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
                <Drawer.Screen name="Detailed Mess Menu" component={DetailedMessMenu} options={{drawerItemStyle:{display:'none'},headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>)}} />
            </Drawer.Navigator>
            <LogoutModal logoutModalVisible={logoutModalVisible} setLogoutModalVisible={setLogoutModalVisible} animationType={"fade"} transparent={true} />
          </NavigationContainer>
        )
      }
      {
        token && user && user.accountType==="OFFICIAL" && (
          <NavigationContainer independent={true} initialRouteName='CreateAnnouncement'>
            <Drawer.Navigator>
              <Drawer.Screen name="Dashboard" component={OfficialDashboard} options={{drawerLabel:"Dashboard",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='id-badge' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Create Announcement" component={CreateAnnouncement} options={{drawerLabel:"Create Announcement" ,headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bullhorn' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />)}} />
              <Drawer.Screen name="Outing Request" component={OutingRequest} options={{drawerLabel:"Outing Request" ,headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='wpforms' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />)}} />
              <Drawer.Screen name="Take Attendance" component={TakeAttendance} options={{drawerLabel:"Take Attendence" ,headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='people-roof' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />)}} />
              <Drawer.Screen name="Hostel Complaints" component={HostelComplaints} options={{drawerLabel:"Hostel Complaints" ,headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='circle-exclamation' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />)}} />
              <Drawer.Screen name="Announcements" component={Announcements} options={{drawerLabel:"Show Announcements" ,headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='scroll' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }}  />
              <Drawer.Screen name="Mess Menu" component={MessMenu} options={{drawerLabel:"Mess Menu",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='bowl-food' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="View Mess Feedback" component={ViewMessFeedBack} options={{drawerLabel:"View Mess Feedback",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='star' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Hostel Blocks" component={HostelsBlocks} options={{drawerLabel:"Hostel Blocks",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='building-user' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Contact Us" component={ContactUs} options={{drawerLabel:"Contact Us",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='address-book' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Development Team" component={DevelopmentTeam} options={{drawerLabel:"Development Team",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='users-line' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Gallary" component={Gallery} options={{drawerLabel:"Gallary",headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>), drawerIcon: ({ size }) => (<Icon name='image' size={size} style={{ width: 30, textAlign: 'center' }} color='gray' />) }} />
              <Drawer.Screen name="Detailed Mess Menu" component={DetailedMessMenu} options={{drawerItemStyle:{display:'none'},headerRight: () => (<TouchableOpacity onPress={() => setLogoutModalVisible(true)} style={{ marginRight: 15 }}><Icon name='right-from-bracket' size={25} color='gray' /></TouchableOpacity>)}} />
            </Drawer.Navigator> 
            <LogoutModal logoutModalVisible={logoutModalVisible} setLogoutModalVisible={setLogoutModalVisible} animationType={"fade"} transparent={true} />
          </NavigationContainer>
        )
      }
    </>
  );
};

export default App;
