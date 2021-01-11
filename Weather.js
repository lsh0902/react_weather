import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Drizzle: {
    iconName: "weather-sunset",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Atmosphere: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Clouds: {
    iconName: "weather-partly-cloudy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Mist: {
    iconName: "weather-windy",
    gradient: ["#4DA0B0", "#D39D38"],
  },
};

export default function Weather({ temp, condition }) {
  condition = "Mist"
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.half}>
        <MaterialCommunityIcons
          size={120}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}C</Text>
      </View>
      <View style={styles.half}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.sub}>subTitle</Text>
      </View>
    </LinearGradient>
  );
}
Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
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
  half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white"
  },
  title:{
    fontSize: 50,
    color : 'white'
  },
  sub: {
    fontSize: 20,
    marginTop : 20,
    color : 'white'
  }
});
