import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
Icon.loadFont();
import { TextInput } from "react-native-paper";
import images from "../../../assets/imagesPath";
import Header from "../../../util/header";
import { ActivityIndicator } from "react-native-paper";
import Snackbar from "react-native-snackbar";
import ImagePicker from "react-native-image-crop-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from "react-native-element-dropdown";
import commonStyle from "../../../util/styles";

const UploadVideoForm = ({ navigation }) => {
  const styles = useStyles();
  const [videoDescription, setVideoDescription] = useState(null);
  const [video, setVideo] = useState(null);
  const [videoTitle, setVideoTitle] = useState(null);
  const [loading, setLoading] = React.useState(false);
  const [dataVideoType, setDataVideoType] = React.useState(false);
  const [dataVideoTypeLabel, setDataVideoTypeLabel] = React.useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: "Sports", value: "1" },
    { label: "Arts", value: "2" },
  ];
 
  const createFormData = (video, body = {}) => {
    const data = new FormData();

    data.append("filevideo", {
      name: video.filename ? video.filename : "videoupload",
      type: video.mime,
      uri:
        Platform.OS === "ios" ? video.path.replace("file://", "") : video.path,
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    // console.log("Request Body", data);
    return data;
  };

  const uploadVideo = async () => {
    const value = await AsyncStorage.getItem("apikey");
    if (videoTitle != null && videoDescription != null && dataVideoTypeLabel != false && video != null) {
        setLoading(true);
        fetch('https://showcasemedia.dcwebtech.com/api/upload', {
            method: 'POST',
            headers: new Headers({ "content-type": "multipart/form-data", "Authorization": value }),
            body: createFormData(video, { video_type: dataVideoTypeLabel, video_title: videoTitle, video_desc: videoDescription }),
        })
            // .then((response) => response.json())
            .then((response) => {
                setLoading(false);
                console.log('response', response);
                if (response.status == 200) {
                    notify("Video uploaded successfully. Your video will appear on our YouTube channel once approved by Showcase Media.")
                    setVideo(null)
                    setVideoDescription("")
                    setVideoTitle("")
                    setDataVideoTypeLabel("");
                } else {
                    notify("Failed to upload video.")
                }
            })
            .catch((error) => {
                setLoading(false);
                console.log('error', error);
            });

    } else if (videoTitle == "" || videoTitle == null) {
        notify("Video title can't be blank")
    } else if (videoDescription == "" || videoDescription == null) {
        notify("Video description can't be blank")
    } else if (dataVideoTypeLabel == "" || dataVideoTypeLabel == null) {
        notify("Video type can't be blank")
    } else {
        notify("Please upload a video")
    }
}

  const notify = (message) => {
    // debugger;
    if (Platform.OS != "android") {
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
      });
    } else {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  };

  launchCamera = () => {
    ImagePicker.openCamera({
      mediaType: "video",
    }).then((image) => {
      // debugger;
      console.log("CAMERA SETTER Called", image);
      setVideo(image);
    });
  };

  launchImageLibrary = () => {
    ImagePicker.openPicker({
      mediaType: "video",
    }).then((video) => {
      setVideo(video);
      console.log("SETTER Called", video);
    });
  };

  return (
    <View style={styles.root}>
      <ImageBackground
        source={images.recordBg}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView style={{ height: "100%" }}>
            <KeyboardAvoidingView
              style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 10 }}
            >
              <Header title={"Upload a video"} />
              <View
                style={[styles.customContainer, { backgroundColor: "#F8F7FD" }]}
              >
                <Dropdown
                  style={[
                    commonStyle.dropdown,
                    isFocus && { borderColor: "#ededed", borderWidth: 1 },
                  ]}
                  placeholderStyle={{ color: "#000" }}
                  selectedTextStyle={{ color: "#000" }}
                  iconStyle={styles.iconStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Select video Type"
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  value={dataVideoType}
                  onChange={(item) => {
                    setDataVideoType(item.value);
                    setDataVideoTypeLabel(item.label);
                    setIsFocus(true);
                  }}
                />
              </View>
              <TextInput
                keyboardType="default"
                placeholder="Video Title"
                placeholderTextColor="gray"
                selectionColor="#000"
                theme={{
                  colors: {
                    primary: "#F8F7FD",
                    text: "black",
                    background: "#F8F7FD",
                  },
                }}
                backgroundColor="#F8F7FD"
                returnKeyType="next"
                value={videoTitle}
                {...(Platform.OS === "android" ? (mode = "outlined") : "")}
                onChangeText={(text) => {
                  setVideoTitle(text);
                }}
                style={{
                  marginTop: 20,
                  marginBottom: 5,
                  marginLeft: 5,
                  marginRight: 5,
                }}
              />

              <TextInput
                keyboardType="default"
                placeholder="Video Description"
                selectionColor="#000"
                placeholderTextColor="gray"
                theme={{
                  colors: {
                    primary: "#F8F7FD",
                    text: "black",
                    background: "#F8F7FD",
                  },
                }}
                value={videoDescription}
                onChangeText={(text) => {
                  setVideoDescription(text);
                }}
                backgroundColor="#F8F7FD"
                returnKeyType="done"
                {...(Platform.OS === "android" ? (mode = "outlined") : "")}
                style={{ margin: 5 }}
              />

              <Text style={{ margin: 10,color:'#000' }}>Choose video from:</Text>

              <View style={styles.btnParentSection}>
                <TouchableOpacity
                  onPress={this.launchCamera}
                  style={styles.btnSection}
                >
                  <Text style={styles.btnText}>Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={this.launchImageLibrary}
                  style={styles.btnSection}
                >
                  <Text style={styles.btnText}>Gallery</Text>
                </TouchableOpacity>
              </View>
              {video != null ? (
                <Text style={{ marginLeft: 12, marginBottom: 20, color:'#000' }}>
                  {video.filename ? video.filename : "Video"} has been attached
                  successfully.
                </Text>
              ) : (
                <View />
              )}
              {loading == true ? (
                <ActivityIndicator
                  size="large"
                  style={styles.loading}
                  color="#F2B518"
                />
              ) : (
                <></>
              )}
              <Text style={{ margin: 10, color: "#929292" }}>
                Disclaimer: This video will be the sole property of Showcase
                Media, please refrain from racist or offensive language, no
                copyright infringement will be allowed. The video will be
                reviewed and approved based on these factors.
              </Text>
              <TouchableOpacity onPress={uploadVideo}>
                <View style={styles.button}>
                  <Text style={styles.buttonTitle}>Upload</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

function useStyles() {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10,
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#F2B518',
            borderRadius: 8,
            height: 48,
            justifyContent: 'center',
        },
        buttonTitle: {
            color: '#FFFFFF',
            fontSize: 17,
            fontWeight: '600',
            lineHeight: 22,
        },
        backgroundVideo: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        },
        titleText: {
            textAlign: 'center',
            color: '#000000',
            fontFamily: "Urbanist-Bold",
            fontWeight: "bold",
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            fontSize: 42,
        },
        errorTextStyle: {
            color: '#F2B518',
            textAlign: 'center',
            fontSize: 12,
            textAlign: 'left'
        },
        subTitleText: {
            color: "#F2B518",
            textAlign: 'center',
            fontFamily: "Urbanist-Bold",
            fontWeight: "bold",
            fontSize: 20,
            margin: 15
        },
        checkboxContainer: {
            flexDirection: "row",
            width: '100%',
            margin: 10,
        },
        checkbox: {
            alignSelf: "center",
            color: '#F2B518'
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingVertical: 32,
        },
        customContainer: {
            borderWidth: 2,
            borderColor: '#ededed',
            borderRadius: 5,
            padding: 8,
            height: 50
        },
        forgotPasswordContainer: {
            alignItems: 'center',
            margin: 5,
            fontFamily: "Urbanist-Regular",
        },
        form: {
            alignItems: 'center',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            flexDirection: 'row',
            marginBottom: 10,
            height: 48,
            paddingHorizontal: 16,
        },
        label: {
            color: '#9E9E9E',
            fontSize: 15,
            fontWeight: '400',
            lineHeight: 20,
            width: 80,
        },
        normalText: {
            color: "#9e9e9e",
            textAlign: 'center',
            fontFamily: "Urbanist-Regular",
            fontWeight: "normal",
            justifyContent: 'center',
            fontSize: 15,
        },
        root: {
            backgroundColor: '#000000',
            flex: 1,
            justifyContent: 'center',
        },
        safeAreaView: {
            flex: 1,
            justifyContent: 'flex-start',
            alignContent: 'flex-start'
        },
        subtitle: {
            color: 'rgba(235, 235, 245, 0.6)',
            fontSize: 17,
            fontWeight: '400',
            lineHeight: 22,
        },
        textButton: {
            color: '#F2B518',
            fontSize: 18,
            fontWeight: '400',
            fontFamily: "Urbanist-Bold",
            marginBottom: 10,
            marginTop: 10,
            lineHeight: 20,
        },
        textInput: {
            color: '#9E9E9E',
            backgroundColor: '#F8F7FD',
            height: 35,
            width: "100%",
            borderRadius: 10,
            padding: 10,
            marginBottom: 10,
        },
        btnParentSection: {
            alignItems: 'center',
            marginBottom: 10,
            flex: 2,
            flexDirection: 'row'
        },
        btnSection: {
            width: 160,
            height: 50,
            backgroundColor: '#DCDCDC',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 3,
            margin: 10
        },
        btnText: {
            textAlign: 'center',
            color: 'gray',
            fontSize: 14,
            fontWeight: 'bold'
        },
        title: {
            color: '#FFFFFF',
            fontSize: 28,
            fontWeight: '700',
            lineHeight: 34,
        },
        loading: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
        customContainer: {
            borderWidth: 2,
            borderColor: '#ededed',
            borderRadius: 5,
            padding: 8,
            height: 50
        }
    });
}

export default UploadVideoForm;
