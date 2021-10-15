import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import { RootTabScreenProps } from "../types";
import { AlbumCategories } from "../data/AlbumCategories";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumCategories}
        renderItem={({ item }) => (
          <AlbumCategory id={item.id} title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
