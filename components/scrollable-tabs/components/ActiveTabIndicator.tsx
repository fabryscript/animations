import { CarouselValueContext } from "@/components/interpolating-button/context/CarouselValueContext";
import { useContext } from "react";
import { View } from "react-native";

export default function ActiveTabIndicator() {
  const [value] = useContext(CarouselValueContext);

  return (
    <View
      style={[
        {
          backgroundColor: "black",
          position: "absolute",
          width: 100,
          left: 0,
          height: 36,
          borderRadius: 255,
          transform: [
            {
              translateX: value * 100,
            },
          ],
        },
      ]}
    />
  );
}
