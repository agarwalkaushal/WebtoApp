import { version } from "react";
import { StyleSheet, Dimensions, Platform } from "react-native";
import { COLORS } from "../utils/colors";
import { scale, verticalScale } from "../utils/responsiveScaling";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
  "window"
);

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

// const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(100);
const itemHorizontalMargin = wp(0);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchBarContainer: {
    width: "100%",
    backgroundColor: COLORS.PRIMARY_DARK,
    borderWidth: 0,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  searchBarInputContainer: {
    borderRadius: scale(4),
    marginVertical: verticalScale(4),
    marginHorizontal: scale(12),
    backgroundColor: COLORS.SECONDARY_LIGHT,
  },
  slider: { height: verticalScale(175) },
  slide: { width: "100%", height: verticalScale(175) },
  heading: {
    marginHorizontal: scale(12),
  },
  headingText: {
    fontSize: scale(16),
    lineHeight: verticalScale(24),
    fontWeight: "bold",
    color: "black",
  },
});

export const topCollectionsStyles = StyleSheet.create({
  container: {
    marginHorizontal: scale(8),
  },
  subContainer: {
    flexDirection: "row",
    width: "100%",
  },
  card: {
    flex: 1,
    marginHorizontal: scale(4),
    marginVertical: verticalScale(4),
    justifyContent: 'center',
    height: 70,
    borderWidth: 1,
  },
  cardText: {
    textAlign: "center",
  },
});
