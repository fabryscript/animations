import { View } from "react-native";
import { CarouselValueProvider } from "../interpolating-button/context/CarouselValueContext";
import STCarousel from "./components/Carousel";
import Tabs from "./components/Tabs";

export default function ScrollableTabsComponent() {
  return (
    <CarouselValueProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <View
          style={{
            display: "flex",
            paddingVertical: 10,
            paddingHorizontal: 16,
          }}
        >
          <Tabs />
        </View>
        <STCarousel />
      </View>
    </CarouselValueProvider>
  );
}
