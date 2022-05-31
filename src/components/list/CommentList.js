import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Card,
  Button,
  Avatar,
  Paragraph,
  Text,
  Divider,
} from "react-native-paper";

function CommentList({ name, time, comment, likes }) {
  return (
    <>
      <View style={styles.container}>
        <Card.Title
          title={name}
          subtitle={time}
          titleStyle={{ fontSize: 15 }}
          left={(props) => (
            <Avatar.Image
              {...props}
              source={require("../../../assets/profile-image.png")}
            />
          )}
        />
        <Paragraph style={{ textAlign: "justify", paddingHorizontal: "5%" }}>
          {comment}
        </Paragraph>
        <Card.Actions>
          <Button icon="heart">{likes}</Button>
          {/* <Button uppercase={false}>Reply</Button> */}
        </Card.Actions>
      </View>
      <Divider />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CommentList;
