import { Text, View } from "react-native";

export default function FeedPage() {
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
        Feed
      </Text>
      <View
        style={{
          borderRadius: 32,
          backgroundColor: "white",
          width: "100%",
          height: 630,
          opacity: 0.2,
        }}
      />
    </View>
  );
}
