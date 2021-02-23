import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { DESSERT } from "../data/data";
import DessertGridTile from "../components/DessertGridTile";
import CustomHeader from "../components/CustomHeader";
import { ScrollView } from "react-native-gesture-handler";
import { LogBox } from "react-native";

const image = {
  uri: "https://wallpaperaccess.com/full/260161.jpg",
};

const DessertScreen = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const renderDesserts = (itemData) => {
    return (
      <DessertGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            name: "DessertDetailScreen",
            params: {
              dessertID: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <CustomHeader title="Slatka jela" style={styles.headerStyle} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={DESSERT}
        renderItem={renderDesserts}
        numColumns={2}
        style={styles.Container}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 10,
    flex: 1,
  },
});

export default DessertScreen;
