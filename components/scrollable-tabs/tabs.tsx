import { View } from "react-native";

export const tabs = [
  {
    name: "Home",
    component: <View style={{ flex: 1, backgroundColor: "red" }} />,
  },
  {
    name: "Chats",
    component: <View style={{ flex: 1, backgroundColor: "blue" }} />,
  },
  {
    name: "Calls",
    component: <View style={{ flex: 1, backgroundColor: "black" }} />,
  },
  {
    name: "Settings",
    component: <View style={{ flex: 1, backgroundColor: "purple" }} />,
  },
];
