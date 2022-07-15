import React from 'react';
import { SafeAreaView, View, FlatList, Image, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';
import images from '../assets/imagesPath';
import style from './styles';
import { useNavigation } from '@react-navigation/native';


const IosHeader = ({}) => {
    const navigation = useNavigation();
    return (
        < View style={{ paddingTop: 10, flex: 1 }} >
            <View style={style.headerInnerStyle}>
                <View style={{
                    marginLeft: 20,
                }}>
                    <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                        <Image style={{ width: 35, height: 40 }} source={images.backArrow}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
}

export default IosHeader;