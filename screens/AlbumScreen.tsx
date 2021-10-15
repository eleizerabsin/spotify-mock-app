import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const album = {
  id: "5",
  imageUri: "https://media.giphy.com/media/lHswuNEWQhiMw/giphy.gif",
  artistsHeadline: "Etiam pellentesque",
  by: "Spotify",
  name: "Lorem Ipsum Ignus",
  numberOfLikes: 40,
  songs: [
    {
      id: "1",
      imageUri: "https://media.giphy.com/media/lHswuNEWQhiMw/giphy.gif",
    },
  ],
};

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Hello Album Screen</Text>
    </View>
  );
};

export default AlbumScreen;
