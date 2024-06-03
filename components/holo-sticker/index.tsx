import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, View } from "react-native";

export default function HoloStickerComponent() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          source={require("./assets/xcode.png")}
          style={{ width: 200, height: 200, zIndex: 10 }}
          resizeMode="stretch"
        />
        <LinearGradient
          colors={["#E02ACB", "#2AE07F", "#F7F7F7"]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>
    </View>
  );
}
