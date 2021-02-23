import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const DessertGridTile = (props) => {
  const image = props.color;
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <ImageBackground source={image} style={styles.imageContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {props.title}
            </Text>
          </ImageBackground>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    marginTop: 15,
    flex: 1,
    margin: 5,
    height: 100,
    borderRadius: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
    elevation: 5,
    alignContent: "center",
    borderWidth: 3,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    backgroundColor: "black",
    fontFamily: "sans-italic",
    color: "white",
    top: 95,
    width: "100%",
    opacity: 0.8,
    paddingLeft: 20,
    height: 25,
    paddingTop: 1,
  },
  imageContainer: {
    width: 200,
    height: 140,
  },
});
export default DessertGridTile;
