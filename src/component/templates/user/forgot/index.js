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
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
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
                </View>
            </View>
        );
    }
}

export default ForgotPassword;