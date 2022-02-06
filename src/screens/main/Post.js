import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
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
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <View style={{ justifyContent: "center", paddingHorizontal: "5%" }}>
        <KeyboardAvoidingView>
          <TextInput label="location" placeholder="Where are you?" />
          <TextInput label="caption" placeholder="What's on your mind?" />
          {!image ? (
            <ImageBackground
              style={{
                width: 200,
                height: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button icon={"image-plus"} onPress={pickImage}>
                Add Image
              </Button>
            </ImageBackground>
          ) : (
            //   <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Post;
