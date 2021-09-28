import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Avatar, Text, Paragraph, Button } from "react-native-paper";

function HomeList(props) {
  return (
    <View style={styles.container}>
      <Card style={{ paddingHorizontal: "2.5%" }}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
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
        <Paragraph numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          eu nisi id pulvinar. Praesent urna neque, dictum ut viverra id,
          posuere id urna. Mauris sed semper lectus.
        </Paragraph>
        <Card.Actions>
          <Button icon="recycle-variant">435</Button>
          <Button icon="message-outline">23</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: "5%" },
});

export default HomeList;
