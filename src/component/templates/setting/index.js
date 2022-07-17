import * as React from 'react';
import { Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import Header from '../../../util/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../util/styles';

const MyComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const [isSoundSwitchOn, setIsSoundSwitchOn] = React.useState(true);
    const [isVibrateSwitchOn, setIsVibrateSwitchOn] = React.useState(false);
    const [isAppUpdateSwitchOn, setIsAppUpdateSwitchOn] = React.useState(true);
    const [isNewServiceSwitchOn, setIsNewServiceSwitchOn] = React.useState(true);
    const [isNewUpdateSwitchOn, setIsNewUpdateSwitchOn] = React.useState(false);
    const [isAlertSwitchOn, setIsAlertSwitchOn] = React.useState(false);
    const [isAnnounceSwitchOn, setIsAnnounceSwitchOn] = React.useState(true);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const onSoundToggleSwitch = () => setIsSoundSwitchOn(!isSoundSwitchOn);
    const onVibrateSwitch = () => setIsVibrateSwitchOn(!isVibrateSwitchOn);
    const onAppUpdateToggleSwitch = () => setIsAppUpdateSwitchOn(!isAppUpdateSwitchOn);
    const onNewServiceToggleSwitch = () => setIsNewServiceSwitchOn(!isNewServiceSwitchOn);
    const onNewUpdateToggleSwitch = () => setIsAppUpdateSwitchOn(!isAppUpdateSwitchOn);
    const onAlertToggleSwitch = () => setIsAlertSwitchOn(!isAlertSwitchOn);
    const onAnnounceToggleSwitch = () => setIsAnnounceSwitchOn(!isAnnounceSwitchOn);

    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column", marginTop:50, justifyContent: 'flex-start', alignContent: 'flex-start'
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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Sound</Text>
                    <Switch value={isSoundSwitchOn} onValueChange={setIsSoundSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Vibrate</Text>
                    <Switch value={isVibrateSwitchOn} onValueChange={setIsVibrateSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>App Updates</Text>
                    <Switch value={isAppUpdateSwitchOn} onValueChange={setIsAppUpdateSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>New Service Available</Text>
                    <Switch value={isNewServiceSwitchOn} onValueChange={setIsNewServiceSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>New Tips Available</Text>
                    <Switch value={isNewUpdateSwitchOn} onValueChange={setIsNewUpdateSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Alerts</Text>
                    <Switch value={isAlertSwitchOn} onValueChange={setIsAlertSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Announce Notification</Text>
                    <Switch value={isAnnounceSwitchOn} onValueChange={setIsAnnounceSwitchOn}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 20 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
            </View>

        </View>
    );
    // return (
    //     <SafeAreaView style={{flex:1}}>
    //         <View>
    //             <Header title={"Notification"} />
    //             <Text style={{ color: '#000000', backgroundColor: '#ff32ff' }}>Tescxmnxvjxhcjvhjcxhvjxhcjkt</Text>
    //             <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    //         </View>
    //     </SafeAreaView>
    // );
};

export default MyComponent;