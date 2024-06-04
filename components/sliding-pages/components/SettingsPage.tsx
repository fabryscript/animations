import { Text, View } from "react-native";

export default function SettingsPage() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        display: "flex",
        paddingVertical: 24,
        paddingHorizontal: 20,
        gap: 32,
      }}
    >
      <Text style={{ color: "white", fontWeight: 700, fontSize: 36 }}>
        Settings
      </Text>
      <View style={{ display: "flex", gap: 16 }}>
        {Array(4)
          .fill(null)
          .map((_, i) => (
            <View
              key={i}
              style={{
                borderRadius: 32,
                backgroundColor: "white",
                width: "100%",
                height: 100,
                opacity: 0.2,
              }}
            ></View>
          ))}
      </View>
    </View>
  );
}
