import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home";
import { FullPostScreen } from "./FullPost";

const Stack = createNativeStackNavigator();

// Stack.Navigator = Routes in React

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "News" }}
      />
      <Stack.Screen
        name="FullPost"
        component={FullPostScreen}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  );
};
