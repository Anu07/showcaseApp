import React, { Component } from 'react';
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
import { ActivityIndicator } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import images from '../../../../assets/imagesPath';
import Header from '../../../../util/header';
import Snackbar from 'react-native-snackbar';

const ForgotPassword = ({navigation}) => {
    const [username, setUsername] = React.useState("");
    const [emailerrortext, setEmailErrorText] = React.useState("");
    const styles = useStyles();
    const [loading, setLoading] = React.useState(false);

    /**
     * Validate email
     */
    validateEmail = function (username) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(username);
    };


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

    /**
     * Button submit pressed
     */
    function btnSubmitPress() {
        if (emailerrortext.length != 0) {
            console.log("Please enter email");
            notify("Please enter email");
        } else if (this.validateEmail(username) == false) {
            ToastAndroid.show("Please enter email", ToastAndroid.SHORT)
            notify("Please enter email");
        } else {
            callForgotPassword();
        }
    }

    /**
     * Call your webservice for forgot pasword
     */
    function callForgotPassword() {
        setLoading(true);
        fetch('https://showcase.ampleteckdev.com/api/forgot', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: username,
            })
        })
            .then(response => response.json())
            .then((responseJson) => {
                setLoading(false);
                console.log(responseJson);
                if (responseJson.status == "Success") {
                    setLoading(false);
                    notify(responseJson.message);
                    navigation.navigate("Login");
                } else {
                    notify(responseJson.message);
                }
            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            }) //to catch the errors if any
    }

    return (
        <View style={[styles.root]}>
            <ImageBackground source={images.loginBg} resizeMode="cover" style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView contentContainerStyle={{ height: '40%' }}>
                        {Platform.OS === 'ios' ? <Header title={"Forgot Password"} /> : <></>}
                        <KeyboardAvoidingView
                            style={[styles.content, { marginTop: 50, paddingHorizontal: 20 }]}>
                            <Text style={[styles.titleText, { paddingHorizontal: 20, paddingVertical: 20 }]}>Forgot Password?</Text>
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
                            <TouchableOpacity onPress={btnSubmitPress}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonTitle}>Submit</Text>
                                </View>
                            </TouchableOpacity>
                            {loading == true ? <ActivityIndicator size='large' color="#F2B518" /> : <></>}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
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
    });
}
export default ForgotPassword;