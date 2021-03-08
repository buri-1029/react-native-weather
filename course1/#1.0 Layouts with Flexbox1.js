// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>hello1</Text>
        <Text style={styles.text}>hello2</Text>
    </View>
    // <View> 는 <div> 같은거야
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
});
