import React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Paragraph, TextInput, Button } from "react-native-paper";

function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.9, justifyContent: "center" }}>
        <>
          <Headline>Uhm,</Headline>
          <Paragraph>Start creating account, lemme help.</Paragraph>
        </>
        <View style={{ height: "5%" }} />
        <>
          <TextInput label="Email / Username" placeholder="your@email.com" />
          <View style={{ height: "2.5%" }} />
          <TextInput label="Full name" placeholder="Your Name" />
          <View style={{ height: "2.5%" }} />
          <TextInput
            label="Password"
            placeholder="at least 8 words"
            secureTextEntry
          />
          <View style={{ height: "2.5%" }} />
          <TextInput
            label="Confirm Password"
            placeholder="retype it again"
            secureTextEntry
          />
        </>

        <Button mode="contained" style={{ marginVertical: "5%" }}>
          Sign Up
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Paragraph>By clicking Sign Up, you agree to our.</Paragraph>
          <Button uppercase={false}>Terms and Conditions.</Button>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flex: 0.1,
        }}
      >
        <Paragraph>Already have an account ?</Paragraph>
        <Button uppercase={false} onPress={() => navigation.navigate("login")}>
          Log in.
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%", flex: 1, justifyContent: "center" },
});

export default Register;
