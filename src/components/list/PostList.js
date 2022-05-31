import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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

function PostList({ fName, location, like, comment, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
        <Card.Title
          title={fName}
          subtitle={location}
          titleStyle={{ color: "#F4648B" }}
          style={{ paddingEnd: "5%" }}
          left={(props) => (
            <Avatar.Image
              {...props}
              source={require("../../../assets/profile-image.png")}
            />
          )}
          right={(props) => <Text {...props}>1 hr</Text>}
        />
        <Card.Cover
          source={require("../../../assets/bitmap-image.png")}
          resizeMode="stretch"
          // style={{ backgroundColor: "#ffffff" }}
        />
        <Paragraph style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eu nisi id pulvinar. Praesent urna neque, dictum ut viverra id,
          posuere id urna. Mauris sed semper lectus.
        </Paragraph>
        <Card.Actions>
          <Button icon="heart">{like}</Button>
          <Button icon="message-outline">{comment}</Button>
        </Card.Actions>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: "5%" },
});

export default PostList;
