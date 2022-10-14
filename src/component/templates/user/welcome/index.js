import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Pressable, Button, ScrollView } from 'react-native';
import images from '../../../../assets/imagesPath';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
      >
        <ImageBackground source={images.loginBg} resizeMode="cover" style={styles.container}>
          <Image style={styles.image} source={images.logoOnly}></Image>
          <Text style={styles.welcome}>Welcome To</Text>
          <Text style={styles.titleText}>Showcase Media</Text>
          {/* <Text style={styles.subTitleText}>HOME OF THE BLACK KNIGHTS</Text> */}

          <Text style={styles.normalText}> Share your video celebrating sports and arts achievement in the district.</Text>
          <Pressable style={[styles.button, { backgroundColor: "#004F93" }]} onPress={() => {
            this.props.navigation.navigate("Login");
          }}>
            <Text style={styles.text}>Log In</Text>
          </Pressable>

          <Pressable style={[styles.button, { backgroundColor: "#F2B518" }]} onPress={() => {
            this.props.navigation.navigate("Register");
          }}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginTop: 160,
    width: 180,
    height: 150,
    resizeMode: 'stretch'
  },
  welcome: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontFamily: "Urbanist-Bold",
    color: '#000000',
  },
  titleText: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: "Urbanist-Bold",
    fontWeight: "100",
    fontSize: 42,
  },
  subTitleText: {
    color: "#F2B518",
    textAlign: 'center',
    fontFamily: "Urbanist-Bold",
    fontWeight: "bold",
    fontSize: 20,
    margin: 5
  },
  normalText: {
    color: "#000000",
    textAlign: 'center',
    fontFamily: "Urbanist-Regular",
    fontWeight: "normal",
    fontSize: 15,
    margin: 10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: 300,
    margin: 5,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});