import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/authentication/Login";
import Register from "../../screens/authentication/Register";
import Verification from "../../screens/authentication/Verification";

const Stack = createNativeStackNavigator();

function Authentication(props) {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="verification" component={Verification} />
    </Stack.Navigator>
  );
}

export default Authentication;
