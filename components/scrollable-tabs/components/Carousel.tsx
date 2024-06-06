import { Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useContext } from "react";
import { CarouselValueContext } from "@/components/interpolating-button/context/CarouselValueContext";
import { tabs } from "../tabs";

const { width, height } = Dimensions.get("screen");

export default function STCarousel() {
  const [, set] = useContext(CarouselValueContext);

  return (
    <Carousel
      loop={false}
      data={tabs}
      renderItem={({ item }) => item.component}
      width={width}
      height={height}
      onProgressChange={(_, absolute) => set(absolute)}
    />
  );
}
