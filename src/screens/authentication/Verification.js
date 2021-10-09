import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Paragraph, Button, Text } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

function Verification() {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const CELL_COUNT = 4;
  return (
    <View style={styles.container}>
      <>
        <Headline>Get a code?</Headline>
        <Paragraph>fill your OTP code below</Paragraph>
      </>
      <View style={{ height: "5%" }} />
      <>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </>
      <View style={{ height: "5%" }} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paragraph>Didn’t receive code?</Paragraph>
        <Button uppercase={false}>Resend.</Button>
      </View>
      <View style={{ height: "5%" }} />
      <Button mode="contained">Let's go</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: "5%", flex: 1, justifyContent: "center" },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "#000",
    fontSize: 36,
    textAlign: "center",
  },
  focusCell: {
    // borderBottomColor: "#F4648B",
    borderBottomWidth: 2,
  },
});

export default Verification;
