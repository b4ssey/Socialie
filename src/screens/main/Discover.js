import React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Searchbar, IconButton } from "react-native-paper";

function Discover(props) {
  return (
    <View style={styles.container}>
      <Headline>Discover</Headline>
      <View
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
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
        {/* <IconButton
          icon="inbox-outline"
          color="#F4648B"
          size={20}
          onPress={() => console.log("Pressed")}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: "5%" },
});

export default Discover;
