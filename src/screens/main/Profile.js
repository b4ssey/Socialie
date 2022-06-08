import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  Avatar,
  Caption,
  Card,
  Divider,
  Paragraph,
  Title,
} from "react-native-paper";
import PostList from "../../components/list/PostList";
import TwoRowCard from "../../components/reusables/TwoRowCard";

const emptydata = [
  {
    id: 1,
    name: "Ubong",
    fname: "Ubong Bassey",
    location: "Dublin, Ireland.",
    like: "50",
    comment: "100",
  },
  {
    id: 2,
    name: "Ubong",
    fname: "Ubong Bassey",
    location: "London, UK.",
    like: "25",
    comment: "30",
  },
  {
    id: 3,
    name: "Ubong",
    fname: "Ubong Bassey",
    location: "Ontario, Canada.",
    like: "500",
    comment: "1000",
  },
];

function Profile(props) {
  return (
    <>
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
      <Divider />
      <FlatList
        data={emptydata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <PostList
              fName={item.fname}
              name={item.name}
              location={item.location}
              like={item.like}
              comment={item.comment}
              // onPress={() => navigation.navigate("postHome", item)}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: "5%", paddingBottom: "2.5%" },
});

export default Profile;
