import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../component/templates/user/login';
import WelcomeScreen from '../component/templates/user/welcome';
import ForgotPassword from '../component/templates/user/forgot';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;