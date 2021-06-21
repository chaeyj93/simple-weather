import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "cloud",
    gradient: ["#888888", "#ffffff"],
    title: "Cloudy",
    subtitle: "about to rain",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "Clear",
    subtitle: "perfect clear",
  },
};

export default function Weather({ temp, condition }) {
  //props 를 class 로 했을 때 어떻게 선언하는지 한참 시도하다 실패함
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={weatherOptions[condition].gradient} //{["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <MaterialCommunityIcons
            size={96}
            name={weatherOptions[condition].iconName} //일단 condition 못먹어서 이렇게
            color="white"
          />
          <Text style={styles.temp}>{temp}℃</Text>
        </View>
        <View style={styles.halfContainer}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>
            {weatherOptions[condition].subtitle}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}

Weather.prototypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clouds",
    "Haze",
    "Mist",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

// export default Weather;
