import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";

function TagList(props) {
  return (
    <Card.Cover source={require("../../../assets/tag-discover.png")}>
      <Card.Actions>
        <Button>Nature</Button>
      </Card.Actions>
    </Card.Cover>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TagList;
