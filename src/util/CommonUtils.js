import { Platform } from "react-native";
export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString(undefined, options)
  console.log(formatDate(dateString));
}

export function vibrate(timeSecs){
  const ONE_SECOND_IN_MS = 1000;

  if(Platform.OS == "android"){
    Vibration.vibrate(timeSecs * ONE_SECOND_IN_MS);
  }else{
    Vibration.vibrate();
  }
}