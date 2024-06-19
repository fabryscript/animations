import { BlurView } from "expo-blur";
import { MousePointer2 } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function CollapsableWheelComponent() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#D9D9D9",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600" }}>Some map content</Text>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: 400,
          bottom: -24,
          display: "flex",
          gap: 8,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 16,
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Pressable
              style={{
                backgroundColor: "white",
                borderRadius: 32,
                paddingVertical: 12,
                paddingHorizontal: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <Text>Spot</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#E9E9E9",
                borderRadius: 32,
                paddingVertical: 12,
                paddingHorizontal: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                gap: 6,
                overflow: "hidden",
              }}
            >
              <Text>Zonal</Text>
              <Text style={{ fontSize: 14, opacity: 0.5 }}>2 days</Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "white",
              borderRadius: 255,
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <MousePointer2 size={16} color={"black"} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
