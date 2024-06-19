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
        <Buttons />
        <View
          style={{
            display: "flex",
            backgroundColor: "white",
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 32,
            gap: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Hourly</Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>0.50€/30 min</Text>
          </View>
          <View
            style={{
              borderRadius: 16,
              backgroundColor: "#E9E9E9",
              width: "100%",
              height: 80,
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            backgroundColor: "white",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 32,
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View style={{ display: "flex", gap: 4 }}>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Day pass</Text>
            <Text style={{ fontSize: 20, opacity: 0.5 }}>20% discount</Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 255,
              paddingHorizontal: 20,
              paddingVertical: 16,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>Pay 20€</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function Buttons() {
  return (
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
  );
}
