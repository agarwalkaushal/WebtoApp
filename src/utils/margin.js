import { StyleSheet } from "react-native";
import { scale, verticalScale } from "./responsiveScaling";

export const margin = (height, width) =>
  StyleSheet.create({
    height: {
      height: verticalScale(height),
    },
    width: {
      width: scale(width),
    },
  });
