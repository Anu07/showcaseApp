// Import React and Component
import React, { useState, useEffect, createRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();
import { TextInput } from 'react-native-paper';
import images from '../../../assets/imagesPath';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../../../util/header';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const EditProfileScreen = ({ navigation }) => {
    const styles = useStyles();
    const data = [
        { label: 'SportsPerson', value: '1' },
        { label: 'Music Artist', value: '2' },
        { label: 'Vlogger', value: '3' },
        { label: 'Choreographer', value: '4' },
        { label: 'Pianist', value: '5' },
        { label: 'Influencer', value: '6' },
    ];
    const sportsData = [
        { label: 'Rugby', value: '1' },
        { label: 'Hockey', value: '2' },
        { label: 'Cricket', value: '3' },
        { label: 'Badminton', value: '4' },
        { label: 'Swimmer', value: '5' },
    ];
    const [value, setValue] = useState(null);
    const [userType, setUserType] = useState(null);
    const [sportsValue, setSportsValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [passworderrortext, setPasswordErrorText] = React.useState("");
    const [usernameErrorText, setUsernameErrorText] = React.useState("");


    const getProfile = async () => {
        setLoading(true);
        AsyncStorage.getItem('apikey').then((value) =>{
            console.log("ksdghj",value);
            fetch('https://showcase.ampleteckdev.com/api/getuser', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': value
                },
            })
                .then(response => response.json())
                .then((responseJson) => {
                    setLoading(false);
                    console.log(responseJson);
                    if (responseJson.status == "Success") {
                        setUsername(responseJson.data.name);
                        setEmail(responseJson.data.email);
                    } else {
                        notify(responseJson.message);
                    }
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false);
                }) //to catch the errors if any
            }

        );
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

    useEffect(() => {
        getProfile();
    }, []);



    return (
        <View style={styles.root}>
            <ImageBackground source={images.recordBg} resizeMode="cover" style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                    <ScrollView contentContainerStyle={{ height: '100%' }}>
                        <KeyboardAvoidingView
                            style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}>
                            <Header title={"Edit Profile"} />
                            <TextInput
                                keyboardType="default"
                                placeholder='Full Name'
                                placeholderTextColor="gray"
                                selectionColor='#000'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                backgroundColor="#F8F7FD"
                                returnKeyType="next"
                                value = {username}
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                onChangeText={(text) => {
                                    setUsername(text)
                                    setUsernameErrorText("")
                                }}
                                style={{ margin: 5 }}
                            />

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
                                value = {email}
                                onChangeText={(text) => {
                                    setEmail(text)
                                    setEmailErrorText("")
                                }}
                                backgroundColor="#F8F7FD"
                                returnKeyType="next"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}

                                style={{ margin: 5 }}
                            />


                            <TextInput
                                secureTextEntry
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                selectionColor='#000'
                                backgroundColor="#F8F7FD"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                placeholder='Current Password'
                                placeholderTextColor="gray"
                                style={{ margin: 5 }}
                            />

                            <TextInput
                                secureTextEntry
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                backgroundColor="#F8F7FD"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                placeholder='New Password'
                                placeholderTextColor="gray"
                                selectionColor='#000'
                                style={{ margin: 5 }}
                            />

                            <View style={{ flex: 1, margin: 10 }}>
                                <View style={styles.customContainer}>
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder='User Type'
                                        value={userType}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setUserType(item.value);
                                            setIsFocus(false);
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
                                    <View style={styles.customContainer}>
                                        <Dropdown
                                            style={[styles.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            iconStyle={styles.iconStyle}
                                            data={data}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder='Category'
                                            value={value}
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => setIsFocus(false)}
                                            onChange={item => {
                                                setValue(item.value);
                                                setIsFocus(false);
                                            }}
                                        />
                                    </View>
                                </View>
                                {loading == true ? <ActivityIndicator size='large' style={styles.loading} color="#F2B518" /> : <></>}
                                <View style={{ height: 20 }}></View>
                                <View style={{ flex: 1, marginTop: 20 }}>
                                <View style={styles.customContainer}>

                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#ededed', borderWidth: 1 }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        data={sportsData}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder='List of Sports (Optional)'
                                        value={sportsValue}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setSportsValue(item.value);
                                            setIsFocus(false);
                                        }}
                                    />
                                    </View>
                                </View>
                            </View>
                            <View style={{ height: 80, marginTop:20 }}></View>
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text style={styles.buttonTitle}>Update</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 100 }}></View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
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
            justifyContent: 'flex-start',
            alignContent: 'flex-start'
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
            alignItems: 'center',
            justifyContent: 'center'
        },
          customContainer:{
            borderWidth:2,
            borderColor:'#ededed',
            borderRadius:5,
            padding:8,
            height:50
        }
    });
}

export default EditProfileScreen;
