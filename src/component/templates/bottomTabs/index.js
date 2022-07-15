import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notifications from '../user/blank';
import CameraScreen from '../record/Camera';
import BlankScreen from '../user/blank';
import ProfileScreen from '../profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                } else if (route.name === 'Watch Videos') {
                    iconName = focused ? 'play' : 'play';
                } else if (route.name === 'Upload') {
                    iconName = focused ? 'cloud-upload-outline' : 'cloud-upload-outline';
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#4448AE',
            tabBarInactiveTintColor: '#9E9E9E',
        })}>
            <Tab.Screen name="Home" component={HomeScreen} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    if (route.state && route.state.routeNames.length > 0) {
                        navigation.navigate('Home')
                    }
                },
            })} />
            <Tab.Screen name="Watch Videos" component={BlankScreen} listeners={({ navigation, route }) => ({
                tabPress: e => {
                    if (route.state && route.state.routeNames.length > 0) {
                        navigation.navigate('Blank')
                    }
                },
            })}  />
            <Tab.Screen name="Upload" component={CameraScreen}  listeners={({ navigation, route }) => ({
                tabPress: e => {
                    if (route.state && route.state.routeNames.length > 0) {
                        navigation.navigate('Camera')
                    }
                },
            })}/>
            <Tab.Screen name="Profile" component={ProfileScreen}  listeners={({ navigation, route }) => ({
                tabPress: e => {
                    if (route.state && route.state.routeNames.length > 0) {
                        navigation.navigate('ProfileScreen')
                    }
                },
            })}/>
        </Tab.Navigator>
    );
}

export default function BottomTabs() {
    return (
        <NavigationContainer independent={true}>
            <MyTabs />
        </NavigationContainer>
    );
}