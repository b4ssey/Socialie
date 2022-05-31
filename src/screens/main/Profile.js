import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Caption, Card, Paragraph, Title } from "react-native-paper";
import TwoRowCard from "../../components/reusables/TwoRowCard";

function Profile(props) {
  return (
    <View style={styles.container}>
      <>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar.Image
            size={60}
            source={require("../../../assets/profile-image.png")}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TwoRowCard top="862" bottom="Followers" />
            <TwoRowCard top="238" bottom="Following" />
            <TwoRowCard top="942" bottom="Likes" />
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
  container: { padding: "5%" },
});

export default Profile;
