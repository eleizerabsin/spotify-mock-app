import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import { AlbumParam } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: AlbumParam;
};

const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    console.log(`Album pressed: ${props.album.artistsHeadline}`);
    navigation.navigate("Album", { id: props.album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
