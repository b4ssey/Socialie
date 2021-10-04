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

function CommentList(props) {
  return (
    <>
      <View>
        <Divider />
        <View style={styles.container}>
          <Card.Title
            title="Stephen J"
            subtitle="1 hr"
            titleStyle={{ color: "#F4648B" }}
            // style={{}}
            left={(props) => (
              <Avatar.Image
                {...props}
                source={require("../../../assets/profile-image.png")}
              />
            )}
          />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
            eu nisi id pulvinar. Praesent urna neque, dictum ut viverra id,
            posuere id urna. Mauris sed semper lectus.
          </Paragraph>
          <Card.Actions>
            <Button uppercase={false}>Like</Button>
            <Button uppercase={false}>Reply</Button>
          </Card.Actions>
        </View>
        <Divider />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%" },
});

export default CommentList;
