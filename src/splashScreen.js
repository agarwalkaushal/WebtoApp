import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";
import { COLORS } from "./utils/colors";
import { scale, verticalScale } from "./utils/responsiveScaling";

const Logo = require("../src/images/logo.png");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY_DARK} />
      {/* <Image source={Logo} style={styles.logo}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_DARK,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: -verticalScale(50),
    width: scale(200),
    height: verticalScale(200),
  }
});
