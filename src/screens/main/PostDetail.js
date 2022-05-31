import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CommentList from "../../components/list/CommentList";
import PerPost from "../../components/reusables/PerPost";

const emptyComments = [
  {
    id: 1,
    name: "Albert Doonkey",
    time: "1hr",
    comment:
      "It’s just something Quotes. Wish i was there too with you. Nice One! 😍",
    likes: "1",
  },
  {
    id: 2,
    name: "Maria Lebanov",
    time: "1hr",
    comment: "Sickkkkkk 〽️",
    likes: "1",
  },
  {
    id: 3,
    name: "Mark Marquez",
    time: "1hr",
    comment: "Nice Quotes, GBU ⚡️",
    likes: "1",
  },
  {
    id: 4,
    name: "Albert Doonkey",
    time: "1hr",
    comment: "Hey @Stephany J, let’s catch up! On Monday. Food on Me!. 😄",
    likes: "1",
  },
];
function PostDetail({ navigation, route }) {
  const eachPost = route.params;
  return (
    <FlatList
      data={emptyComments}
      keyExtractor={(item) => item.id.toString()}
      //   contentContainerStyle={{ paddingHorizontal: "5%" }}
      ListHeaderComponent={() => {
        return (
          <View style={{ padding: "5%" }}>
            <PerPost
              name={eachPost.fname}
              time={"12 mins ago"}
              like={100}
              comment={50}
            />
          </View>
        );
      }}
      renderItem={({ item }) => {
        return (
          <CommentList
            name={item.name}
            time={item.time}
            comment={item.comment}
            likes={item.likes}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PostDetail;
