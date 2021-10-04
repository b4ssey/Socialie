import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Card, Text, Title } from "react-native-paper";

function TagList(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/tag-discover.png")}
        style={{
          height: 120,
          width: 120,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(0,0,0,.6)", //try 20%
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Title style={{ padding: "10%", color: "#FFFFFF" }}>Hello</Title>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TagList;
