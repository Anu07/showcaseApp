import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HomeScreen from '../home';
import images from '../../../assets/imagesPath';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>

      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>Home</Text>
          </View>
        )}

        onPress={() => props.navigation.navigate('Home')}
      />

      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>My Profile</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>Watch Videos</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>Record/Upload Videos</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Record')}
      />
      {/* <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>Upload Videos</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Blank')}
      /> */}
      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Text style={styles.menuTitle}>Notification Settings</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Settings')}
      />
      <DrawerItem
        label={() => (
          <View
            style={styles.menuLabelFlex}>
            <Image
              style={{ width: 25, height: 25 }}
              source={images.logOut}
            />
            <Text style={styles.menuTitle}>Logout</Text>
          </View>
        )}

        onPress={() => { 
          AsyncStorage.setItem('id',"");
          props.navigation.navigate('Welcome') }}
      />
    </DrawerContentScrollView>
  );
}

export default function DrawerScreen() {

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#000000',
          width: 240,
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 18
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row'
  },

  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
});
