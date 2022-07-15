import { Alert } from "react-native";

const ShowAlertMessage=(message)=>{
        Alert.alert(  
            '',  
            message,  
            [  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        );  
}

export default ShowAlertMessage;