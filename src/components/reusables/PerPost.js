import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  IconButton,
  Title,
  Avatar,
  Paragraph,
  Text,
  Button,
  Headline,
  Divider,
} from "react-native-paper";

function PerPost({ name, time, post, like, comment }) {
  return (
    <View style={styles.container}>
      <View>
        <Card.Title
          title={name}
          subtitle={time}
          left={(props) => (
            <Avatar.Image
              {...props}
              source={require("../../../assets/profile-image.png")}
            />
          )}
        />
        <Card.Cover
          source={require("../../../assets/bitmap-image.png")}
          // resizeMode="contain"
          style={{
            backgroundColor: "#ffffff",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        />
        <Paragraph style={{ textAlign: "justify", paddingVertical: "2.5%" }}>
          {post}
        </Paragraph>
        <Card.Actions>
          <Button icon="heart">{like}</Button>
          <Button icon="message-outline">{comment}</Button>
        </Card.Actions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PerPost;
