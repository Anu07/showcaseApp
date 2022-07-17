import React from 'react';
import { SafeAreaView, ScrollView, View, ImageBackground, TouchableOpacity, FlatList, Image, StyleSheet, Text, StatusBar } from 'react-native';
import images from '../../../assets/imagesPath';
import Header from '../../../util/header';
import style from '../../../util/styles';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const recordText = "Record your video to submit to Showcase Media.  All submissions become property of Showcase Media, LLC.  Showcase Media has sole discretion in deciding whether to share the video.  Videos that include copyrighted materials may not be shared."
const RecordScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={style.root}>
            <ImageBackground source={images.recordBg} resizeMode="cover" style={style.container}>
                <SafeAreaView style={style.safeAreaView}>
                    <StatusBar animated={true}
                        backgroundColor="#FFFFFF" />
                    <ScrollView contentContainerStyle={{ height:'55%'}}>
                        <Header title={"Record Videos"} />
                        <Text style={style.textGray}>{recordText}</Text>
                        <View style={{ flex: 1, margin: 15 }}>
                            <TextInput
                                keyboardType="default"
                                placeholder='Video Type'
                                placeholderTextColor="gray"
                                selectionColor='#000'
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                returnKeyType="next"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                style={{ marginBottom: 10 }}
                            />
                            <TextInput
                                keyboardType="default"
                                placeholder='Title'
                                placeholderTextColor="gray"
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                selectionColor="#000"
                                returnKeyType="next"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                style={{ marginBottom: 10 }}
                            />
                            <TextInput
                                keyboardType="default"
                                theme={{
                                    colors: {
                                        primary: '#F8F7FD',
                                        text: 'black',
                                        background: '#F8F7FD',
                                    }
                                }}
                                selectionColor="#000"
                                {...Platform.OS === 'android' ? mode = "outlined" : ""}
                                placeholder='Description'
                                placeholderTextColor="gray"
                            />
                            <TouchableOpacity style={{ marginTop: 12 }} onPress={() => {
                                // navigation.navigate("Home");
                                { console.log("Resru") }
                                navigation.navigate("Camera");
                            }}>
                                <View style={style.button}>
                                    <Text style={style.buttonTitle}>Record Videos</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 50 }}></View>
                            <Text style={[style.normalText, { color: "#9e9e9e", marginTop: 20, marginBottom: 15 }]}>By continuing, you agree to accept our Privacy Policy and Terms of Service.</Text>
                            <View style={{ height: 40 }}></View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}

export default RecordScreen;