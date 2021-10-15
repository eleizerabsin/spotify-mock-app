import React from "react";
import { View, Text, FlatList } from "react-native";
import { AlbumParam } from "../../types";
import Album from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
  id: string;
  title: string;
  albums: AlbumParam[];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumCategory;
