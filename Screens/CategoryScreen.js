import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { MEALS } from "../data/data";
import CategoryGridTile from "../components/GridTileMeals";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { LogBox } from "react-native";

const CategoriesScreen = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            name: "MealsDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <ScrollView style={{ marginTop: 10, flex: 1 }}>
      <CustomHeader title="Glavna Jela" />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={MEALS}
        renderItem={renderGridItem}
        numColumns={2}
        style={styles.Container}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    resizeMode: "contain",
    width: "100%",
    height: 1000,
  },
});

export default CategoriesScreen;
