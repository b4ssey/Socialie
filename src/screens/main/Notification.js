import React from "react";
import { View, StyleSheet } from "react-native";
import { Headline } from "react-native-paper";

function Notification(props) {
  return (
    <View style={styles.container}>
      <Headline>Discover</Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Notification;