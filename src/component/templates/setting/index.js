import * as React from 'react';
import { Switch } from 'react-native-paper';
import { View, Text } from 'react-native';
import Header from '../../../util/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../../../util/styles';

const MyComponent = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
        <View style={[styles.container, {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column", justifyContent: 'flex-start', alignContent: 'flex-start'
        }]}>
            <Header title={"Notifications"} />
            <View style={{ height: '90%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', alignItems: 'center', paddingLeft: 10 }]}>General Notifications</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Sound</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Vibrate</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>App Updates</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>New Service Available</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>New Tips Available</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Alerts</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
                        ios_backgroundColor="#3e3e3e" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: '10%' }}>
                    <Text style={[styles.normalText, { fontFamily: 'Urbanist-SemiBold', fontWeight: 'bold', textAlign: 'left', paddingLeft: 10 }]}>Announce Notification</Text>
                    <Switch value={isSwitchOn} onValueChange={onToggleSwitch}
                        trackColor={{ false: "#767577", true: "#F2B518" }}
                        thumbColor={"#f4f3f4"}
                        style={{ marginRight: 10, alignContent: 'center', justifyContent: 'center', marginBottom: 30 }}
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