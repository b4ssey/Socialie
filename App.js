import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import { store } from "./src/store/store";
import Login from "./src/screens/authentication/Login";
import Register from "./src/screens/authentication/Register";
import Verification from "./src/screens/authentication/Verification";
import Home from "./src/screens/main/Home";
import HomeList from "./src/components/list/HomeList";
import PostDetail from "./src/screens/main/PostDetail";
import CommentList from "./src/components/list/CommentList";
import Profile from "./src/screens/main/Profile";
import TagList from "./src/components/list/TagList";
import Overview from "./src/components/navigation/Overview";
import Root from "./src/components/navigation/Root";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Root />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
