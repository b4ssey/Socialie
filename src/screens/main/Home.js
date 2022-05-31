import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Searchbar, IconButton, Colors, Headline } from "react-native-paper";
import PostList from "../../components/list/PostList";

function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const emptydata = [
    {
      id: 1,
      name: "Ubong",
      fname: "Ubong Bassey",
      location: "Dublin, Ireland.",
      repost: "50",
      comment: "100",
    },
    {
      id: 2,
      name: "Ekemini",
      fname: "Ekemini Bassey",
      location: "London, UK.",
      repost: "25",
      comment: "30",
    },
    {
      id: 3,
      name: "Deborah",
      fname: "Deborah Oladipo",
      location: "Ontario, Canada.",
      repost: "500",
      comment: "1000",
    },
    {
      id: 4,
      name: "Uwakmfon",
      fname: "Uwakmfon Bassey",
      location: "Abuja, Nigeria.",
      repost: "50",
      comment: "100",
    },
    {
      id: 5,
      name: "Charles",
      fname: "Charles Umoren",
      location: "Lagos, Nigeria.",
      repost: "150",
      comment: "1200",
    },
  ];

  return (
    <>
      <FlatList
        data={emptydata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <PostList
              fName={item.fname}
              name={item.name}
              location={item.location}
              repost={item.repost}
              comment={item.comment}
              onPress={() => navigation.navigate("postHome")}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: "5%" },
});

export default Home;
