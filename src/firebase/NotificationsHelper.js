import messaging from '@react-native-firebase/messaging';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { vibrate } from '../util/CommonUtils';


export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        getFCMToken();
    }
}


const getFCMToken = async () => {
    // let fcmToken = AsyncStorage.getItem("fcmToken");
    // console.log("Stale Token", fcmToken);
    // if (!fcmToken) {
    try {
        const fcmToken = await messaging().getToken()
        if (fcmToken) {
            console.log("FCM Token", JSON.stringify(fcmToken));
            // alert(fcmToken);
            AsyncStorage.setItem("fcmToken", fcmToken);
            console.log("FCM Token", fcmToken);
        }
    } catch (error) {
        console.log(error, "Error in FCM");
    }

    // }
}


export const NotificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        vibrate(2);
        console.log("Notification caused App to open from background state", remoteMessage.notification);
    })

    messaging().getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                vibrate(2);
                console.log('Notification caused app to open from quit state:',
                    remoteMessage.notification);
            }
        });

    messaging().onMessage(async remoteMessage => {
        vibrate(2);
        console.log("notification on foreground state..", remoteMessage.notification);
    })
}

