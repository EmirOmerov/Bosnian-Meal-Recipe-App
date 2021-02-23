import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ListItem,
} from "react-native";
import { DESSERT, MEALS } from "../data/data";

const FoundMealScreen = (props) => {
  const mealName = props.route.params.foundMealName;
  const combineData = [...DESSERT, ...MEALS];
  const selectedMeal = combineData.find(
    (element) => element.title === mealName
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={selectedMeal.imageUrl} />
      <View style={styles.details}>
        <Text>Vrijeme: {data.duration}</Text>
        <Text style={styles.titleName}>{selectedMeal.title.toUpperCase()}</Text>
        <Text>{data.personQuantity.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Sastojci:</Text>
      {selectedMeal.ingredients.map((step) => (
        <Text style={styles.textItem} key={step}>
          {step}
        </Text>
      ))}
      <Text style={styles.title}>Recept:</Text>
      {selectedMeal.recipe.map((step) => (
        <Text style={styles.textItem} key={step}>
          {step}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  titleName: {
    fontFamily: "OpenSans-Bold",
  },

  details: {
    flexDirection: "row",
    paddingTop: 10,
    paddingRight: 5,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "OpenSans-Bold",
    fontSize: 25,
    textAlign: "left",
    marginLeft: 17,
    marginTop: 10,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
  titleContainer: {
    fontSize: 20,
    position: "relative",
    top: 20,
    paddingBottom: 10,
    marginBottom: 10,
    right: 20,
    marginTop: 5,
    fontFamily: "OpenSans-Bold",
  },
  textItem: {
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
});

export default FoundMealScreen;
