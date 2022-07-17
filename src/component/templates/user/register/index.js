// Import React and Component
import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ToastAndroid,
    Platform,
    Alert,
    Keyboard,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import { ActivityIndicator } from 'react-native-paper';
Icon.loadFont();
import { TextInput } from 'react-native-paper';
import images from '../../../../assets/imagesPath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../../../util/iosHeader';
import Snackbar from 'react-native-snackbar';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [passworderrortext, setPasswordErrorText] = React.useState("");
    const [emailerrortext, setEmailErrorText] = React.useState("");
    const [usernamerrortext, setUsernameErrorText] = React.useState("");
    const styles = useStyles();
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const onSignUp = async () => {
        if (username != "" && password != "" && email != "") {
            setLoading(true);
            fetch('https://showcase.ampleteckdev.com/api/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: username,
                    password: password,
                    email: email,
                    pushnotification: "1"

                })
            })
                .then(response => response.json())
                .then((responseJson) => {
                    setLoading(false);
                    if (responseJson.status == "Success") {
                        setLoading(false);
                        console.log(responseJson.id);
                        AsyncStorage.setItem('id', responseJson.id);
                        notify(responseJson.message);
                        navigation.navigate("Onboarding");
                    } else {
                        notify(responseJson.message);
                    }
                })
                .catch(error => console.log(error)) //to catch the errors if any
        }
        else if (username == "") {
            setUsernameErrorText("Username can't be left empty.")
        } else if (email == "") {
            setEmailErrorText("Email can't be left empty.");
        } else {
            setPasswordErrorText("Pasword can't be left empty.")
        }
    }


    const notify = (message) => {
        if (Platform.OS != 'android') {
            Snackbar.show({
                text: message,
                duration: Snackbar.LENGTH_SHORT,
            });
        } else {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        }
    }


    return (
        <View style={[styles.root]}>
            <ImageBackground source={images.loginBg} resizeMode="cover" style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView contentContainerStyle={{ height: '100%' }}>
                        {Platform.OS === 'ios' ? <Header /> : <></>}
                        <KeyboardAvoidingView
                            style={styles.content} >
                            <Text style={styles.titleText}>Create your</Text>
                            <Text style={[styles.titleText, { color: '#F2B518' }]}>Account</Text>

                            <TextInput
                                keyboardType="default"
                                placeholder='Full name'
                                placeholderTextColor="gray"
                                selectionColor='black'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                onChangeText={(text) => {
                                    setUsername(text)
                                    setUsernameErrorText("")
                                }}
                                autoFocus={true}
                                style={{ marginBottom: 10, borderWidth: 0 }}
                                left={<TextInput.Icon name="account" size={25} color={'#9E9E9E'} />}
                                returnKeyType="next"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                            />
                            {usernamerrortext != '' ? (
                                <Text style={styles.errorTextStyle}>
                                    {usernamerrortext}
                                </Text>
                            ) : <></>}
                            <TextInput
                                keyboardType="email-address"
                                placeholder='Email'
                                placeholderTextColor="gray"
                                selectionColor='black'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                onChangeText={(text) => {
                                    setEmail(text)
                                    setEmailErrorText("")
                                }}
                                left={<TextInput.Icon name="email" size={22} color={'#9E9E9E'} style={{ margin: 10 }} />}
                                returnKeyType="next"
                                style={{ marginBottom: 10, borderWidth: 0 }}
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                            />
                            {emailerrortext != '' ? (
                                <Text style={styles.errorTextStyle}>
                                    {emailerrortext}
                                </Text>
                            ) : <></>}

                            <TextInput
                                secureTextEntry={!showPassword}
                                selectionColor='#000'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                placeholder='Password'
                                style={{ marginBottom: 10, borderWidth: 0 }}
                                onChangeText={(text) => {
                                    setPassword(text)
                                    setPasswordErrorText("")
                                }}
                                placeholderTextColor="gray"
                                left={<TextInput.Icon name="lock" size={25} color={'#9E9E9E'} />}
                                right={showPassword == true ? <TextInput.Icon name="eye" size={25} color={'#9E9E9E'} onPress={() => {
                                    Keyboard.dismiss()
                                    setShowPassword(false)
                                }} /> : <TextInput.Icon name="eye-off" size={25} color={'#9E9E9E'} onPress={() => {
                                    Keyboard.dismiss()
                                    setShowPassword(true)
                                }} />}
                                />
                            {passworderrortext != '' ? (
                                <Text style={styles.errorTextStyle}>
                                    {passworderrortext}
                                </Text>
                            ) : <></>}


                            <View style={[styles.checkboxContainer, { flexGrow: 1, alignSelf: 'flex-end' }]}>
                                <View style={{ flexDirection: 'row', flex: 1, marginLeft: 10 }}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBox}
                                        style={{
                                            color: '#000000', height: 22,
                                            width: 22,
                                        }}
                                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    />
                                    <Text style={{ margin: 5, color: '#000000' }}>Sign Up for push notifications</Text>
                                </View>
                                {/* <TextInput.Icon name="information-outline" size={22} color={'#000000'} /> */}
                            </View>

                            {loading == true ? <ActivityIndicator size='large' color="#F2B518" /> : <></>}

                            <TouchableOpacity onPress={onSignUp}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonTitle} >Sign Up</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={[styles.normalText, { color: "#9E9E9E", marginTop: 15, marginBottom: 15 }]}>By continuing, you agree to accept our Privacy Policy and Terms of Service.</Text>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 20 }}>
                                <Text style={{ justifyContent: 'center', color: '#9e9e9e' }}>Already have an account?</Text>
                                <TouchableOpacity onPress={
                                    console.log("Tesr ")
                                }>
                                    <Text style={{ color: '#F2B518', marginLeft: 10 }} onPress={() => {
                                    navigation.navigate("Login");
                                }}>Sign In</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={{ height: 210 }}></View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View >
    );
};

