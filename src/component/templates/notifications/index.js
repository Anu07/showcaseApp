import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList
} from 'react-native';
import Header from '../../../util/header';

export default class Notifications extends Component {

  constructor(props) {
    super(props);
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

  render() {
    return (
      <SafeAreaView style={{
        flex: 1,
        alignItems: 'center',
        paddingStart: 50
      }}>
        <StatusBar animated={true}
          backgroundColor="#F2B518" />
        <Header title={"Notifications"} />
        <FlatList
          style={[styles.root, { flexGrow: 1 }]}
          data={this.state.data}
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
            if (Notification.attachment) {
              mainContentStyle = styles.mainContent;
              attachment = <Image style={styles.attachment} source={{ uri: Notification.attachment }} />
            }
            return (
              <View style={styles.container}>
                <Image source={{ uri: Notification.image }} style={styles.avatar} />
                <View style={styles.content}>
                  <View style={mainContentStyle}>
                    <View style={styles.text}>
                      <Text style={styles.name}>{Notification.name}</Text>
                      <Text style={{ color: '#000000' }}>{Notification.text}</Text>
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