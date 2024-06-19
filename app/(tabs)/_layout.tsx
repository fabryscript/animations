import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Animations",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="archive" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rotation-carousel"
        options={{
          title: "Rotation Carousel",
          href: null,
        }}
      />
      <Tabs.Screen
        name="holo-sticker"
        options={{
          title: "Holo Sticker",
          href: null,
        }}
      />
      <Tabs.Screen
        name="interpolating-button"
        options={{
          title: "Interpolating Button",
          href: null,
        }}
      />
      <Tabs.Screen
        name="scrollable-tabs"
        options={{
          title: "Scrollable Tabs",
          href: null,
        }}
      />
      <Tabs.Screen
        name="collapsable-wheel"
        options={{
          title: "Collapsable Wheel",
          href: null,
        }}
      />
    </Tabs>
  );
}
