import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Caption, Card, Paragraph, Title } from "react-native-paper";

function Profile(props) {
  return (
    <View style={styles.container}>
      <>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Avatar.Image
            size={60}
            source={require("../../../assets/profile-image.png")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Card.Content style={{ alignItems: "center" }}>
              <Title>862</Title>
              <Paragraph>Followers</Paragraph>
            </Card.Content>
            <Card.Content style={{ alignItems: "center" }}>
              <Title>238</Title>
              <Paragraph>Following</Paragraph>
            </Card.Content>
            <Card.Content>
              <Title>942</Title>
              <Paragraph>Likes</Paragraph>
            </Card.Content>
          </View>
        </View>
      </>
      <>
        <Title>Diana Kiev</Title>
        <Caption style={{ color: "#999999" }}>South America</Caption>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ultricies convallis tortor quis rutrum. Maecenas non massa ut felis
          laoreet sodales eget ut sapien.
        </Paragraph>
        <Paragraph style={{ color: "#F4648B" }}>site.com/profile</Paragraph>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%" },
});

export default Profile;
