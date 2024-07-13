import axios from "axios";
import React from "react";
import {
  StatusBar,
  Alert,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post.jsx";
import { Loading } from "../components/Loading.jsx";

export const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://6645b419b8925626f892c883.mockapi.io/project6/articles")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Something went wrong...",
          "Error while fetching data from the articles."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Alert.alert("Confirm", "You have touched.")}
          >
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
      {/* {[...items, ...items].map((obj) => (
        <Post
          title={obj.title}
          createdAt={obj.createdAt}
          imageUrl={obj.imageUrl}
        />
      ))} */}
    </View>
  );
};
