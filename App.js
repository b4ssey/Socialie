import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/authentication/Login";
import Register from "./src/screens/authentication/Register";
import Verification from "./src/screens/authentication/Verification";
import Home from "./src/screens/main/Home";
import HomeList from "./src/components/list/HomeList";

export default function App() {
  return (
    <PaperProvider>
      <HomeList />
    </PaperProvider>
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
