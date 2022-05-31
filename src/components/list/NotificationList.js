import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Paragraph,
  Divider,
  Caption,
  Subheading,
  Avatar,
} from "react-native-paper";

function NotificationList({ name, action }) {
  return (
    <>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar.Image
            size={30}
            source={require("../../../assets/profile-image.png")}
          />
          <View style={{ paddingStart: "7.5%" }}>
            <Subheading>{name}</Subheading>
            {action === "follow" ? (
              <Paragraph>{name} followed you</Paragraph>
            ) : action == "repost" ? (
              <Paragraph>{name} reposted your post</Paragraph>
            ) : (
              <Paragraph>{name} liked your post</Paragraph>
            )}
          </View>
        </View>

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
    alignItems: "center",
  },
});

export default NotificationList;
