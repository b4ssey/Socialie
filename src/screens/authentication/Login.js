import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Headline, Paragraph, TextInput } from "react-native-paper";

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9, justifyContent: "center" }}>
        <>
          <Headline>Hey!</Headline>
          <Paragraph>Welcome to Socialie, Please Login to continue.</Paragraph>
        </>
        <View style={{ height: "5%" }} />
        <>
          <TextInput label="Email / Username" placeholder="your@email.com" />
          <View style={{ height: "2.5%" }} />
          <TextInput
            label="Password"
            placeholder="**********"
            secureTextEntry
          />
          <Button
            mode="text"
            uppercase={false}
            style={{ alignSelf: "flex-end" }}
          >
            Forgot Password?
          </Button>
        </>
        <View style={{ height: "2.5%" }} />
        <Button mode="contained">Log in</Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 0.1,
        }}
      >
        <Paragraph>Don’t have an account ? </Paragraph>
        <Button uppercase={false}>Sign up.</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%", flex: 1, justifyContent: "center" },
});

export default Login;
