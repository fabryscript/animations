import { FlatList, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const animationsList = [
  {
    name: "Rotation Carousel",
    href: "/rotation-carousel",
  },
  {
    name: "Holo Sticker",
    href: "/holo-sticker",
  },
  {
    name: "Interpolating Button",
    href: "/interpolating-button",
  },
  {
    name: "Scrollable Tabs",
    href: "/scrollable-tabs",
  },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: "100%", paddingVertical: 16 }}
        data={animationsList}
        renderItem={({ item: { href, name } }) => (
          <View
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              paddingBottom: 12,
            }}
          >
            <Link href={href}>
              <Text
                style={{
                  color: "#2297EA",
                  fontSize: 24,
                }}
              >
                {name}
              </Text>
            </Link>
            <View
              style={{
                display: "flex",
                transform: "rotate(-90deg)",
              }}
            >
              <Ionicons name="arrow-down" size={24} color={"#2297EA"} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
