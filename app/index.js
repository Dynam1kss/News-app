import React from "react";
import { View, StatusBar } from "react-native";
import { HomeScreen } from "../screens/Home";
import { FullPostScreen } from "../screens/FullPost";

export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <FullPostScreen /> */}
      <StatusBar theme="auto" />
    </View>
  );
}
