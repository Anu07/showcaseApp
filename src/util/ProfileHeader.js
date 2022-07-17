import React from 'react';
import { SafeAreaView, View, FlatList, Image, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import images from '../assets/imagesPath';
import style from './styles';
import { useNavigation } from '@react-navigation/native';


const ProfileHeader = ({ title }) => {
    const navigation = useNavigation();

    return (
        < View style={{ paddingTop: 10, flex: 1 }} >
            <View style={style.headerInnerStyle}>
                <View style={style.headerIcon}>
                    <View style={{
                        marginLeft: 10,
                    }}>
                        <TouchableOpacity onPress={() => {
                            console.log("back clicked");
                            navigation.goBack();
                        }}>
                            <Image style={{ width: 35, height: 40, marginTop: 5 }} source={images.backArrow}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={style.title}>{title}</Text>
                </View>
                <View style={style.headerRightImage}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Edit Profile")}}>
                        <View style={[style.button,{padding:5}]}>
                            <Text style={style.buttonTitle}>Edit Profile</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

export default ProfileHeader;