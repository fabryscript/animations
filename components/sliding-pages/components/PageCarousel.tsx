import React, { useContext } from "react";
import Carousel from "react-native-reanimated-carousel";
import FeedPage from "./FeedPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import { Dimensions } from "react-native";
import { CarouselValueContext } from "../context/CarouselValueContext";

const { width, height } = Dimensions.get("window");

export default function PageCarousel() {
  const [, set] = useContext(CarouselValueContext);
  return (
    <Carousel
      data={[<SettingsPage />, <FeedPage />, <ProfilePage />]}
      loop={false}
      style={{ flex: 1 }}
      width={width}
      height={height}
      renderItem={({ item }) => item}
      onProgressChange={(_, absolute) => set(absolute)}
    />
  );
}
