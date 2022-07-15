import React from "react";
import { StyleSheet, StatusBar, ImageBackground, Image } from 'react-native';
import images from '../../../assets/imagesPath'
import AsyncStorage from '@react-native-async-storage/async-storage';

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      AsyncStorage.getItem('id').then((value) =>
        this.props.navigation.replace(
          value === null ? 'Welcome' : 'Drawer'
        ),
      );
    }, 3500)
  }
  render() {
    return (
      <ImageBackground source={images.splashBg} resizeMode="cover" style={styles.container}>
        <StatusBar  animated={true}
          backgroundColor="#F2B518" />
        <Image style={styles.image} source={images.appLogo} opacity={0.8}
          resizeMode="contain"></Image>
      </ImageBackground>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    margin: 50,
    width: 200,
    padding: 80,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
export default Splash;