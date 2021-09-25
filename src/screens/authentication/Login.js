import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Headline, Paragraph, TextInput } from "react-native-paper";

function Login(props) {
  return (
    <View style={styles.container}>
      <>
        <Headline>Hey!</Headline>
        <Paragraph>Welcome to Socialie, Please Login to continue.</Paragraph>
      </>

      <>
        <TextInput label="Email / Username" placeholder="your@email.com" />
        <TextInput label="Password" placeholder="**********" secureTextEntry />
        <Button mode="text">Forgot Password?</Button>
      </>

      <Button>Log in</Button>

      <View style={{ flexDirection: "row" }}>
        <Paragraph>
          Don’t have an account? <Button mode="text">Sign up</Button>.
        </Paragraph>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Login;
