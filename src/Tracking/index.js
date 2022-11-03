import React, { useEffect, useState, useRef, useCallback } from "react";
import { BackHandler } from "react-native";
import { ActivityIndicator, View } from "react-native";
import { WebView } from "react-native-webview";
import { COLORS } from "../utils/colors";
import { urls } from "../utils/urls";
import { styles } from "../Home/styles";

export default function Tracking() {
  const [visible, setVisible] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const webViewRef = useRef(null);

  const backHandler = useCallback(() => {
    if (canGoBack) {
      webViewRef.current.goBack();
    } else {
      BackHandler.exitApp();
    }
    return true;
  }, [canGoBack, webViewRef]);

  const onNavigationStateChange = useCallback(
    (navigationState) => {
      setCanGoBack(navigationState.canGoBack);
    },
    [webViewRef, setCanGoBack]
  );

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backHandler);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandler);
    };
  }, [backHandler]);

  const _renderActivityIndicator = () => {
    return (
      <ActivityIndicator
        style={styles.loadingIndicator}
        color={COLORS.PRIMARY_DARK}
        size="large"
      />
    );
  };

  return (
    <View style={styles.container}>
      <WebView
        allowsBackForwardNavigationGestures
        source={{
          uri: urls.TRACKING,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        ref={webViewRef}
        onNavigationStateChange={onNavigationStateChange}
      />
      {/* {visible ? _renderActivityIndicator() : null} */}
    </View>
  );
}
