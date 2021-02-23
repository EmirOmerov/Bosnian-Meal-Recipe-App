import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";

import { MEALS } from "../data/data";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealID = props.route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealID);

  return (
    <ScrollView>
      <Image source={selectedMeal.imageUrl} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>Vrijeme: {selectedMeal.duration}</DefaultText>
        <Text style={styles.titleContainer}>
          {selectedMeal.title.toUpperCase()}
        </Text>
        <DefaultText>{selectedMeal.personQuantity.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Sastojci:</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Recept:</Text>
      {selectedMeal.recipe.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 25,
    textAlign: "left",
    marginLeft: 17,
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
});

export default MealDetailScreen;
