import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import images from '../../../../assets/imagesPath';
import Header from '../../../../util/header';

const BlankScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header />
        <Text style={styles.titleText}>
          {"Video player In Progress"}
          {"\n"}
          {"\n"}
        </Text>
        <Image style={{alignSelf:'center'}} source={images.appLogo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#000000',
    fontSize: 20,
  }
});

export default BlankScreen;