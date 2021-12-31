import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Headline } from "react-native-paper";
import NotificationList from "../../components/list/NotificationList";

const emptydata = [
  { id: 1, name: "Nsikak", action: "like" },
  { id: 2, name: "Semfon", action: "repost" },
  { id: 3, name: "Abasiekeme", action: "repost" },
  { id: 4, name: "Kufre", action: "follow" },
  { id: 5, name: "Ese", action: "like" },
  { id: 6, name: "Jade", action: "follow" },
  { id: 7, name: "Ini", action: "like" },
  { id: 8, name: "Idara", action: "repost" },
  { id: 9, name: "Abiola", action: "repost" },
  { id: 10, name: "Rasaq", action: "follow" },
  { id: 11, name: "Ife", action: "like" },
  { id: 12, name: "Pascal", action: "follow" },
];

function Notification(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={emptydata}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return <NotificationList name={item.name} action={item.action} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Notification;
