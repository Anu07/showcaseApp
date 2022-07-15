import React from 'react';
import { SafeAreaView, View, FlatList, Image, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import images from '../assets/imagesPath';
import style from './styles';
import { useNavigation } from '@react-navigation/native';


const Header = ({ title }) => {
    const navigation = useNavigation();

    return (
        < View style={{ paddingTop: 10, flex: 1 }} >
            <View style={style.headerInnerStyle}>
                <View style={style.headerIcon}>
                    {title !== "Videos" || Platform.ios ?
                        <View style={{
                            marginLeft: 20,
                        }}>
                            <TouchableOpacity onPress={() => { 
                                console.log("back clicked");
                                // navigation.navigate("Drawer"); 
                                }}>
                                <Image style={{ width: 35, height: 40 }} source={images.backArrow}></Image>
                            </TouchableOpacity>
                        </View> : <TouchableOpacity onPress={() => {
                            console.log("Clicked");
                            navigation.openDrawer();
                        }}><Image style={style.headerImage} source={images.overflowMenuIcon} ></Image></TouchableOpacity>}
                    <Text style={style.title}>{title}</Text>
                </View>
                {title !== "Videos"?
                    <View></View> : <View style={style.headerRightImage}>
                        <Image style={style.tinyLogo} source={images.searchIcon}></Image>
                        <TouchableOpacity onPress={() => { navigation.navigate("Notifications") }}>
                            <Image style={style.tinyLogo} source={images.notificationIcon} />
                        </TouchableOpacity >
                    </View>}
            </View>
        </View >
    );
}

export default Header;