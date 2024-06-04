import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View } from "react-native";
import { CarouselValueProvider } from "./context/CarouselValueContext";
import SlidingButton from "./components/SlidingButton";
import PageCarousel from "./components/PageCarousel";

export default function SlidingPagesComponent() {
  return (
    <CarouselValueProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View
          style={{ flex: 1, backgroundColor: "black", position: "relative" }}
        >
          <PageCarousel />
          <SlidingButton />
        </View>
      </GestureHandlerRootView>
    </CarouselValueProvider>
  );
}
