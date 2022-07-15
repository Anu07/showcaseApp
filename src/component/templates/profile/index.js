// Import React and Component
import React, { useState, createRef } from 'react';
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
import AntDesign from 'react-native-vector-icons/AntDesign';

Icon.loadFont();
import { TextInput } from 'react-native-paper';
import images from '../../../assets/imagesPath';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../../../util/header';


const ProfileScreen = ({ navigation }) => {
    const [text, setText] = React.useState("");
    const [isSelected, setSelected] = React.useState("false");
    const styles = useStyles();
    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const data = [
        { label: 'SportsPerson', value: '1' },
        { label: 'Music Artist', value: '2' },
        { label: 'Vlogger', value: '3' },
        { label: 'Choreographer', value: '4' },
        { label: 'Pianist', value: '5' },
        { label: 'Influencer', value: '6' },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    return (
        <View style={styles.root}>
            <ImageBackground source={images.recordBg} resizeMode="cover" style={styles.container}>
                <SafeAreaView style={styles.safeAreaView}>
                <Header title={"Edit Profile"} />
                    <ScrollView contentContainerStyle={{ height: '100%', marginTop:50}}>
                        <KeyboardAvoidingView
                            style={{flex:1,paddingHorizontal:10, paddingVertical:10}}>
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
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}

                                style={{ marginBottom: 10 }}
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
                                backgroundColor="#F8F7FD"
                                returnKeyType="next"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}

                                style={{ marginBottom: 10 }}
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
                                style={{ marginBottom: 10 }}
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
                                style={{ marginBottom: 10 }}
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
                                        value={value}
                                        onFocus={() => setIsFocus(true)}
                                        onBlur={() => setIsFocus(false)}
                                        onChange={item => {
                                            setValue(item.value);
                                            setIsFocus(false);
                                        }}
                                    />
                                </View>
                                <View style={{ flex: 1 , marginTop:20}}>
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
                                <View style={{ flex: 1 , marginTop:30}}>
                                    <Dropdown
                                        style={[styles.dropdown, isFocus && { borderColor: '#ededed', borderWidth:1 }]}
                                        placeholderStyle={styles.placeholderStyle}
                                        selectedTextStyle={styles.selectedTextStyle}
                                        iconStyle={styles.iconStyle}
                                        data={data}
                                        maxHeight={300}
                                        labelField="label"
                                        valueField="value"
                                        placeholder='List of Sports (Optional)'
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
                            <View style={{height:50}}></View>
                            <TouchableOpacity>
                                <View style={styles.button}>
                                    <Text style={styles.buttonTitle}>Update</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{height:200}}></View>
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
            justifyContent:'flex-start',
            alignContent:'flex-start'
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

export default ProfileScreen;
