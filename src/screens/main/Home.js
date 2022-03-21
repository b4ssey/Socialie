import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Searchbar, IconButton, Colors, Headline } from "react-native-paper";
import PostDetail from "./PostDetail";

function Home(props) {
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
        ListHeaderComponent={() => {
          return (
            <>
              <View style={styles.container}>
                {/* <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: "5%",
                    marginVertical: "5%",
                  }}
                >
                  <Searchbar
                    placeholder="Search"
                    iconColor="#F4648B"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                  />
                  <IconButton
                    icon="inbox-outline"
                    color="#F4648B"
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                </View> */}
                <Headline>Feeds</Headline>
              </View>
            </>
          );
        }}
        renderItem={({ item }) => {
          return (
            <PostDetail
              fName={item.fname}
              name={item.name}
              location={item.location}
              repost={item.repost}
              comment={item.comment}
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
