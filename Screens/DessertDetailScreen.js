import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
} from "react-native";

import { DESSERT } from "../data/data";
import DefaultText from "../components/DefaultText";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const DessertDetailScreen = (props) => {
  const dessertsID = props.route.params.dessertID;

  const selectedDessert = DESSERT.find((dessert) => dessert.id === dessertsID);

  return (
    <ScrollView>
      <Image source={selectedDessert.imageUrl} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>Vrijeme: {selectedDessert.duration}</DefaultText>
        <Text style={styles.titleContainer}>
          {selectedDessert.title.toUpperCase()}
        </Text>
        <DefaultText>
          {selectedDessert.personQuantity.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Sastojci:</Text>
      {selectedDessert.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Recept:</Text>
      {selectedDessert.recipe.map((step) => (
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

export default DessertDetailScreen;
