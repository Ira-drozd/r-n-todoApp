import React from "react";
import { THEME } from "../theme";
import { View, StyleSheet } from "react-native";
import { AppTextBold } from "./UI/AppTextBold";

export const Navbar = (props) => (
  <View style={styles.navbar}>
    <AppTextBold style={styles.text}>{props.title}</AppTextBold>
  </View>
);

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
    paddingBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
