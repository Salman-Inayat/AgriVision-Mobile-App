import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const App = () => {
  const [showWebView, setShowWebView] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setShowWebView(status === "granted");
    })();
  }, []);

  if (!showWebView) {
    return (
      <View>
        <Text>Grant Permission first</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
        source={{ uri: "https://modest-minsky-3b8009.netlify.app/" }}
        originWhitelist={["*"]}
        allowsInlineMediaPlayback
        javaScriptEnabled
        scalesPageToFit
        allowInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState
        javaScriptEnabledAndroid
        geolocationEnabled={true}
        useWebkit
        style={{ paddingTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
});

export default App;
