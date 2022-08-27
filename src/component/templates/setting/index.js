import { Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import Header from '../../../util/header';
import styles from '../../../util/styles';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [isSoundSwitchOn, setIsSoundSwitchOn] = React.useState(true);
    const [isVibrateSwitchOn, setIsVibrateSwitchOn] = React.useState(false);
    const [isAppUpdateSwitchOn, setIsAppUpdateSwitchOn] = React.useState(true);
    // const [isNewServiceSwitchOn, setIsNewServiceSwitchOn] = React.useState(true);
    // const [isNewUpdateSwitchOn, setIsNewUpdateSwitchOn] = React.useState(false);
    // const [isAlertSwitchOn, setIsAlertSwitchOn] = React.useState(false);
    // const [isAnnounceSwitchOn, setIsAnnounceSwitchOn] = React.useState(true);

    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
        var pushnotification = !isSwitchOn ? 1 : 0;
        AsyncStorage.setItem("push", JSON.stringify(pushnotification));
    }
    const onSoundToggleSwitch = () => setIsSoundSwitchOn(!isSoundSwitchOn);
    const onVibrateSwitch = () => { 
        setIsVibrateSwitchOn(!isVibrateSwitchOn); 
        if(isVibrateSwitchOn){
            AsyncStorage.setItem("vibrate", "1");
        }else{
            AsyncStorage.setItem("vibrate", "0");
        }
    }
    const onAppUpdateToggleSwitch = () => setIsAppUpdateSwitchOn(!isAppUpdateSwitchOn);
    const onNewServiceToggleSwitch = () => setIsNewServiceSwitchOn(!isNewServiceSwitchOn);
    const onNewUpdateToggleSwitch = () => setIsAppUpdateSwitchOn(!isAppUpdateSwitchOn);
    const onAlertToggleSwitch = () => setIsAlertSwitchOn(!isAlertSwitchOn);
    const onAnnounceToggleSwitch = () => setIsAnnounceSwitchOn(!isAnnounceSwitchOn);

    useEffect(() => {
        AsyncStorage.getItem('push').then(req => {
            if (req == 1) {
                setIsSwitchOn(true);
            }
        });
    }, []);


    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column", marginTop: 50, justifyContent: 'flex-start', alignContent: 'flex-start'
        }]}>
            <Header title={"Notifications"} />
            <View style={{ height: '90%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', alignItems: 'center', paddingLeft: 10 }]}>General Notifications</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>

                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Sound</Text>
                    <Switch value={isSoundSwitchOn} onValueChange={setIsSoundSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Vibrate</Text>
                    <Switch value={isVibrateSwitchOn} onValueChange={onVibrateSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View> */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>App Updates</Text>
                    <Switch value={isAppUpdateSwitchOn} onValueChange={setIsAppUpdateSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
            </View>

        </View>
    );
};

export default MyComponent;