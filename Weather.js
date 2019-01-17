import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

// export default class Weather extends Component {
//   render() {
//     return(
//       <LinearGradient
//         colors={["#00C6FB", "#005BEA"]}
//         style={styles.container}>
//         <View style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy" />
//           <Text style={styles.temp}>35º</Text>
//         </View>
//         <View style={styles.lower}>
//           <Text style={styles.title}>Raining..</Text>
//           <Text style={styles.subtitle}>For more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const weatherCases = {
  Rain: {
    colors:['#00C6FB', '#005BEA'],
    title: "Raining...",
    subtitle: "For more info look outside",
    icon: 'weather-rainny'
  },
  Clear: {
    colors:['#FEF253', '#FF7300'],
    title: "Sunny!!",
    subtitle: "Go out",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors:['#00ECBC', '#007ADF'],
    title: "Thunderstorm!!!",
    subtitle: "Thunder",
    icon: 'weather-lightning'
  },
  Clunds: {
    colors:['#D7D2CC', '#304352'],
    title: "Clunds~~",
    subtitle: "with wind",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors:['#7DE2FC', '#B9B6E5'],
    title: "Cold outside",
    subtitle: "Do you want to build a snowman?",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors:['#89F7FE', '#66A6FF'],
    title: "Drizzle",
    subtitle: "It's like rain.",
    icon: 'weather-hail'
  },
  Haze: {
    colors:['#89F7FE', '#66A6FF'],
    title: "Haze",
    subtitle: "Haze..",
    icon: 'weather-fog'
  },
  Mist: {
    colors:['#D7D2CC', '#304352'],
    title: "Mist!",
    subtitle: "It's like you have no glasses on.",
    icon: 'weather-fog'
  }
};

function Weather({ weatherName, temp }) {
  console.log(weatherName);
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}>
      <View style={styles.upper}>
        <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },
  temp:{
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop:10
  },
  lower:{
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
