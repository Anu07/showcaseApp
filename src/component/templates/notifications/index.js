import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Image,
  FlatList
} from 'react-native';
import images from '../../../assets/imagesPath';
import Header from '../../../util/header';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
  };
    this.state = {
      data: [
        { id: 3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name: "March SoulLaComa", text: "Liked your video.", attachment: "https://via.placeholder.com/100x100/FFB6C1/000000" },
        { id: 2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name: "John DoeLink", text: "Liked your video.", attachment: "https://via.placeholder.com/100x100/20B2AA/000000" },
        { id: 4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name: "Finn DoRemiFaso", text: "Liked your video.", attachment: "" },
        { id: 5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name: "Maria More More", text: "Liked your video.", attachment: "" },
        { id: 1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name: "Frank Odalthh", text: "Liked your video.", attachment: "https://via.placeholder.com/100x100/7B68EE/000000" },
        { id: 6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name: "Clark June Boom!", text: "Liked your video.", attachment: "" },
        { id: 7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name: "The googler", text: "Liked your video.", attachment: "" },
      ]
    }
  }

    componentDidMount() {
        this.setState({});
        // const value =  AsyncStorage.getItem("apikey");
        // console.log("auth Key", value);
        fetch('https://showcasemedia.dcwebtech.com/api/getNotification', {
          method: 'GET',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'WkxnhXFSWLDAdH57LDHmS0ENObRWzYea0WH25TMg'
          }
        })
            .then(response => response.json())
            .then((responseJson) => {
                // setLoading(false);
                this.setState({ dataSource: responseJson.items })
                console.log("DATA PARSED 11",JSON.stringify(this.state.dataSource));
            })
            .catch(error => {
                console.log(error)
                // setLoading(false);
            })
    }

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
      }}>
        <StatusBar animated={true}
          backgroundColor="#F2B518" />
        <Header title={"Notifications"} />
        <FlatList
          style={[styles.root, { flexGrow: 1 }]}
          data={this.state.dataSource}
          extraData={this.state}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator} />
            )
          }}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(item) => {
            const Notification = item.item;
            let attachment = <View />;

            let mainContentStyle;
           
            return (
              <View style={styles.container}>
                <Image source={{ uri: images.appLogo }} style={styles.avatar} />
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.text}>
                      <Text style={styles.name}>Video Status Notification</Text>
                      <Text style={{ color: '#000000' }}>{Notification.video_notification}</Text>
                    </View>
                    <Text style={styles.timeAgo}>
                      2 hours ago
                    </Text>
                  </View>
                  {attachment}
                </View>
              </View>
            );
          }} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF",
    height: '80%',
  },
  containers: {
    flex: 1,
    color: '#ffffff',
    backgroundColor: '#ffffff'
  },
  container: {
    padding: 16,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969"
  },
  name: {
    fontSize: 16,
    color: "#000000"
  }
}); 