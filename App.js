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

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;