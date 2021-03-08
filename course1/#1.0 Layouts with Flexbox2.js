// App.js
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
}
// flex로 레이아웃 코딩을 하라고 권장하고 싶어! 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow"
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue"
  },
  text: {
    color: "black"
  }
});
