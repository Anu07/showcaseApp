import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";


const appLoader = () => {
  return <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#F2B518" />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default appLoader;