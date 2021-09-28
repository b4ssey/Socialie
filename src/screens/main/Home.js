import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar, IconButton, Colors, Headline } from "react-native-paper";

function Home(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: "5%",
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
      </View>
      <Headline>Feeds</Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", flex: 1, paddingHorizontal: "5%" },
});

export default Home;
