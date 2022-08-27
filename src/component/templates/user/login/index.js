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

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [passworderrortext, setPasswordErrorText] = React.useState("");
    const [emailerrortext, setEmailErrorText] = React.useState("");
    const styles = useStyles();
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const ref_input2 = useRef();

    const onLogin = async () => {
        if (username != "" && password != "") {
            try {
                AsyncStorage.getItem('fcmToken',(err,item) => {
                    if (item) {
                        console.log("?FTOK", item);
                        setLoading(true);
                        fetch('https://showcasemedia.dcwebtech.com/api/login', {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                                            },
                            body: JSON.stringify({
                                username: username,
                                password: password,
                                fcm_token:item,
                            })
                        })
                            .then(response => response.json())
                            .then((responseJson) => {
                                setLoading(false);
                                console.log("api kket",responseJson.data.apikey);
                                if (responseJson.status == "Success") {
                                    setLoading(false);
                                    notify("Login Successful");
                                    navigation.navigate("Drawer");
                                    console.log(responseJson.data.id);
                                    AsyncStorage.setItem('id', JSON.stringify(responseJson.data.id));
                                    saveData(responseJson.data.apikey);
                                } else {
                                    notify(responseJson.message);
                                }
                            })
                            .catch(error => console.log(error)) //to catch the errors if any
                    }
                });
            } catch (error) {
                console.log("Error retrieving data" + error);
            }
            
        } else if (password == "") {
            setPasswordErrorText("Pasword can't be left empty.")
        } else if (username == "") {
            setEmailErrorText("Email can't be left empty.")
        }

    }

    const saveData = async (apikey) => {
        try {
            console.log(apikey);
          await AsyncStorage.setItem("apikey", apikey)
        } catch (e) {
            console.log(e.message);
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
                            style={styles.content}>
                            <Text style={styles.titleText}>Login into your</Text>
                            <Text style={[styles.titleText, { color: '#F2B518' }]}>Account</Text>
                            <TextInput
                                keyboardType="email-address"
                                placeholder='Email'
                                selectionColor='#000'
                                placeholderTextColor="gray"
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                leftIconContainerStyle={{ marginLeft: 10, marginRight: 10 }}
                                left={<TextInput.Icon name="email" size={22} color={'#9E9E9E'} />}
                                returnKeyType="next"
                                onSubmitEditing={() => { ref_input2.current.focus(); }}
                                onChangeText={(text) => {
                                    setUsername(text)
                                    setEmailErrorText("")
                                }}
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
                                ref={ref_input2}
                                selectionColor='#000'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}

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
                            <View style={[styles.checkboxContainer, { justifyContent: 'center' }]}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text style={[styles.normalText, { margin: 5 }]}>Remember me</Text>
                            </View>
                            {loading == true ? <ActivityIndicator size='large' style={styles.loading} color="#F2B518" /> : <></>}

                            <TouchableOpacity onPress={onLogin}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonTitle}>Sign In</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.forgotPasswordContainer}>
                                <Text style={styles.textButton} onPress={() => {
                                    navigation.navigate("Forgot");
                                }}>Forgot password?</Text>
                            </View>
                            <Text style={[styles.normalText, { color: "#9E9E9E", flex: 1, marginTop: 15, marginBottom: 15 }]}>By continuing, you agree to accept our Privacy Policy and Terms of Service.</Text>
                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', marginTop: 30, justifyContent: 'center' }}>
                                <Text style={{ justifyContent: 'center', color: '#9e9e9e' }}>Want to start sharing videos?</Text>
                                <Text onPress={() => {
                                    navigation.navigate("Register");
                                }} style={{ color: '#F2B518', marginLeft: 5 }}>Sign up now.</Text>
                            </View>

                            <View style={{ height: 250 }}></View>

                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>);

}

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
        errorTextStyle: {
            color: '#FF0000',
            textAlign: 'center',
            fontSize: 12,
            textAlign: 'left'
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
            color: "#9e9e9e",
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
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5FCFF88'
        },
        searchSection: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        searchIcon: {
            padding: 10,
        },
        input: {
            flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            backgroundColor: '#fff',
            color: '#424242',
        },
    });
}

export default LoginScreen;
