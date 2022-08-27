import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import style from "../../../util/styles";
import images from "../../../assets/imagesPath";

const YouVideoPlayer = ({ route, navigation }) => {
  const [playing, setPlaying] = useState(false);
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <SafeAreaView >
      <View style={{
        marginLeft: 10,
        flexDirection: 'row'
      }}>
        <TouchableOpacity onPress={() => {
          togglePlaying();
          navigation.goBack();
        }}>
          <Image style={{ width: 35, height: 40, marginTop: 5 }} source={images.backArrow}></Image>
        </TouchableOpacity>
        <Text numberOfLines={2} style={{fontSize:18,color:'#000',  width:'80%', paddingTop:15, textAlign:'left',fontWeight:'bold', textAlignVertical:'center'}}>{route.params.title}</Text>
      </View>
      <View style={[{ transform: [{ rotate: "360deg" }] }, { marginTop: 150, justifyContent: 'center', alignSelf: 'flex-start' }]}>
        <YoutubePlayer
          videoId={route.params.videoId}
          play={playing}
          onChangeState={onStateChange}
          // video height -> screen width
          height={SCREEN_WIDTH}
          // video width -> screen height
          width={SCREEN_HEIGHT / 2.1}
          // prevent aspect ratio auto sizing
          webViewProps={{
            injectedJavaScript: `
            var element = document.getElementsByClassName('container')[0];
            element.style.position = 'unset';
            element.style.paddingBottom = 'unset';
            true;
          `,
          }}
        />
      </View>
    </SafeAreaView>
  );
}


export default YouVideoPlayer;
