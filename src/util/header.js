import React from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, Image, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import images from '../assets/imagesPath';
import style from './styles';
import { useNavigation } from '@react-navigation/native';


const Header = ({ title, parentCallback }) => {
    const navigation = useNavigation();
    const clicked = false;
    return (
        < View style={{ paddingTop: 10, flex: 1, marginTop:10 }} >
            <View style={style.headerInnerStyle}>
                <View style={style.headerIcon}>
                    {title !== "Videos" || Platform.ios ?
                        <View style={{
                            marginLeft: 10,
                        }}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                            }}>
                                <Image style={{ width: 35, height: 40, marginTop: 5 }} source={images.backArrow}></Image>
                            </TouchableOpacity>
                        </View> : <TouchableOpacity onPress={() => {
                            console.log("Clicked");
                            navigation.openDrawer();
                        }}><Image style={style.headerImage} source={images.overflowMenuIcon} ></Image></TouchableOpacity>}
                    <Text style={style.title}>{title}</Text>
                </View>
                {title !== "Videos" ?
                    <View></View> : <View style={[style.headerRightImage,{width:100}]}>
                        {/* <TouchableOpacity onPress={() => {
                            parentCallback(!clicked)
                            console.log("Clicked",!clicked);
                        }}>
                            <Image style={style.tinyLogo} source={images.searchIcon} ></Image>
                        </TouchableOpacity> */}
                        {/* <TouchableOpacity onPress={() => {
                             navigation.navigate("Notifications") 
                        }}>
                            <Image style={style.tinyLogo} source={images.notificationIcon} /> 
                        </TouchableOpacity >*/}
                    </View>}
            </View>
        </View >
    );
}

export default Header;