function useStyles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#F2B518',
            borderRadius: 8,
            height: 48,
            justifyContent: 'center',
        },
        errorTextStyle: {
            color: '#FF0000',
            textAlign: 'center',
            fontSize: 12,
            textAlign: 'left'
        },
        buttonTitle: {
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 22,
        },
        titleText: {
            textAlign: 'center',
            color: '#000000',
            fontFamily: "Urbanist-Bold",
            fontWeight: "bold",
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: 42,
        },
        subTitleText: {
            color: "#F2B518",
            textAlign: 'center',
            fontFamily: "Urbanist-Bold",
            fontWeight: "bold",
            fontSize: 20,
            margin: 15
        },
        checkboxContainer: {
            flexDirection: "row",
            width: '100%',
            margin: 10,
        },
        checkbox: {
            alignSelf: "center",
            color: '#F2B518'
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 32,
            marginTop: 100
        },
        forgotPasswordContainer: {
            alignItems: 'center',
            margin: 5,
            fontFamily: "Urbanist-Regular",
        },
        form: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            flexDirection: 'row',
            marginBottom: 10,
            height: 48,
            paddingHorizontal: 16,
        },
        label: {
            color: '#9E9E9E',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            width: 80,
        },
        normalText: {
            color: "#000000",
            textAlign: 'center',
            fontFamily: "Urbanist-Regular",
            fontWeight: "normal",
            justifyContent: 'center',
            fontSize: 15,
        },
        root: {
            backgroundColor: '#000000',
            flex: 1,
            justifyContent: 'center',
        },
        safeAreaView: {
            flex: 1,
            alignItems: 'center'
        },
        subtitle: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 22,
        },
        textButton: {
            color: '#F2B518',
            fontSize: 18,
            fontWeight: '400',
            fontFamily: "Urbanist-Bold",
            marginBottom: 10,
            marginTop: 10,
            lineHeight: 20,
        },
        textInput: {
            color: '#9E9E9E',
            backgroundColor: '#F8F7FD',
            height: 35,
            width: "100%",
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
        },
        title: {
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: '700',
            lineHeight: 34,
        },
    });
}

export default RegisterScreen;
