import React, { useEffect, useState, useRef, useCallback } from "react";
import { BackHandler } from "react-native";
import { View } from "react-native";
import { WebView } from "react-native-webview";
import { urls } from "../utils/urls";
import { styles } from "./styles";
import { REACT_APP_BASE_URL } from "@env"

export default function Home({ route, navigation }) {
  const webViewUrl = REACT_APP_BASE_URL;

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

  return (
    <View style={styles.container}>
      <WebView
        allowsBackForwardNavigationGestures
        source={{
          uri: webViewUrl
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
        ref={webViewRef}
        onNavigationStateChange={onNavigationStateChange}
        // userAgent={"Folk Bazar - Consumer App"}
      />
      {/* {visible ? _renderActivityIndicator() : null} */}
    </View>
  );
}
