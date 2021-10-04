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

function PostDetail(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          //   justifyContent: "center",
          //   paddingHorizontal: "5%",
          alignItems: "center",
        }}
      >
        <IconButton
          icon="arrow-left"
          color="#F4648B"
          size={20}
          onPress={() => console.log("Pressed")}
        />
        <Headline>Mark's Post</Headline>
      </View>

      <Divider />

      <View>
        <Card.Title
          title="Stephen J"
          subtitle="Paris, France"
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
          style={{ backgroundColor: "#ffffff" }}
        />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eu nisi id pulvinar. Praesent urna neque, dictum ut viverra id,
          posuere id urna. Mauris sed semper lectus.
        </Paragraph>
        <Card.Actions>
          <Button icon="recycle-variant">435</Button>
          <Button icon="message-outline">23</Button>
        </Card.Actions>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: "5%" },
});

export default PostDetail;
