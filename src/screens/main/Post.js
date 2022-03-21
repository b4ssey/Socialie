import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import { Badge, Button, IconButton, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

function Post(props) {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <View style={{ justifyContent: "center", paddingHorizontal: "5%" }}>
        <KeyboardAvoidingView>
          <View style={{ height: "5%" }} />
          <TextInput
            label="caption"
            placeholder="What's on your mind?"
            // multiline={true}
            // height={150}
            // style={{ lineHeight: 50 }}
          />
          {/* <View style={{ height: "5%" }} />
          <TextInput label="location" placeholder="Where are you?" /> */}
          <View style={{ height: "5%" }} />
          {!image ? (
            <ImageBackground
              style={{
                width: 200,
                height: 200,
                justifyContent: "center",
                alignSelf: "center",
                borderColor: "#FAD9E6",
                borderWidth: 5,
              }}
            >
              <Button icon={"image-plus"} onPress={pickImage}>
                Add Image
              </Button>
            </ImageBackground>
          ) : (
            <>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: image }}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />

                <IconButton
                  icon="delete"
                  // color="#F4648B"
                  size={30}
                  onPress={() => setImage(null)}
                />
              </View>

              {/* <View style={{ height: "25%" }} />
              <Button
                uppercase={false}
                labelStyle={{ textDecorationLine: "underline" }}
                onPress={() => setImage(null)}
              >
                delete?
              </Button> */}
            </>
          )}
          <View style={{ height: "5%" }} />

          <Button mode="contained">Submit</Button>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Post;
