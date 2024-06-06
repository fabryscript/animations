import { Text, View } from "react-native";

export default function ProfilePage() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        paddingVertical: 24,
        paddingHorizontal: 20,
        gap: 32,
      }}
    >
      <Text style={{ color: "white", fontWeight: 700, fontSize: 36 }}>
        Profile
      </Text>
      <View style={{ display: "flex", gap: 48 }}>
        <View
          style={{
            borderRadius: 255,
            backgroundColor: "white",
            width: 128,
            height: 128,
            opacity: 0.2,
            alignSelf: "center",
          }}
        />
        <View style={{ display: "flex", gap: 16 }}>
          <View
            style={{
              borderRadius: 32,
              backgroundColor: "white",
              width: "100%",
              height: 100,
              opacity: 0.2,
            }}
          />
          <View
            style={{
              borderRadius: 32,
              backgroundColor: "white",
              width: "100%",
              height: 340,
              opacity: 0.2,
            }}
          />
        </View>
      </View>
    </View>
  );
}
