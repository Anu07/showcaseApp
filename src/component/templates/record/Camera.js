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
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import VideoRecorder from 'react-native-beautiful-video-recorder';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

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
    <StatusBar barStyle="light-content" />
    {Platform.OS === 'ios' ? <Header />:<></>}
    <VideoRecorder ref={videoRecorder} compressQuality={'high'}></VideoRecorder>
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