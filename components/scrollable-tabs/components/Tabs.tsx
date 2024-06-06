import { Text, View } from "react-native";
import ActiveTabIndicator from "./ActiveTabIndicator";
import { tabs } from "../tabs";

export default function Tabs() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 255,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F9F9F9",
        position: "relative",
      }}
    >
      <ActiveTabIndicator />
      {tabs.map(({ name }) => (
        <View
          key={name}
          style={{
            paddingVertical: 10,
            width: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "#D9D9D9" }}>{name}</Text>
        </View>
      ))}
    </View>
  );
}
