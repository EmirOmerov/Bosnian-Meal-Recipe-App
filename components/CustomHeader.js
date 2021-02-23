import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          flex: 1.5,
          justifyContent: "center",
        }}
      >
        <Text style={styles.TextContainer}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: 60,
    borderTopColor: "transparent",
    paddingTop: 15,
  },
  TextContainer: {
    paddingTop: 25,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
    marginBottom: 10,
    fontSize: 20,
  },
});

export default CustomHeader;
