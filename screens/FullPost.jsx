import axios from "axios";
import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://6645b419b8925626f892c883.mockapi.io/project6/articles/1")
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Something went wrong...",
          "Error while fetching data from the selected article."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: data.imageUrl,
        }}
      />
      <PostText>{data.text}</PostText>
    </View>
  );
};
