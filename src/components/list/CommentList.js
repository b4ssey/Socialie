import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

function CommentList(props) {
  return (
    <View style={styles.container}>
      <Card.Title
        title="Stephen J"
        subtitle="1 hr"
        titleStyle={{ color: "#F4648B" }}
        style={{ paddingEnd: "5%" }}
        left={(props) => (
          <Avatar.Image
            {...props}
            source={require("../../../assets/profile-image.png")}
          />
        )}
      />
      <Button>Like</Button>
      <Button>Reply</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default CommentList;
