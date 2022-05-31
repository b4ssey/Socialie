import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

function TwoRowCard({ top, bottom }) {
  return (
    <Card.Content style={{ alignItems: "center" }}>
      <Title>{top}</Title>
      <Paragraph>{bottom}</Paragraph>
    </Card.Content>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default TwoRowCard;
