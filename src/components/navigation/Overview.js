import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { BottomNavigation, Button } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/main/Home";
import Discover from "../../screens/main/Discover";
import Notification from "../../screens/main/Notification";
import Profile from "../../screens/main/Profile";
import Post from "../../screens/main/Post";
import PostDetail from "../../screens/main/PostDetail";
import Settings from "../../screens/main/Settings";

const Stack = createNativeStackNavigator();

const HomeRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Feeds" }}
        />
        <Stack.Screen
          name="postHome"
          component={PostDetail}
          options={({ route }) => ({
            title: `${route.params.name}'s Post`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DiscoverRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen name="Discover" component={Discover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const PostRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Post">
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NotificationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AccountRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => ({
            headerRight: (props) => (
              <Button
                icon="menu"
                {...props}
                style={{ marginLeft: "-15%" }}
                onPress={() => navigation.navigate("Settings")}
              />
            ),
          })}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Overview(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home", icon: "home-outline", color: "#FDBDCE" },
    {
      key: "discover",
      title: "Discover",
      icon: "star-outline",
      color: "#F98CA9",
    },
    { key: "post", title: "Post", icon: "plus", color: "#F4648B" },
    {
      key: "notifications",
      title: "Notifications",
      icon: "bell-outline",
      color: "#EF4271",
    },
    { key: "account", title: "Account", icon: "account", color: "#E82055" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    discover: DiscoverRoute,
    post: PostRoute,
    notifications: NotificationRoute,
    account: AccountRoute,
  });
  return (
    <BottomNavigation
      barStyle={{ backgroundColor: "#ffffff" }}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Overview;
