import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>나는노란색</Text>
      </View>
      <View style={styles.blueView}>
        <Text>나는파란색</Text>
      </View>
      {/* <Text style={styles.text}>Hello!</Text>
      <Text style={styles.text}>Hello!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column" /*디폴트는 column*/,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 2,
    backgroundColor: "blue",
  },
});
