import { ArrowRight } from "lucide-react-native";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { CarouselValueContext } from "../context/CarouselValueContext";

export default function SlidingButton() {
  return (
    <View
      style={{
        display: "flex",
        position: "absolute",
        bottom: 50,
        width: "100%",
        alignItems: "center",
      }}
    >
      <Pressable
        style={{
          width: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          borderRadius: 32,
          backgroundColor: "white",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Text style={{ fontWeight: 600, fontSize: 20 }}>Feed</Text>
        <ArrowRight size={24} color={"black"} />
      </Pressable>
    </View>
  );
}
