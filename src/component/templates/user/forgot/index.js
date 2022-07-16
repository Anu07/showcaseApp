import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';

import styles from '../../../../util/styles';
import images from '../../../../assets/imagesPath';

class ForgotPassword extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        titleText:"Forgot Password",
        submitText:"Send",
        placeHolderText:"Email Address"
    };

    constructor(props) {
        super(props);
        this.state = {
           email:""
        };
    }

    /**
     * Validate email
     */
    validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * Button submit pressed
     */
    btnSubmitPress() {
        if (this.state.email.trim().length == 0) {
            console.log("Please enter email");
          }else if(this.validateEmail(this.state.email) == false){
            console.log("Please enter valid email");
          }else {
            this.callForgotPassword();
          }
    }

    /**
     * Call your webservice for forgot pasword
     */
    callForgotPassword(){
     
    }

    /**
     * Button close pressed
     */
    btnClosePress(){
        this.props.callbackAfterForgotPassword(0, this.props.otherParamsToSend);
    }

    render() {
        return (
            <View style={[styles.root]}>
            <ImageBackground source={images.loginBg} resizeMode="cover" style={styles.container}>
            <SafeAreaView style={styles.safeAreaView}>
                    <TouchableOpacity style={styles.btnClose} activeOpacity={0.6} onPress={() => this.btnClosePress()}>
                        <Image source={images.close}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>{this.props.titleText}</Text>
                    <View style={styles.starView}>
                        <View style={styles.inputView}>
                            <TextInput style={styles.inputText} placeholder={this.props.placeHolderText}
                            multiline={false} placeholderTextColor={'#3c3c3c'} autoCapitalize={'none'} keyboardType={'email-address'} autoCorrect={false} underlineColorAndroid={'transparent'} onChangeText={(email) => this.setState({email})} value={this.state.email}></TextInput>
                        </View>
                        <TouchableOpacity style={styles.btnCancel} activeOpacity={0.6} onPress={() => this.btnSubmitPress()}>
                            <Text style={styles.textCancel} numberOfLines={1}>
                            {this.props.submitText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
                </ImageBackground>
            </View>
        );
    }
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
