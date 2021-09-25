import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Headline, Paragraph, TextInput } from "react-native-paper";

function Register(props) {
  return (
    <View style={styles.container}>
      <>
        <Headline>Uhm,</Headline>
        <Paragraph>Start creating account, lemme help.</Paragraph>
      </>

      <>
        <TextInput label="Email / Username" placeholder="your@email.com" />
        <TextInput label="Full name" placeholder="Your Name" />
        <TextInput
          label="Password"
          placeholder="at least 8 words"
          secureTextEntry
        />
        <TextInput
          label="Confirm Password"
          placeholder="retype it again"
          secureTextEntry
        />
      </>

      <Button>Sign Up</Button>

      <View style={{ flexDirection: "row" }}>
        <Paragraph>
          By clicking Sign Up, you agree to our
          <Button mode="text">Terms and Conditions.</Button>.
        </Paragraph>
      </View>

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

export default Register;
