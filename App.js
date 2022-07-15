import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Splash from './src/component/templates/splash';
import WelcomeScreen from './src/component/templates/user/welcome';
import LoginScreen from './src/component/templates/user/login';
import OnboardingScreen from './src/component/templates/onboarding';
import HomeScreen from './src/component/templates/home';
import RegisterScreen from './src/component/templates/user/register';
import BottomTabs from './src/component/templates/bottomTabs';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Notifications from './src/component/templates/notifications';
import BlankScreen from './src/component/templates/user/blank';
import RecordScreen from './src/component/templates/record';
import CameraScreen from './src/component/templates/record/Camera';
import ProfileScreen from './src/component/templates/profile';
import SettingsScreen from './src/component/templates/setting';
import DrawerScreen from './src/component/templates/navigation/Drawer';
import ForgotPassword from './src/component/templates/user/forgot';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
        />
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Drawer" component={DrawerScreen} />
          <Stack.Screen name="Blank" component={BlankScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Record" component={RecordScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Forgot" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}