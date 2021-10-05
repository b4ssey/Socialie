import React from "react";
import { View, StyleSheet } from "react-native";
import { Drawer } from "react-native-paper";

function Settings(props) {
  const [active, setActive] = useState("");
  return (
    <>
      <Drawer.Section title="My Account">
        <Drawer.Item
          label="Dark Theme"
          active={active === "dark"}
          onPress={() => setActive("dark")}
        />
        <Drawer.Item
          label="My Profile"
          active={active === "profile"}
          onPress={() => setActive("profile")}
        />
        <Drawer.Item
          label="Change Password"
          active={active === "password"}
          onPress={() => setActive("password")}
        />
      </Drawer.Section>
      <Drawer.Section title="General Settings">
        <Drawer.Item
          label="Notifications"
          active={active === "notifications"}
          onPress={() => setActive("notifications")}
        />
        <Drawer.Item
          label="Privacy"
          active={active === "privacy"}
          onPress={() => setActive("privacy")}
        />
        <Drawer.Item
          label="Blocked Account"
          active={active === "blocked"}
          onPress={() => setActive("blocked")}
        />
      </Drawer.Section>
      <Drawer.Section title="Help">
        <Drawer.Item
          label="Term of Services"
          active={active === "services"}
          onPress={() => setActive("services")}
        />
        <Drawer.Item
          label="Tips and Trick"
          active={active === "tips"}
          onPress={() => setActive("tips")}
        />
      </Drawer.Section>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Settings;
