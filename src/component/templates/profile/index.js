// Import React and Component
import React, { useState, useEffect, createRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Image,
    ScrollView,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont();
import { TextInput } from 'react-native-paper';
import images from '../../../assets/imagesPath';
import { Dropdown } from 'react-native-element-dropdown';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import commonStyle from '../../../util/styles';
import ProfileHeader from '../../../util/ProfileHeader';

const ProfileScreen = ({ navigation }) => {
    const styles = useStyles();
    const data = [
        { label: 'Sports', value: '1' },
        { label: 'Arts', value: '2' },
    ];
    const userTypeData = [
        { label: 'Parent', value: '1' },
        { label: 'Teacher', value: '2' },
        { label: 'Guardian', value: '3' },
        { label: 'Student', value: '4' },
        { label: 'Other', value: '5' },
    ];
    const ArtsData = [
        { label: 'Art', value: '1' },
        { label: 'Music', value: '2' },
        { label: 'Acting', value: '3' },
        { label: 'Dance', value: '4' },
        { label: 'Other', value: '5' },
    ];
    const SportsData = [
        { label: 'BaseBall', value: '1' },
        { label: 'Bowling', value: '2' },
        { label: 'CheerLeading', value: '3' },
        { label: 'Cross-Country', value: '4' },
        { label: 'Field Hockey', value: '5' },
        { label: 'Football', value: '6' },
        { label: 'Golf', value: '7' },
        { label: 'Lacrosse', value: '8' },
        { label: 'Soft Ball', value: '9' },
        { label: 'Swimming', value: '10' },
        { label: 'Tennis', value: '11' },
        { label: 'Track', value: '12' },
        { label: 'Volley Ball', value: '13' },
        { label: 'Wresting', value: '14' },
        { label: 'Other', value: '15' },
    ];
    const [choiceData, setChoiceData ]= useState([]);
    const [value, setValue] = useState(null);
    const [userType, setUserType] = useState(null);
    const [sportsValue, setSportsValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [loading, setLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [placeholderText, setIsPlaceHolderText] = React.useState("List of Sports (Optional)");

    const getProfile = async () => {
        setLoading(true);
        const value = await AsyncStorage.getItem("apikey");
        console.log(value);
        fetch('https://showcasemedia.dcwebtech.com/api/getuser', {
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
                    setUserType(responseJson.data.user_type);
                    setSportsValue(responseJson.data.list_of_arts);
                    setValue(responseJson.data.category);
                    console.log("List",responseJson.data.category);
                    if(responseJson.data.category == 1){
                        setIsPlaceHolderText(SportsData[responseJson.data.list_of_arts==0?0:responseJson.data.list_of_arts-1].label);
                    }else{
                        setIsPlaceHolderText(ArtsData[responseJson.data.list_of_arts==0?0:responseJson.data.list_of_arts-1].label);
                    }
                } else {
                    notify(responseJson.message);
                }
            })
            .catch(error => {
                console.log(error)
                setLoading(false);
            }) //to catch the errors if any
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
                    <ScrollView style={{ height: '100%' }}>
                        <KeyboardAvoidingView
                            style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}>
                            <ProfileHeader title={"Profile"} />
                            <TextInput
                                keyboardType="default"
                                placeholder='Full Name'
                                placeholderTextColor="gray"
                                editable={false}
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
                                value={username}
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
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
                                editable={false}
                                value={email}
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
                                editable={false}
                                value="*******"
                                style={{ margin: 5 }}

                            />


                            <View style={{ flex: 1, margin: 10 }}>
                                <View style={styles.customContainer}>
                                    <Dropdown
                                        style={[commonStyle.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        data={userTypeData}
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
                                <View style={{ flex: 1, marginTop: 20 }}>
                                    <View style={styles.customContainer}>
                                        <Dropdown
                                            style={[commonStyle.dropdown, isFocus && { borderColor: '#FFFFFF' }]}
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
                                                if(item.label == "Arts"){
                                                    setChoiceData(ArtsData);
                                                    setIsPlaceHolderText("List of Arts (Optional)");
                                                }else if(item.label == "Sports"){
                                                    setChoiceData(SportsData);
                                                    setIsPlaceHolderText("List of Sports (Optional)");
                                                }
                                            }}
                                        />
                                    </View>
                                </View>
                                {loading == true ? <ActivityIndicator size='large' style={styles.loading} color="#F2B518" /> : <></>}
                                <View style={{ flex: 1 }}>
                                    <View style={[styles.customContainer, { marginTop: 20 }]}>
                                        <Dropdown
                                            style={[commonStyle.dropdown, isFocus && { borderColor: '#ededed', borderWidth: 1 }]}
                                            placeholderStyle={styles.placeholderStyle}
                                            selectedTextStyle={styles.selectedTextStyle}
                                            iconStyle={styles.iconStyle}
                                            data={choiceData}
                                            maxHeight={300}
                                            labelField="label"
                                            valueField="value"
                                            placeholder={placeholderText}
                                            value={sportsValue}
                                            onFocus={() => setIsFocus(true)}
                                            onBlur={() => setIsFocus(false)}
                                            onChange={item => {
                                                console.log("Label", item.label)
                                                setSportsValue(item.value);
                                                setIsFocus(false);
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={{ height: 230 }}></View>
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
            width: 120,
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
        customContainer: {
            borderWidth: 2,
            borderColor: '#ededed',
            borderRadius: 5,
            padding: 8,
            height: 50
        }
    });
}

export default ProfileScreen;
