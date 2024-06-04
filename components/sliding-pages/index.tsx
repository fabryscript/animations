import { GestureHandlerRootView } from "react-native-gesture-handler";
import SettingsPage from "./components/SettingsPage";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions, View } from "react-native";
import FeedPage from "./components/FeedPage";
import ProfilePage from "./components/ProfilePage";

const { width, height } = Dimensions.get("window");

export default function SlidingPagesComponent() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Carousel
          data={[<SettingsPage />, <FeedPage />, <ProfilePage />]}
          loop={false}
          style={{ flex: 1 }}
          width={width}
          height={height}
          renderItem={({ item }) => item}
        />
      </View>
    </GestureHandlerRootView>
  );
}
