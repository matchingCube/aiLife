import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const toggle = setInterval(() => {
      setCount(count + 1);
    }, 60000);
    return () => clearInterval(toggle);
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.colorRed, styles.topSection]}>250</Text>
      <Text style={[styles.colorRed, styles.secondSection]}>grams</Text>
      <Text style={[styles.colorRed, styles.titleSection]}>
        YOU SHOULD GET SOME FOOD
      </Text>
      <TouchableOpacity>
        <Text style={[styles.colorRed, styles.buttonSection]}> + </Text>
      </TouchableOpacity>
      <ImageBackground
        source={require("./assets/healthAvatar.png")}
        resizeMode="contain"
        style={styles.image}
      >
        <ImageBackground
          source={require("./assets/bloodhearth.png")}
          resizeMode="contain"
          style={styles.heartIcon}
        >
          <Text style={[styles.colorWhite, styles.number]}>{count}.0</Text>
          <Text style={[styles.colorWhite, styles.label]}>mmol</Text>
        </ImageBackground>
      </ImageBackground>
      <View style={styles.bottomDiv}>
        <View style={styles.justifyContentCenter}>
          <Text style={[styles.colorRed, styles.calories]}>0</Text>
          <Text style={styles.colorRed}>calories in</Text>
        </View>
        <View style={styles.justifyContentCenter}>
          <Text style={[styles.colorRed, styles.calories]}>0</Text>
          <Text style={styles.colorRed}>calories out</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  colorRed: {
    color: "rgb(246, 127, 133)",
  },
  colorWhite: {
    color: "#ffffff",
  },
  topSection: {
    paddingTop: 80,
    fontSize: 18,
  },
  secondSection: {
    paddingBottom: 20,
  },
  titleSection: {
    fontSize: 20,
    fontWeight: "600",
  },
  buttonSection: {
    fontSize: 28,
    fontWeight: "600",
  },
  image: {
    width: width * 0.6,
    height: height * 0.5,
  },
  heartIcon: {
    width: 100,
    height: 100,
    position: "absolute",
    top: height * 0.06,
    right: width * -0.05,
    alignItems: "center",
  },
  number: {
    paddingTop: 20,
    fontSize: 42,
  },
  label: {
    marginTop: -12,
  },
  bottomDiv: {
    flex: 1,
    flexDirection: "row",
    width: width * 0.8,
    justifyContent: "space-between",
  },
  justifyContentCenter: {
    alignItems: "center",
    width: width * 0.2,
  },
  calories: {
    fontSize: 26,
    fontWeight: "600",
    paddingBottom: 12,
  },
});
