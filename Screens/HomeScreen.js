import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import CustomHeader from "../components/CustomHeader";

const image = {
  uri: "https://wallpaperaccess.com/full/260161.jpg",
};

const logo = require("../src/Images/logo3.png");

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <ImageBackground source={image} style={styles.imageContainer}>
        <View style={styles.textContainer}>
          <View>
            <Image source={logo} style={styles.logoImage} />
            <Text style={styles.receptitxt}>Recepti i pripreme</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginTop: 40,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    height: 200,
  },
  imageContainer: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  logoImage: {
    top: 80,
    width: 200,
    height: 200,
    borderWidth: 5,
    borderColor: "black",
    position: "relative",
    left: 30,
  },
  receptitxt: {
    position: "relative",
    fontFamily: "bold-italic",
    top: 100,
    fontSize: 30,
  },
});

export default HomeScreen;
