import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from '../../../../assets/imagesPath';

const BlankScreen=()=> {
    return (
      <View style={styles.container}>
      <Text style={styles.titleText}>
        {"Video player In Progress"}
        {"\n"}
        {"\n"}
      </Text>
      <Image source = {images.appLogo}/>
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#000000',
    fontSize: 20,
  }
});

export default BlankScreen;