import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Appbar } from "react-native-paper";

function CustomNavigationBar({ title }) {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}

export default CustomNavigationBar;
