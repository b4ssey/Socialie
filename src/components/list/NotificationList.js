import React from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph, Divider, Caption } from "react-native-paper";

function NotificationList({ name, action }) {
  return (
    <>
      <View style={styles.container}>
        {action === "follow" ? (
          <Paragraph>{name} followed you</Paragraph>
        ) : action == "repost" ? (
          <Paragraph>{name} reeposted your post</Paragraph>
        ) : (
          <Paragraph>{name} liked your post</Paragraph>
        )}
        <Caption>1hr ago</Caption>
      </View>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default NotificationList;
