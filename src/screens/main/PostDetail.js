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

function PostDetail({ name, fName, location, repost, comment }) {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="arrow-left"
          color="#F4648B"
          size={20}
          // onPress={() => console.log("Pressed")}
        />
        <Headline>{name}'s Post</Headline>
      </View>

      <Divider /> */}

      <View>
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
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eu nisi id pulvinar. Praesent urna neque, dictum ut viverra id,
          posuere id urna. Mauris sed semper lectus.
        </Paragraph>
        <Card.Actions>
          <Button icon="recycle-variant">{repost}</Button>
          <Button icon="message-outline">{comment}</Button>
        </Card.Actions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: "5%" },
});

export default PostDetail;
