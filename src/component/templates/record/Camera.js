/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import IosHeader from '../../../util/iosHeader';
import images from '../../../assets/imagesPath';
const CameraScreen = () => {
  const videoRecorder = useRef(null)
  const navigation = useNavigation();

  function startRecorder() {
    if (videoRecorder && videoRecorder.current) {
      videoRecorder.current.open({ maxLength: 30 }, (data) => {
        console.log('captured data', data);
        navigation.navigate("Drawer");
      })
    }

  }

  useEffect(() => {
    startRecorder();
  });


  return (
    <SafeAreaView>
      <View style={{ flexDirection:'row' }}>
        {Platform.OS === 'ios' ? <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                <Image style={{ marginLeft:20, width: 45, height: 45, backgroundColor: "white" }} source={images.whiteBackArrow} tintColor="#fff"></Image>
              </TouchableOpacity>: <></>}
        <VideoRecorder style={{ marginTop: 50, paddingTop: 30 }} ref={videoRecorder} compressQuality={'high'}></VideoRecorder>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.white,
  },
  btnCapture: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 25
  }
});

export default CameraScreen;