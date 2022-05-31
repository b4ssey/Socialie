import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CommentList from "../../components/list/CommentList";
import PerPost from "../../components/reusables/PerPost";

const emptyComments = [];
function PostDetail(props) {
  return (
    <FlatList
      data={emptyComments}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ paddingHorizontal: "5%" }}
      ListHeaderComponent={() => {
        return <PerPost name={"Stephany J"} time={"12 mins ago"} />;
      }}
      renderItem={() => {
        return <CommentList />;
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default PostDetail;
