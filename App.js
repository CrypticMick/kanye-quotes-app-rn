import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useRandomQuote from "./useRandomQuote";

export default function App() {
  const backgroundImage = { uri: "https://wallpapercave.com/wp/wp9837865.png" };

  const [i, setI] = useState(0);
  const kanyeQuote = useRandomQuote(i);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.titleText}>Kanye West Quotes</Text>
        <View
          style={{
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            width: "100%",
          }}
        >
          <Text style={styles.quoteText}>"{kanyeQuote}"</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setI(i + 1)}>
          <Text style={styles.buttonText}>More Kanye</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 10,
    marginTop: 15,
    padding: 15,
  },
  buttonText: {
    color: "white",
    fontFamily: "Chalkduster",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  titleText: {
    fontFamily: "Copperplate",
    fontSize: 35,
    fontWeight: "bold",
    paddingBottom: 15,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  quoteText: {
    backgroundColor: "transparent",
    color: "orange",
    fontFamily: "Copperplate",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 25,
    paddingHorizontal: 15,
    paddingVertical: 20,
    textAlign: "center",
  },
});
