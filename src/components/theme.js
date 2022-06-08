import { DefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import merge from "deepmerge";

const theme = merge(NavigationDefaultTheme, {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#E11D74",
    accent: "#91D18B",
    // background: "#F4F4F4",
    // text: "#0B0A11",
    text: "#333333",
    placeholder: "#666666",
  },
});

export default theme;
